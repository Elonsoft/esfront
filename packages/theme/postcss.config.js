/* eslint-disable @typescript-eslint/no-require-imports */

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
