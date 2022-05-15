module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,#1C071C 0,#1C071C 10%,#1C071C 68%,#1C071C 100%,#151515 100%);",
      },
    },
  },
  plugins: [],
};
