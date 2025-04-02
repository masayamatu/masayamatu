// blog-post-template.jsを更新
import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { FaRegCalendarAlt, FaTags } from "react-icons/fa";
import Tag from "../components/Tag";

// MDX v2では children として内容が渡される
const BlogPost = ({ data, children }) => {
  const post = data.mdx;
  const image = post.frontmatter.hero_image ? getImage(post.frontmatter.hero_image) : null;
  
  return (
    <Layout>
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
        <header className="mb-8 pb-4 border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.frontmatter.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <FaRegCalendarAlt className="mr-2" />
              <span>Posted: {post.frontmatter.date}</span>
            </div>
            
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="flex items-center">
                <Tag tags={post.frontmatter.tags} />
              </div>
            )}
          </div>
        </header>
        
        {image && (
          <div className="mb-8">
            <GatsbyImage 
              image={image} 
              alt={post.frontmatter.hero_image_alt || post.frontmatter.title} 
              className="rounded-lg shadow-md w-full"
            />
            {post.frontmatter.hero_image_credit_text && (
              <p className="text-sm text-gray-500 mt-2 text-right italic">
                Photo: {post.frontmatter.hero_image_credit_text}
              </p>
            )}
          </div>
        )}
        
        <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-md">
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