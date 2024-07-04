# @esfront/cspell-config

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/cspell-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/cspell-config
```

## Usage

Create a `cspell.json` file with the following contents:

```json
{
  "import": ["@esfront/cspell-config"],
  "ignorePaths": ["**/build/**"],
  "words": ["some", "project", "specific", "words"]
}
```
