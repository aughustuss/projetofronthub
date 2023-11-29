/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");

// const customClass = plugin(function ({addUtilities}){
//   addUtilities({
//     ".titleFont": ""
//   });
// });

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#4fb547",
        "primaryNeon": "#00fa43",
        //"primary":"#9AA2E5",
        "secondary":"#f6f6f6",
        "tertiary": "#000",
        "newWhite": "#f7f7f7",
        "newBlack": "#1f1f1f",
        "primaryBg": "#141A1F",
        "primaryBgBorder": "#1f2a33",
        "primaryOnHover": "#1a5415",
        "bodyColor": "#b5b5b5"
      },
      fontFamily:{
        "title": ["Poppins","sans-serif"],
        "body": ["Mulish","sans-serif"]
      },
      fontSize: {
        "movieSlideTitle": "36px",
        "navTitle":"28px",
        "title": "24px",
        "subTitle": "20px",
        "smallDevicesTitle": "18px",
        "extraSmallTitle": "16",
        "body":"14px",
        "subBody":"12px",
        "links":"14px",
        "subLinks":"12px",
        "iconSize": "24px",
        "smallIconSize": "20px"
      },
    }
  },
  plugins: [],
}