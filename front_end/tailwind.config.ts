// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Global Backgrounds
        background: "hsl(192, 13%, 88%)", // pink? soft? look later 
        "background-dark": "hsl(210, 30%, 8%)", // dark mode background

        // Primary Branding Color (for headers, buttons)
        primary: "hsl(207, 90%, 54%)", // trustful medical blue
        "primary-light": "hsl(207, 90%, 64%)",
        "primary-dark": "hsl(207, 90%, 34%)",

        // Secondary Accent (for links, hover states)
        secondary: "hsl(152, 44%, 49%)", // soft green for calmness
        "secondary-light": "hsl(152, 44%, 59%)",
        "secondary-dark": "hsl(152, 44%, 39%)",

        // Utility & Interface
        muted: "hsl(210, 15%, 85%)",
        border: "hsl(210, 15%, 90%)",
        danger: "hsl(0, 70%, 50%)", // for alerts/errors
        success: "hsl(152, 44%, 45%)", // for confirmations

        // Text colors
        "text-base": "hsl(210, 10%, 20%)",
        "text-muted": "hsl(210, 10%, 40%)",
        "text-inverted": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
