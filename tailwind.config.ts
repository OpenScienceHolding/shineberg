import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F0E8",
        "paper-2": "#EFE9DE",
        tint: "#E4E0D9",
        ink: "#111111",
        body: "#727170",
        muted: "#9F9F9E",
        "faint-tint": "#E4E0D9",
        line: "#DCD6CA",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        label: "0.75rem",
        body: "1.0625rem",
        lead: "1.3125rem",
        h3: "1.5rem",
        h2: "2.75rem",
        display: "6rem",
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
        "32": "128px",
        "40": "160px",
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
