import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/BlogCard";

const BlogListPage = ({ data, pageContext }) => {
  const { basePath, title } = pageContext;
  const posts = data.allMdx.nodes.map(node => ({
    id: node.id,
    frontmatter: node.frontmatter,
//    slug: node.childMdx.slug
  }));

  return (
    <Layout pageTitle={title} isPostList={true}>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            basePath={basePath} 
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogListQuery($sourceInstanceName: String!) {
    allMdx(
      filter: { internal: { contentFilePath: { regex: $sourceInstanceName } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
      }
    }
  }
`;

export default BlogListPage;