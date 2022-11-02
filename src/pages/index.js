import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main>
      <Helmet
        title="indexpage"
        meta={[
          {
            name: "google-site-verification",
            content: "GtmV7Lk7zuHtow0twCWpy44eq3sXxv9SiHa1wzrZXbQ",
          },
        ]}
      />
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
