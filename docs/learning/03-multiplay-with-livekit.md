---
sidebar_position: 3
---

# Multiplay with Livekit

マルチプレイとボイスチャットでは、LiveKit という OSS ライブラリを利用しています。

- LiveKit の公式ドキュメントページ（ https://docs.livekit.io/realtime/ ）

LiveKit には、主に以下の WebRTC（Web リアルタイムコミュニケーション）の機能があります。

- カメラ映像のビデオ共有機能
- オーディオの共有機能
- 任意のデータの共有機能

サンプルアプリケーションでは、このうち、2 番目をボイスチャットに利用し、3 番目をマルチプレイに利用しています。

LiveKit を React で使うには、以下のページのように`LiveKitRoom`コンポーネントをアプリケーション内に配置することで WebRTC の各機能を使えるようになります。

- https://docs.livekit.io/realtime/quickstarts/react/

コード例を次に示します。

```tsx
<LiveKitRoom
  serverUrl={/*LiveKitサーバーのURL（ws/wssで接続する）*/}
  token={/*生成したトークン (LiveKitサーバーSDKで発行する)*/}
  onConnected={() => {
    console.log("[LiveKitRoom] Connected");
  }}
  onDisconnected={() => {
    console.log("[LiveKitRoom] Disconnected");
  }}
  connect={isConnect}
  audio={isUseAudio}
  video={isUseVideo}
>
  {/* 子のコンポーネントは省略 */}
</LiveKitRoom>
```

このコードでは`isConnect`を true にすることで接続が開始されます。  
`isUseAudio`が true ならボイスチャットが有効に、`isUseVideo`が true ならビデオカメラ共有が有効になります。

トークンの生成についての詳細は、次のページを参照してください。

- https://docs.livekit.io/realtime/server/generating-tokens/

サンプルアプリケーションでは、Node.js の Express を使ったトークン生成 API を作成してクライアントの React アプリケーションと接続しています。  
開発モードで LiveKit を起動するため、アクセスキーとシークレットが`devkey`と`secret`となっていますが、本番環境では異なることに注意してください。

```ts
import cors from "cors";
import express from "express";
import { AccessToken } from "livekit-server-sdk";

// Function to create a token, now accepts roomName and participantName as arguments
const createToken = async (roomName, participantName) => {
  const at = new AccessToken("devkey", "secret", {
    identity: participantName,
    // Token expires after 10 minutes
    ttl: "10m",
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return await at.toJwt();
};

const app = express();
app.use(cors());

const port = 3001;

// Modify GET request handler to extract roomName and participantName from query parameters
app.get("/getToken", async (req, res) => {
  const { roomName, participantName } = req.query;

  // Add parameter validation
  if (!roomName || !participantName) {
    return res
      .status(400)
      .send("Both roomName and participantName are required.");
  }

  res.send(await createToken(roomName, participantName));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

サンプルアプリケーションでは、`MultiplayChannel`というコンポーネントで`LiveKitRoom`をラップしており、その子としてボイスチャットのアバターの顔とボリュームを表示するコンポーネント`VoiceChatPanel`を配置しています。

```tsx
export type MultiplayChannelProps = {
  livekitServerUrl: string;
  accessTokenUrl: string;
  connect: boolean;
  audio: boolean;
  roomName: string;
  userName: string;
  onJoinCallback?: () => void;
  onLeaveCallback?: () => void;
};

const MultiplayChannel = (props: MultiplayChannelProps) => {
  const [accessToken, setAccessToken] = useState("");
  const { livekitServerUrl, accessTokenUrl } = props;
  const {
    connect,
    audio,
    roomName,
    userName,
    onLeaveCallback,
    onJoinCallback,
  } = props;

  useEffect(() => {
    if (connect) {
      (async () => {
        const ac = await MultiplayUtil.getAccessToken(
          accessTokenUrl,
          roomName,
          userName
        );
        setAccessToken(ac ?? "");
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connect]);

  return (
    <>
      <LiveKitRoom
        serverUrl={livekitServerUrl}
        token={accessToken}
        onConnected={() => {
          console.debug("[LiveKitRoom] Connected");
        }}
        onDisconnected={() => {
          console.debug("[LiveKitRoom] Disconnected");
        }}
        connect={connect}
        audio={audio}
        video={false}
      >
        <MultiplayChannelComponent
          groupName={roomName}
          playerId={userName}
          onConnectedCallback={onJoinCallback}
          onDisconnectedCallback={onLeaveCallback}
        />
        <VoiceChatPanel />
      </LiveKitRoom>
    </>
  );
};
```

MultiplayChannelComponent 内で、メッセージ受信の処理（`useDataChannel`の２番目引数のコールバック関数）が`useMultiplayChannelStore`から取得した`channel`にレスポンスをキューするように実装されています。  
また、useEffect 内で同じく`channel`のキューを監視して、デキューして送信(LiveKit の`send`)をするように実装されています。

このように、`channel`をキューとすることで、send と ReceivedDataMessage を受け取るコールバックが１つのコンポーネント内に書けるため、見通しが良くなります。そうしない場合は、送信関数の外部コンポーネントへの引き回しや受信のコールバックを外から指定できるようにすることが必要になります。

```tsx
export type MultiplayChannelComponentProps = {
  groupName: string;
  playerId: string;
  onConnectedCallback?: (groupName: string, playerId: string) => void;
  onDisconnectedCallback?: (groupName: string, playerId: string) => void;
};

const MultiplayChannelComponent = (props: MultiplayChannelComponentProps) => {
  const channel = useMultiplayChannelStore();

  const { groupName, playerId, onConnectedCallback, onDisconnectedCallback } =
    props;

  const { send } = useDataChannel(
    groupName,
    (msg: ReceivedDataMessage<string>) => {
      const payload = new TextDecoder().decode(msg.payload);
      console.debug(
        "onMessage[%o]: from: %o, %s",
        msg.topic,
        msg.from?.identity,
        payload
      );
      channel.enqueueResponse(payload);
    }
  );
  const state = useConnectionState();

  useEffect(() => {
    if (state === ConnectionState.Connected) {
      if (onConnectedCallback) {
        channel.setConnected(true);
        channel.setGroupName(groupName);
        channel.setPlayerId(playerId);
        onConnectedCallback(groupName, playerId);
      }
    } else if (state === ConnectionState.Disconnected) {
      if (onDisconnectedCallback) {
        onDisconnectedCallback(groupName, playerId);
        channel.setGroupName(undefined);
        channel.setPlayerId(undefined);
        channel.setConnected(false);
      }
    }
    channel.setConnectStatus(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (state === ConnectionState.Connected) {
      for (let i = 0; i < channel.requestQueue.length; i++) {
        const payload = channel.dequeueRequest();
        const msg = new TextEncoder().encode(payload);
        console.debug("Send Msg: ", payload);
        send(msg, {});
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, channel.requestQueue.length]);

  return <></>;
};
```
