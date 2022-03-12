const theme = {
  colors: {
    text: "#393E46",
    background: "#EEEEEE",
    primary: "#FD7013",
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  styles: {
    header: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 2,
    },
    navlink: {
      fontSize: 24,
      fontFamily: "body",
      fontWeight: "heading",
      color: "text",
      textDecoration: "none",
      mt: 4,
      mb: 2,
      "&:hover": {
        color: "primary",
      },
    },
    footerlink: {
      color: "background",
      ":hover": {
        color: "primary",
      },
    },
    a: {
      color: "text",
      ":hover": {
        color: "primary",
      },
    },
    h1: {
      fontSize: 32,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
    },
    h2: {
      fontSize: 24,
      fontFamily: "body",
      fontWeight: "heading",
      color: "text",
      borderBottom: "solid",
      borderColor: "text",
      position: "relative",
      "::after": {
        content: '" "',
        position: "absolute",
        display: "block",
        borderBottom: "solid",
        borderColor: "#FD7013",
        bottom: "-3px",
        width: "25%",
      },
    },
  },
};

export default theme;
