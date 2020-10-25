let defaultConfig = require('tailwindcss/defaultConfig')();
var colors = {
  ...defaultConfig,
  'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
  'smoke-darker': 'rgba(0, 0, 0, 0.75)',
  'smoke-dark': 'rgba(0, 0, 0, 0.6)',
  'smoke': 'rgba(0, 0, 0, 0.5)',
  'smoke-light': 'rgba(0, 0, 0, 0.4)',
  'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
  'smoke-lightest': 'rgba(0, 0, 0, 0.1)',

  }

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
