
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data, children }) => {
  console.log("ブログポストデータ:", data); // デバッグ用のログ
  
  return (
    <Layout>
      <div style={{ border: '1px solid red', padding: '20px', margin: '20px' }}>
        <h1>デバッグ - ブログ記事詳細ページ</h1>
        
        {data && data.mdx && (
          <div>
            <h2>取得できたデータ:</h2>
            <pre>{JSON.stringify(data.mdx.frontmatter, null, 2)}</pre>
          </div>
        )}
        
        {children ? (
          <div>
            <h2>子コンテンツ:</h2>
            {children}
          </div>
        ) : (
          <p>コンテンツが取得できませんでした</p>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
    }
  }
`;

export default BlogPost;