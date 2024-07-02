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

Create a `.eslintrc.json` file with the following contents:

```json
{
  "extends": ["@esfront/eslint-config"]
}
```

You may want to override the default import sort order:

```json
{
  "extends": ["@esfront/eslint-config"],
  "rules": {
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^react"],
          ["^@mui/base", "^@mui/material/styles", "^@mui/system", "^@mui/material", "^@mui/utils"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"]
        ]
      }
    ]
  }
}
```
