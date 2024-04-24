import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "Reference for Virtual Communication",
    description: (
      <>
        <Translate id="homepage.reference-for-virtual-communication">
          アバターやモーションの表示やボイスチャット、マルチプレイといった仮想空間でのコミュニケーションに必要なリファレンスを提供しています。
        </Translate>
        <div>
          <b>
            <Link to="/docs/intro">Learn more</Link>
          </b>
        </div>
      </>
    ),
  },
  {
    title: "Helpful Example",
    description: (
      <>
        <Translate id="homepage.helpful-example">
          360度画像や360度動画の再生、バックエンドのAPIとの疎通、Zustandを使った状態管理、LiveKitを使ったマルチプレイといった実用的なサンプルアプリケーションとその作り方の解説を公開しています。
        </Translate>
        <div>
          <b>
            <Link to="/docs/category/sample-application">Learn more</Link>
          </b>
        </div>
      </>
    ),
  },
  {
    title: "Learning React Three Fiber",
    description: (
      <>
        <Translate id="homepage.learning">
          React Three Fiber を使うための基礎的な学習コンテンツを紹介します。
          これからReact、TypeScriptを学びたい方も必要に応じて学ぶことができます。
        </Translate>
        <div>
          <b>
            <Link to="/docs/category/learning">Learn more</Link>
          </b>
        </div>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
