import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customRed: "#FF0000",
        customBlue: "#0000FF",
        customGreen: "#00FF00",
        customYellow: "#FFFF00",
        customOrange: "#FFA500",
        customPurple: "#800080",
        customPink: "#FFC0CB",
        customBrown: "#A52A2A",
        customGray: "#808080",
        customBlack: "#000000",
        customWhite: "#FFFFFF",
        customDarkBlue: "#00008B",
        customLightBlue: "#ADD8E6",
        customLightGreen: "#90EE90",
        customLightYellow: "#FFFFE0",
        customLightOrange: "#FFDAB9",
        customLightPurple: "#E6E6FA",
        customLightPink: "#FFB6C1",
        customLightBrown: "#DEB887",
        customLightGray: {
          150: "#D3D3D3",
          250: "#C0C0C0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
