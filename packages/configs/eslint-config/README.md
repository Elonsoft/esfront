# @esfront/eslint-config

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/eslint-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/eslint-config
```

## Usage

Create a `eslintrc.config.js` file with the following contents:

```js
import config from '@esfront/eslint-config';

export default [
  ...config,
  {
    ignores: ['node_modules/*'],
  },
];
```

You may want to override the default import sort order:

```js
import config from '@esfront/eslint-config';

export default [
  ...config,
  {
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@mui/base', '^@mui/material/styles', '^@mui/system', '^@mui/material', '^@mui/utils'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ],
        },
      ],
    },
  },
  {
    ignores: ['node_modules/*'],
  },
];
```
