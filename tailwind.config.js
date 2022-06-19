module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px', // FOR PHONES
      // => @media (min-width: 480px) { ... }
      md: '768px', // FOR IPAD
      // => @media (min-width: 768px) { ... }
      lg: '1024px', // FOR DESKTOP MONITOR SCREENS
      // => @media (min-width: 1024px) { ... }
      xl: '1440px', // ET ALL BIG SCREENS LIKE LG 1024PX
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        customGray: 'rgba(186,185,181,255)',
        customCabinetBrown: 'rgba(207,163,118,255)',
      },
      fontFamily: {
        varela: "'Varela Round', sans-serif",
        martel: "'Martel', serif",
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
