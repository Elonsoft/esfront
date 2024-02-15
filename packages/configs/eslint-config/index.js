module.exports = {
  plugins: ['prettier', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true
      }
    ],
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
          ['^\\.\\.(?!/?$)', '^\\.\\./?$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error'
  }
};