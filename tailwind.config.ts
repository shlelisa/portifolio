import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy + Electric Blue Palette
        navy: {
          950: "#0b1120", // Dark Mode Main Background
          900: "#111827", // Dark Mode Card Background
          800: "#1e293b", // Dark Mode Borders
          700: "#334155",
        },
        electric: {
          400: "#60a5fa", // Dark Mode Accent Hover
          500: "#3b82f6", // Dark Mode Primary Accent
          600: "#2563eb", // Light Mode Primary Accent
          700: "#1d4ed8", // Light Mode Accent Hover
        },
        slateText: {
          primaryLight: "#0f172a",
          secondaryLight: "#475569",
          borderLight: "#e2e8f0",
          primaryDark: "#f8fafc",
          secondaryDark: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-subtle": "floatSubtle 6s ease-in-out infinite",
      },
      keyframes: {
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        }
      },
    },
  },
  plugins: [],
};

export default config;
