import type { Config } from "tailwindcss";

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(0, 100%, 68%)",
      "200" : "hsl(230, 29%, 20%)",
      "300" : "hsl(230, 11%, 40%)",
      "400" : "hsl(231, 7%, 65%)",
      "500" : "hsl(207, 33%, 95%)"
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors : colors,
      fontFamily : {
        "barlow" : 'Barlow',
        "barlow-con" :  'Barlow Condensed',
      }
    },
  },
  plugins: [],
};
export default config;
