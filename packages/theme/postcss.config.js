/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
  syntax: 'postcss-scss',
  plugins: [require('./postcss-sort-media-queries')()],
};
