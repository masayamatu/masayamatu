import * as React from "react";
import { Link, graphql } from "gatsby";
import PostList from "../../components/PostList";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  container,
  content,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../../components/layout.module.css";

const BlogPage = ({ data }) => {
  return (
    <PostList pageTitle="My Tech Posts">
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link
              to={`/tech/${node.childMdx.id}`}
              sx={{
                variant: "styles.navlink",
                p: 2,
              }}
            >
              {node.childMdx.frontmatter.title}
            </Link>
          </h2>
          <p>
            <FaRegCalendarAlt />
            &nbsp; Posted:{node.childMdx.frontmatter.date}
          </p>
        </article>
      ))}
    </PostList>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "tech" }, ext: { eq: ".mdx" } }
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        sourceInstanceName
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  }
`;

export default BlogPage;
