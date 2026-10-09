/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C2272D',
          redHover: '#A81C21',
          redLight: '#FEF2F2',
          redBorder: '#FCA5A5',
          dark: '#11141A',
          darkCard: '#181C24',
          charcoal: '#1E2229',
          body: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
          bgLight: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
