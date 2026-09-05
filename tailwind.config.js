/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        devDark: {
          950: '#06090e',
          900: '#0a0f18',
          850: '#0f1724',
          800: '#162032',
          750: '#1e2b42',
          700: '#283956',
          650: '#34496c',
          600: '#415a82',
        },
        devCyan: {
          DEFAULT: '#00e5ff',
          hover: '#33ebff',
        },
        termGreen: {
          DEFAULT: '#00e5ff', // Brand electric cyan blue matching logo
          hover: '#33ebff',
          dim: '#00b8cc',
          muted: '#0284c7',
          dark: '#082f49',
        },
        devAmber: {
          DEFAULT: '#f59e0b',
          hover: '#fbbf24',
        },
        devEmerald: {
          DEFAULT: '#00e5ff',
          hover: '#33ebff',
        },
        devRose: {
          DEFAULT: '#ff3344',
          hover: '#ff5566',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s step-start infinite',
      },
      keyframes: {
        cursorBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
