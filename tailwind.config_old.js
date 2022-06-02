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
          DEFAULT: '#9d1e1e',
          hover: '#691414',
          light: 'rgba(183,91,91,0.4)',
          lightest: 'rgba(183,91,91,0.15)',
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