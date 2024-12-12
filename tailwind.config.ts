import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 360px) { ... }

      md: "600px",
      // => @media (min-width: 600px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 904px) { ... }

      smallDesktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-colr-1": "#F7BE37",
        "main-colr-2": "#000000",
        "main-colr-3": "#FFFFFF",
        "overlay-color": "rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
