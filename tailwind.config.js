module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,#291329 0,#290E29 10%,#1C071C 68%,#1C071C 100%,#151515 100%);",
      },
    },
  },
  plugins: [],
};
