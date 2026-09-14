/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0A0A0A',
          soft: '#141414',
          raised: '#1C1C1C',
        },
        blood: {
          DEFAULT: '#A31C1C',
          dark: '#6B1010',
          light: '#C4302F',
        },
        steel: {
          DEFAULT: '#8A8A8A',
          light: '#C0C0C0',
          dark: '#4A4A4A',
        },
        ember: {
          DEFAULT: '#E08A2C',
          bright: '#F5A623',
        },
        eddie: {
          DEFAULT: '#4A7C3F',
          bright: '#6BA858',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        rise: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(0.3)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(163, 28, 28, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(163, 28, 28, 0)' },
        },
      },
      animation: {
        flicker: 'flicker 3s ease-in-out infinite',
        rise: 'rise 3s ease-in infinite',
        pulseGlow: 'pulseGlow 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}
