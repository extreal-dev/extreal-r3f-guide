import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "Sample Application",
    description: (
      <>
        <Translate id="homepage.sample-application">
          ３次元空間をアバターで移動し、ボイスチャットやマルチプレイができる実用的なサンプルアプリケーションを公開しています。
          実際に動くサンプルのソースコードを、解説も併せて見ることで実践的な学習効果が見込めます。
        </Translate>
        <div>
          <b>
            <Link to="/docs/category/sample-application/">Learn more</Link>
          </b>
        </div>
      </>
    ),
  },
  {
    title: "Guide",
    description: (
      <>
        <Translate id="homepage.development-guide">
          開発者へのガイドとして、アバターの表示、360度動画の再生、バックエンドのAPIとの疎通、LiveKitを使ったマルチプレイといった詳細を解説しています。
          React Three
          FiberをXR空間への適用する際の、具体的な設計方針や実装方法を知ることができます。
        </Translate>
        <div>
          <b>
            <Link to="/docs/sample-app/development-guide/">Learn more</Link>
          </b>
        </div>
      </>
    ),
  },
  {
    title: "Learning",
    description: (
      <>
        <Translate id="homepage.learning">
          React Three Fiberを始めるための学習コンテンツを紹介しています。
          またReactのZustandライブラリを使った状態管理、LiveKitライブラリを使ったマルチプレイ適用方法も学ぶことができます。
        </Translate>
        <div>
          <b>
            <Link to="/docs/category/learning/">Learn more</Link>
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
