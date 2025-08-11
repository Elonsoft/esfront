module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
  },
};
