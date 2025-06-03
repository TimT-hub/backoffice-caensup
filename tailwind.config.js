module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '640px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px'
      }
    },
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}