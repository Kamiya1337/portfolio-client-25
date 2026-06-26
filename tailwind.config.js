/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academic: {
          background: '#F8FCFF',
          ivory: '#EEF8FF',
          blush: '#DDF2FF',
          pastel: '#B9E4F8',
          accent: '#7EC8E3',
          strong: '#4DA6C8',
          ink: '#182033',
          muted: '#667785',
          border: '#B7DCEB',
          card: '#FFFFFF',
          white: '#FFFFFF',
          sidebar: '#F8FCFF',
          'sidebar-border': '#B7DCEB',
          navy: '#182033',
          'hero-blue': '#4DA6C8',
          blue: '#4DA6C8',
          cyan: '#B9E4F8',
          'blue-light': '#7EC8E3',
          warning: '#B45309',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(126, 200, 227, 0.18)',
      },
    },
  },
  plugins: [],
};
