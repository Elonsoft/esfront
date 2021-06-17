# Contributing to Elonkit

## Workflow

This project uses Gitflow Workflow.

### Feature branches

Each new feature should reside in its own branch. But, instead of branching off of master, feature branches use
`develop` as their parent branch. When a feature is complete, it gets merged back into develop. Features should never
interact directly with master.

```bash
git checkout -b feature/branch-name
```

### Bugfix branches

Similar to feature branches but, instead of introducing a new feature, they are used for bugfixes.

```bash
git checkout -b bugfix/branch-name
```

## Development Guide

### Prerequisites

Please have the latest stable versions of the following on your machine:

```
node
yarn
```

### Development Workflow

After cloning Elonkit, run `yarn install` to fetch its dependencies and then run `yarn husky` in order to install git
hooks. Then, you can run several commands:

- `yarn start` starts the storybook.
- `yarn test` runs the complete test suite.
- `yarn test:watch` runs an interactive test watcher.
- `yarn lint` checks the code style.

### Components requirements

Follow this requirements when building new or updating existing components.

- Add new components to `overrides.d.ts`.
- Include a storybook demonstration.
- Write unit tests with `react-testing-library`.
- Document props in JSDoc format.
- Include RU and EN localization if the component contains any text.
- Use colors from the theme instead of hard coded colors.
- Use our typography instead of hard coding font properties.
- Component should be accessible i.e. can be used with keyboard only and has `aria-label` on icon buttons.

### Coding style

Please follow the coding style of the project. We use eslint, prettier and stylelint, so if possible, enable linting in
your editor to get real-time feedback. When you submit a Pull Request, they are run again by our continuous integration
tools.

## Commit Message Guidelines

The commit message should be structured as follows:

```
<type>[optional scope]: <description>
```

If a commit introduces a breaking change it should append a `!` after the type/scope:

```
refactor!: drop support for Node 6
```

Another examples of a valid commit message:

```
feat(Paginator): introduce new component
fix(Paginator): fix some bug
docs: update LICENSE date
```

### Type

Must be one of the following:

- build: Changes that affect the build system or external dependencies
- ci: Changes to our CI configuration files and scripts
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the component affected (as perceived by the person reading the changelog generated from
commit messages).

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end
