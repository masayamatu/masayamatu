import * as React from "react";
import { Link, graphql } from "gatsby";
import PostList from "../../components/PostList";
import Tag from "../../components/tag";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogPage = ({ data }) => {
  return (
    <PostList pageTitle="My Diary">
      {data.allFile.nodes.map((node) => (
        <article key={node.childMdx.id}>
          <h2>
            <Link
              to={`/diary/${node.childMdx.id}`}
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
            <Tag tags={node.childMdx.frontmatter.tags} />
          </p>
          <hr />
        </article>
      ))}
    </PostList>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "diary" }, ext: { eq: ".mdx" } }
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        sourceInstanceName
        childMdx {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
          }
          id
          slug
        }
      }
    }
  }
`;

export default BlogPage;
