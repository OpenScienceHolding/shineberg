import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F5F0E8", 2: "#EFE9DE", tint: "#E4E0D9" },
        ink: "#111111",
        body: "#727170",
        muted: "#9F9F9E",
        line: "#DCD6CA",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        label: ["0.75rem", { letterSpacing: "0.28em", lineHeight: "1" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        lead: ["1.3125rem", { lineHeight: "1.55" }],
        h3: ["1.5rem", { lineHeight: "1.2" }],
        h2: ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        display: ["6rem", { lineHeight: "0.96", letterSpacing: "-0.01em" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "64px",
        "3xl": "96px",
        "4xl": "160px",
      },
      borderRadius: {
        DEFAULT: "3px",
      },
      maxWidth: {
        prose: "54ch",
        shell: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
