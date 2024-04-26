---
sidebar_position: 2
---

# State Management with Zustand

コンポーネント間の状態の管理には、Zustand（ドイツ語で状態を表す）というライブラリを利用しています。

React では、 props を使った親子関係の状態の受け渡しと、あるコンポーネント以下で有効になる useContext というフックを使った状態の受け渡しの 2 通りがあります。

Zustand を利用すると、（親子関係以外でも）必要なコンポーネント間で、props や Context を利用しなくても状態を共有して、参照あるいは変更することができます。

Zustand の詳細に関しては次の公式ページを参考にするとよいでしょう。

- https://github.com/pmndrs/zustand

サンプルアプリケーション SpotVisit では、マルチプレイのプレイヤー情報を Store として保持しています。

- プレイヤー情報を PlayerInfo 型として定義しており、
- Zustand の`create`を使って状態と状態更新関数の実体を定義しています
- 利用したいコンポーネントは`usePlayerInfoStore`を呼び出して使います

```ts
export type PlayerInfo = {
  multiplayConnect: boolean;
  multiplayAudio: boolean;
  multiplayGroupName?: string;
  multiplayPlayerId?: string;
  spotInfo: SpotResponse | undefined;
  setMultiplayConnect: (val: boolean) => void;
  setMultiplayAudio: (val: boolean) => void;
  setMultiplayGroupName: (val: string | undefined) => void;
  setMultiplayPlayerId: (val: string) => void;
  setSpotInfo: (arg: SpotResponse | undefined) => void;
};

const usePlayerInfoStore = create<PlayerInfo>((set) => ({
  multiplayConnect: false,
  multiplayAudio: false,
  multiplayGroupName: "",
  multiplayPlayerId: "",
  spotInfo: undefined,
  setMultiplayConnect: (val: boolean) =>
    set((state) => ({ ...state, multiplayConnect: val })),
  setMultiplayAudio: (val: boolean) =>
    set((state) => ({ ...state, multiplayAudio: val })),
  setMultiplayGroupName: (val: string | undefined) =>
    set((state) => ({ ...state, multiplayGroupName: val })),
  setMultiplayPlayerId: (val: string) =>
    set((state) => ({ ...state, multiplayPlayerId: val })),
  setSpotInfo: (selectedSpotInfo: SpotResponse | undefined) =>
    set(() => ({ spotInfo: selectedSpotInfo })),
}));
```

また、ブラウザを閉じたり、リロードしても破棄されない情報を保持したいときがあります。  
その場合は、Zustand の`persist`というミドルウェアを使って LocalStorage に保存します。

サンプルアプリケーションでは、次のようにプレイヤーのニックネームと選択したアバターを LocalStorage に保存しています。

```ts
export type AvatarSelectInfo = {
  playerName: string;
  avatarType: string;
  setPlayerName: (arg: string) => void;
  setAvatarType: (arg: string) => void;
};

const useAvatarSelectStore = create(
  persist<AvatarSelectInfo>(
    (set) => ({
      playerName: "",
      avatarType: "",
      setPlayerName: (newName) =>
        set((state) => ({ ...state, playerName: newName })),
      setAvatarType: (newType) =>
        set((state) => ({ ...state, avatarType: newType })),
    }),
    {
      //LocalStorageに保存する一意な名前を指定します
      name: "avatarSelectState",
    }
  )
);
```
