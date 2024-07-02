# Contributing to @esfront

## Development Guide

### Prerequisites

Please have the following versions of the required tools on your machine:

```
node ^16.0.0
```

### Development Workflow

After cloning the repo, run `npm run install` to fetch its dependencies and then run `npm run husky` in order to install
git hooks. Make sure to run `npm run typedoc` before the first start - this will generate API documentation for the
components and hooks. Then, you can run `npm run start` in order to start storybook.

### Components requirements

Follow this requirements when building new or updating existing components.

- Add new components to `overrides.d.ts`.
- Include a storybook demonstration.
- Document props in JSDoc format.
- Include RU and EN localization if the component contains any text.
- Use colors from the theme instead of hard coded colors.
- Use our typography instead of hard coding font properties.
- Component should be accessible i.e. can be used with keyboard only and has `aria-label` on icon buttons.

### Coding style

Please follow the coding style of the project. We use eslint and prettier, so if possible, enable linting in your editor
to get real-time feedback.

- `npm run lint` checks the code style.
- `npm run prettier:check` checks the code formatting.
- `npm run prettier:write` reformats the code.

When you submit a Pull Request, they are run again by our continuous integration tools.

## Branching

Each new feature should reside in its own branch. Feature branches use `master` as their parent branch. When a feature
is complete, it gets merged back into `master`.

```bash
git checkout -b feature/branch-name
```

Similar to feature branches but, instead of introducing a new feature, they are used for bugfixes.

```bash
git checkout -b bugfix/branch-name
```

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
