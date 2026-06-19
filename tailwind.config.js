/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf8f5',
        sky: { soft: '#eaf5fc', DEFAULT: '#cce8f7', deep: '#5aa9dd' },
        meadow: { soft: '#e7f3d4', DEFAULT: '#a9d479', deep: '#6fa83f' },
        gold: { soft: '#f6d639', DEFAULT: '#e9b020', deep: '#c8901a' },
        wine: '#2d1b26',
        bark: '#5a3e2b',
        sapphire: '#2f6db0',
        blush: '#f3a9b6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      borderRadius: { pill: '50px' },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(233,176,32,.45)' },
          '70%': { boxShadow: '0 0 0 18px rgba(233,176,32,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(233,176,32,0)' },
        },
        softbounce: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2.2s infinite',
        softbounce: 'softbounce 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
