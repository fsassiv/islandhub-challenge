import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background), #ffffff',
        foreground: 'var(--foreground), #161616',
      },
      screens: {
        tablet: '641px',
        desktop: '1025px',
      },
      fontFamily: {
        sans: ['var(--font-hanken-grotesk-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: ['text-foreground', 'bg-background'],
};
export default config;
