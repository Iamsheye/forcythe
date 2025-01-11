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
        primary_background: "var(--primary-background)",
        secondary_background: "var(--secondary-background)",
        linear_background: "var(--linear-background)",
        linear_background2: "var(--linear-background2)",
        accent: "var(--accent)",
        dark_grey: "var(--dark-grey)",
        light_grey: "var(--light-grey)",
      },
    },
  },
  plugins: [],
} satisfies Config;
