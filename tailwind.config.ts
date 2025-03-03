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
    },
  },
  plugins: [],
} satisfies Config;
