import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';
import remarkGfm from 'remark-gfm';

const require = createRequire(import.meta.url);

const __dirname = dirname(fileURLToPath(import.meta.url));

const getAbsolutePath = (value) => dirname(require.resolve(join(value, 'package.json')));

export default {
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
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-dark-mode'),
  ],

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      plugins: [],
      resolve: {
        alias: {
          '~storybook': __dirname,
        },
      },
    });
  },

  core: {
    disableTelemetry: true,
  },

  // https://github.com/storybookjs/storybook/issues/26496
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  features: {
    backgrounds: false,
    sidebarOnboardingChecklist: false,
  },
};
