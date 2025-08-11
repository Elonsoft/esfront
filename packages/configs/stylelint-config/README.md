# @esfront/stylelint-config

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/stylelint-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/stylelint-config
```

## Usage

Create a `stylelint.config.js` file with the following contents:

```js
/** @type {import('stylelint').Config} */
export default {
  extends: ['@esfront/stylelint-config'],
};
```
