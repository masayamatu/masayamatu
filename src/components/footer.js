/** @jsxImportSource theme-ui */
import * as React from "react";
import { Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      sx={{
        fontSize: 1,
        color: "background",
        bg: "text",
        variant: "styles.footer",
      }}
    >
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          maxWidth: 768,
          mx: "auto",
          px: 2,
          py: 4,
        }}
      >
        <Link
          as={GatsbyLink}
          to="https://twitter.com/m_masayamatu"
          sx={{
            variant: "styles.footerlink",
            pl: 5,
          }}
        >
          <FiTwitter size={30} />
        </Link>
        <Link
          as={GatsbyLink}
          to="https://github.com/masayamatu"
          sx={{
            variant: "styles.footerlink",
            px: 2,
          }}
        >
          <FiGithub size={30} />
        </Link>
        <div sx={{ mx: "auto" }} />
        <div sx={{ p: 2 }}>© 2021 masayamatu Powered By Gatsby.JS</div>
      </div>
    </footer>
  );
};

export default Footer;
