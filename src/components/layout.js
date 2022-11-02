import * as React from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import { Link } from "theme-ui";
import Header from "./header";
import Footer from "./footer";
import {
  container,
  content,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div>
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <Header />
        <hr />
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          <div className={content}>{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
