module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: {
          DEFAULT: '#45B7C3',
          hover: '#2f8a94',
          light: '#2dd4bf',
          lightest: '#f0fdfa',
        },
        white: '#FFFFFF',
        background: 'rgb(229, 231, 235)'
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

  ],
}