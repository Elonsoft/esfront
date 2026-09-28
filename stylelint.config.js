/** @type {import('stylelint').Config} */
export default {
  extends: ['@esfront/stylelint-config'],
  ignoreFiles: ['**/node_modules/**', '**/storybook-static/**', 'packages/date-fns/lib/**', 'packages/react/lib/**'],
};
