import type { Config } from "tailwindcss";

export default {
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
        silk: {
          50: "#fdf8ff",
          100: "#f6e6ff",
          200: "#eecdff",
          300: "#e2a5ff",
          400: "#d26dff",
          500: "#c23eff",
          600: "#b01cf7",
          700: "#9612d9",
          800: "#7b13b0",
          900: "#65148f",
          950: "#420a64",
        },
        rose: {
          50: "#fff1f3",
          100: "#ffe2e6",
          200: "#ffc9d1",
          300: "#ffa0af",
          400: "#ff6a83",
          500: "#ff3a5c",
          600: "#ff1039",
          700: "#e50027",
          800: "#c00023",
          900: "#9d0023",
          950: "#560010",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
