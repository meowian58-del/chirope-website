import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        chirope: {
          navy: '#264181',
          orange: '#e68733',
          ink: '#1f2a44',
          soft: '#f5f7fb',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
