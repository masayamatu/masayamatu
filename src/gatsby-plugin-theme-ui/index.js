const theme = {
  colors: {
    text: "#393E46",
    background: "#EEEEEE",
    primary: "#FD7013",
    secondary: "#00ADB5", // 新しい色を追加
    muted: "#E0E0E0", // バッジの背景色に使用
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  badges: {
    primary: {
      color: "background", // テキストの色
      bg: "primary", // 背景色
      borderRadius: "8px", // 角丸
      px: 2, // 水平方向のパディング
      py: 1, // 垂直方向のパディング
      ml:2,
    },
    secondary: {
      color: "background",
      bg: "secondary",
      borderRadius: "8px",
      px: 2,
      py: 1,
      ml:2,
    },
    outline: {
      color: "primary",
      bg: "transparent",
      border: "1px solid",
      borderColor: "primary",
      borderRadius: "8px",
      px: 2,
      py: 1,
      ml:2,
    },
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
    footer: {
      bottom: 0,
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
    tag: {
      ml: 2,
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
    h3: {
      fontSize: 18,
      fontFamily: "body",
      fontWeight: "heading",
    },
  },
};

export default theme;
