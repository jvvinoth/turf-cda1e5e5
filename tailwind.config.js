/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FFF50',
        secondary: '#FF3D00',
        accent: '#00E5FF',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        border: '#2A2A2A',
        text: '#F5F5F5',
        'text-muted': '#888888',
        success: '#0FFF50',
        warning: '#FFB800',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
      lineHeight: {
        tight: '1.1',
      },
    },
  },
  plugins: [],
}
