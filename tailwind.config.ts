import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables dark mode using the "class" strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Optional: Add light and dark-specific colors if needed
        lightBackground: "#ffffff",
        darkBackground: "#1a202c",
        lightText: "#000000",
        darkText: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
