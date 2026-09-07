import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        adal: {
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#064e3b",
            900: "#01411C", // Official Pakistan Adal Green
            950: "#022410", // Deep Night Green
          },
          gold: {
            50: "#fffdf0",
            100: "#fef9e7",
            200: "#fcf0c2",
            300: "#f8e18f",
            400: "#f0cb54",
            500: "#d4af37", // Official Metallic Gold
            600: "#b8860b",
            700: "#996515",
            800: "#7c4a12",
            900: "#5c330e",
          },
          parchment: "#FDFBF7",
          surface: "#F8FAF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        urdu: ["'Noto Nastaliq Urdu'", "'Noto Sans Arabic'", "Tahoma", "sans-serif"],
        nastaliq: ["'Noto Nastaliq Urdu'", "'Jameel Noori Nastaleeq'", "serif"],
      },
      boxShadow: {
        'institution': '0 4px 20px -2px rgba(1, 65, 28, 0.08), 0 2px 6px -2px rgba(1, 65, 28, 0.04)',
        'institution-lg': '0 10px 30px -4px rgba(1, 65, 28, 0.12), 0 4px 10px -3px rgba(1, 65, 28, 0.06)',
      }
    },
  },
  plugins: [],
};
export default config;
