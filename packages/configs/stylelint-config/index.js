module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
  },
};
