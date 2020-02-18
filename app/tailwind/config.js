// module.exports = {
//   prefix: 'tw-',
//   screens: {
//     sm: '640px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//   },
//   fontFamily: {
//     display: ['Othersight', 'sans-serif'],
//     body: ['Othersight', 'sans-serif'],
//   },
//   borderWidth: {
//     default: '1px',
//     '0': '0',
//     '2': '2px',
//     '4': '4px',
//   },
//   extend: {
//     colors: {
//       cyan: '#9cdbff',
//     },
//     spacing: {
//       '96': '24rem',
//       '128': '32rem',
//     }
//   }
// }


module.exports = {
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
    },
    extend: {},
    container: {
      padding: '2rem',
    },
  },
  variants: {},
  plugins: [],
}
