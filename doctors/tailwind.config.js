module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // barcha kerakli fayllar uchun
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6FFF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
};
