/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        surface: '#FFFFFF',
        'surface-subtle': '#F4F4F1',
        ink: {
          DEFAULT: '#171717',
          muted: '#737373',
          faint: '#A3A3A3',
        },
        border: {
          DEFAULT: '#E5E5E2',
          light: '#EEEEEC',
          strong: '#D4D4D0',
        },
        accent: {
          DEFAULT: '#1D4ED8', // deep indigo/blue
          hover: '#1E40AF',
          subtle: '#EFF6FF',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        content: '1120px',
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        tight: '-0.015em',
      },
    },
  },
  plugins: [],
};
