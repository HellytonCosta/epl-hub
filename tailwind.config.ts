import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        premier: "#37003C",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
    
  },
  plugins: [],
};
export default config;
