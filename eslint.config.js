import config from '@esfront/eslint-config';
import storybook from 'eslint-plugin-storybook';

export default [
  ...config,
  ...storybook.configs['flat/recommended'],
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^\\.\\./\\.\\./testing'],
            ['^.+\\.types$'],
            ['^(@testing-library|@storybook|@date-io|date-fns)'],
            ['^clsx', '^.+\\.classes$'],
            ['^@mui/base'],
            ['^@mui/material/styles', '^@mui/system', '^@mui/material', '^@mui/utils'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ],
        },
      ],
    },
  },
  {
    ignores: ['!.storybook/', 'node_modules/*', '**/lib/*', '**/storybook-static/*'],
  },
];
