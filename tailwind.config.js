/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ava: "#FEA57F",
      },
      backgroundImage: {
        hero: "url('/img/Nathalie-Final-V2-26_neu_web.jpg')",
      },
      height: {
        md: "457px",
        lg: "816px",
        "2xl": "1000px",
      },
      maxWidth: {
        "8xl": "1536px",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem",
        "13xl": "12rem",
        "14xl": "13rem",
      },
      letterSpacing: {
        sm: "10px",
        xl: "20px",
        "2xl": "26px",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "5rem",
        20: "5.75rem",
      },
    },
  },
  plugins: [],
};
