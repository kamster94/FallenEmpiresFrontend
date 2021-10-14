module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5D0000',
        secondary: '#002564',
        beige: '#EAE3D8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
