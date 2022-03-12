import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="このサイトについて">
        <p>
          &emsp;管理人のmasayamatuがIT関係やその他日頃思うことについて、いろいろと語っていくサイトです。
          　　
          <br />
          <br />
          &emsp;ネットの情報にお世話になることが多いので、お世話になってばかりではなく
          自分も知見を共有していき、多少は世の中の役に立ちたいなとの思いで始めました。
          <br />
          <br />
          &emsp;サイト作成に利用した技術等はブログの方にまとめています。
        </p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
