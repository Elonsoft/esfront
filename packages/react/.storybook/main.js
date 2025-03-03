/* eslint-disable @typescript-eslint/no-require-imports */

import { dirname, join } from 'path';
const path = require('path');
import { theme } from '../src/testing/Theme/pigment-theme';

console.log(theme);
import { pigment } from '@pigment-css/vite-plugin';

const toPath = (filePath) => path.join(process.cwd(), filePath);
const getAbsolutePath = (value) => dirname(require.resolve(join(value, 'package.json')));

module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/documentation/**/*.stories.tsx',
    '../src/hooks/**/*.stories.tsx',
    '../src/theming/**/*.stories.tsx',
    {
      directory: '../src/components',
      files: '**/*.stories.tsx',
      titlePrefix: 'Components',
    },
  ],
  staticDirs: ['./assets'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    // '@storybook/addon-webpack5-compiler-babel',
  ],

  // webpackFinal: (config) => {
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve.alias,
  //         '@emotion/core': toPath('node_modules/@emotion/react'),
  //         'emotion-theming': toPath('node_modules/@emotion/react'),
  //         '~storybook': path.resolve(__dirname),
  //       },
  //     },
  //     plugins: [
  //       PigmentPlugin({
  //         theme,
  //       }),
  //       ...config.plugins,
  //     ],
  //   };
  // },
  core: {
    // builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [
        pigment({
          theme,
        }),
      ],
      resolve: {
        alias: {
          '~storybook': path.resolve(__dirname),
        },
      },
    });
  },
  // https://github.com/storybookjs/storybook/issues/26496
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
