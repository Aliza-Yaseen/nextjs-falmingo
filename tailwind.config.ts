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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customTextColor: 'rgb(127, 112, 61)',
        whitesmoke: '#f5f5f5',
      },
      backgroundImage: {
        'custom-image-absolute': "url('/bg.webp')", // Correctly placed here
      },
    },
  },
  plugins: [],
};
export default config;
