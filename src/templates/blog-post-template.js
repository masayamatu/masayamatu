// blog-post-template.jsを更新
import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { FaRegCalendarAlt } from "react-icons/fa";
import Tag from "../components/Tag";

// MDX v2では children として内容が渡される
const BlogPost = ({ data, children }) => {
  console.log(children)
  const post = data.mdx;
  const image = post.frontmatter.hero_image ? getImage(post.frontmatter.hero_image) : null;
  
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-1" />
            <span>Posted: {post.frontmatter.date}</span>
          </div>
          
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mb-4">
              <Tag tags={post.frontmatter.tags} />
            </div>
          )}
        </header>
        
        {image && (
          <div className="mb-8">
            <GatsbyImage 
              image={image} 
              alt={post.frontmatter.hero_image_alt || post.frontmatter.title} 
              className="rounded-lg shadow-md"
            />
            {post.frontmatter.hero_image_credit_text && (
              <p className="text-sm text-gray-500 mt-2">
                Photo: {post.frontmatter.hero_image_credit_text}
              </p>
            )}
          </div>
        )}
        
        <div className="prose max-w-none">
          {children}
        </div>
      </article>
    </Layout>
  );
};

// MDX v2ではbodyフィールドが不要
export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

export default BlogPost;