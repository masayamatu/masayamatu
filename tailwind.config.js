module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FD7013",
        background: "#EEEEEE",
        text: "#393E46",
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              position: 'relative',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e2e8f0',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-3px',
                left: '0',
                width: '25%',
                borderBottom: '3px solid #FD7013',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};