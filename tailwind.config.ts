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
        secondary_background2: "var(--secondary-background2)",
        linear_background: "var(--linear-background)",
        linear_background2: "var(--linear-background2)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        dark_grey: "var(--dark-grey)",
        light_grey: "var(--light-grey)",
      },
      backgroundImage: {
        menu: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
