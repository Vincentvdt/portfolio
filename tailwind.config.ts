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
        "gray": "#CAC5CF",
        "dark-gray": "#3B4044",
        "brown": "#92635E",
        "light-gray": "#D9D9E5",
        "red": "#C14E50",
      },
      fontFamily: {
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
        ntEpika: ['var(--font-nt-epika)'],
        nohemi: ['var(--font-nohemi)']
      },
      spacing: {
        "0.5": "0.25rem", // 4px
        "1": "0.5rem",    // 8px
        "2": "1rem",      // 16px
        "3": "1.5rem",    // 24px
        "4": "2rem",      // 32px
        "5": "2.5rem",    // 40px
        "6": "3rem",      // 48px
        "7": "3.5rem",    // 56px
        "8": "4rem",      // 64px
        "9": "4.5rem",    // 72px
        "10": "5rem",     // 80px
      }
    },
  },
  plugins: [],
} satisfies Config;
