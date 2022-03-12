/** @jsxImportSource theme-ui */
import * as React from "react";
import { Link } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = (props) => {
  return (
    <header
      sx={{
        py: 4,
        variant: "styles.header",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Link as={GatsbyLink} to="/about" title="About">
          <StaticImage
            alt="UI Logo"
            src="../images/header.jpg"
            width="100"
            height="100"
          />
          <span
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              top: -9999,
            }}
          >
            Home
          </span>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          as={GatsbyLink}
          to="/"
          variant="styles.header"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          Home
        </Link>
        <Link
          as={GatsbyLink}
          to="/about"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          About
        </Link>
        <Link
          as={GatsbyLink}
          to="/blog"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          Blog
        </Link>
        <Link
          as={GatsbyLink}
          to="/diary"
          sx={{
            variant: "styles.navlink",
            p: 2,
          }}
        >
          Diary
        </Link>
      </div>
    </header>
  );
};

export default Header;
