/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-gray': '#B4B4B4',
        'custom-cyan': 'rgb(178, 255, 253)', // Existing RGB color
        'custom-bg': 'rgb(229, 255, 254)', // New custom background color
      },
    },
  },
  plugins: [],
};
