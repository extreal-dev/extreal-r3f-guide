---
sidebar_position: 1
---

# Introduction

このページでは、React Three Fiber (R3F)を使った XR アプリケーションの開発を学習するための方法や参考になるリンクを紹介します。

## 前提知識

R3F を使った開発では、React はもちろん、TypeScript、Three.js の開発知識も前提となります。

| 技術                   | 説明                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| JavaScript             | ウェブアプリ開発に用いられるスクリプト言語です。                                                                 |
| TypeScript             | JavaScript に静的型付けを追加したプログラミング言語です。                                                        |
| React                  | コンポーネントベースのアプローチで、ウェブアプリ開発に用いられる JavaScript ライブラリです。                     |
| Three.js               | Three.js は ウェブブラウザ上で 3 次元コンピュータグラフィックスを描画する JavaScript ライブラリおよび API です。 |
| React Three Fiber(R3F) | R3F は、React 上で宣言的に Three.js の描画オブジェクトを記述できるライブラリです。                               |
| OpenAPI Specification  | API の仕様を記述するための標準規格です。                                                                         |

## 参考サイト

これらの技術の参考となるリンクを紹介します。

### JavaScript Primer

React を学ぶには JavaScript の言語知識が必須です。 JavaScript を触れたことがない人は、まずは JavaScript の知識習得からお願いします。

[JavaScript Primer](https://jsprimer.net/)は、JavaScript の文法や機能を一から学べるサイトです。「第一部：基本文法」までの知識があれば、ひとまず充分です。[基本文法の目次](https://jsprimer.net/basic/)を見てわからないことがあれば学習してください。

### サバイバル TypeScript

[サバイバル TypeScript](https://book.yyts.org/)は、TypeScript を最短ルートで実務利用できることを目指したサイトです。

実務レベルに必要な一通りの知識が必要な場合はサバイバル TypeScript で学習しましょう。[読んで学ぶ TypeScript](https://book.yyts.org/reference)の見出しをみて内容がイメージできれば大丈夫です。

### React 公式サイト

React を学ぶには[React 公式サイト](https://ja.react.dev/)が一番お勧めです。

React を利用したことがない人は「クイックスタート」からはじめてください。「LEARN REACT」の内容まで理解できていれば、最低限の React の知識が身に付いています。わからない箇所があれば学習してください。

また、「API リファレンス」に書かれている下記のフックは使用頻度が高いので、あらかじめ読んで理解しておくことをお勧めします。

- [クイックスタート](https://ja.react.dev/learn)
- [インストール](https://ja.react.dev/learn/installation)
- [LEARN REACT](https://ja.react.dev/learn/describing-the-ui)
- [API リファレンス](https://ja.react.dev/reference)
  - [useCallback](https://ja.react.dev/reference/react/useCallback)
  - [useMemo](https://ja.react.dev/reference/react/useMemo)
  - [useEffect](https://ja.react.dev/reference/react/useEffect)
  - [useState](https://ja.react.dev/reference/react/useState)
  - [useRef](https://ja.react.dev/reference/react/useRef)
  - [useContext](https://ja.react.dev/reference/react/useContext)

### Three.js

Three.js は、WebGL を使用して Web ブラウザで 3D コンピュータグラフィックスを作成および表示するための JavaScript ライブラリおよび API です。

後述の React Three Fiber や drei を利用することで、簡単に Three.js の機能を利用できますが、前提として Three.js の基礎知識(シーン、カメラ、ライト、レンダラー、ジオメトリ、マテリアルなど)を知っておく必要があります。
次のページでこれらの知識を体系的に学ぶことができます。

- [Three.js 公式サイト](https://threejs.org/)
  - [examples](https://threejs.org/examples/)
  - [Fundamentals - three.js manual](https://threejs.org/manual/#en/fundamentals)

### React Three Fiber

React Three Fiber(R3F)は three.js 用の React レンダラーです。React のエコシステムに統合できる再利用可能なコンポーネントを使用して、シーンを宣言的に構築します。
公式サイトのドキュメントおよび Example で R3F の詳細を知ることができます。

- [React Tree Fiber 公式ドキュメント](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
  - [Examples Showcase](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)

また、Drei（ドイツ語で 3 という意味）というライブラリがあり、 React Three Fiber (R3F) 用の便利なヘルパーと抽象化を提供しています。
カメラ、照明、ローダーなどの一般的な 3D 要素を簡単に実装できるコンポーネントやフックがあり、開発効率が大幅に向上します。

- [Drei 公式ページ](https://github.com/pmndrs/drei)
  - [Drei Storybook デモサイト](https://drei.pmnd.rs/)

### OpenAPI Specification

OpenAPI Specification の詳細については[公式ドキュメント(英語版)](https://www.openapis.org/what-is-openapi)を参考してください。

#### OpenAPI Specification の見方について

[Swagger Editor](https://editor.swagger.io/)を使用することで API のリクエスト、レスポンスなどの詳細を確認できます。
[API 仕様](https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml)の内容を[Swagger Editor](https://editor.swagger.io/)のエディターに貼るとプレビューにその内容が表示されます。

その他の Swagger 機能については[What Is Swagger?](https://swagger.io/docs/specification/about/)を参照してください。
