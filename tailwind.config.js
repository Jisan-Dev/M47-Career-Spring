/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        bannerGradientFrom: 'rgba(126, 144, 254, 0.05)',
        bannerGradientTo: 'rgba(152, 115, 255, 0.05)',
      },
    },
  },
  plugins: [require('daisyui')],
};
