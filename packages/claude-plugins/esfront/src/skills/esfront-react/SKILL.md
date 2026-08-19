---
name: esfront-react
description: |-
  Use for ANY task in a repo that depends on @esfront/react — the esfront React component and hook library — including exploring, planning, designing, reviewing, debugging and answering questions, not only writing code. Read it BEFORE opening target files or proposing a design. TRIGGER when any of these hold: the prompt names an esfront component or hook (Dialog, DialogStack, SFS, Autocomplete, Filters, Swiper, useDialogStack, useEvent, useWindowEventListener, …); the task touches React UI in a repo whose package.json lists @esfront/react; or the task concerns dialogs, modals, forms, tables, filters, swiper or snackbar in such a repo. If you do not yet know whether the target file imports it, load this skill FIRST and check second — run `grep -rl '"@esfront/react"' --include=package.json .` rather than deferring.
---

# @esfront/react

`@esfront/react` is the React layer of the esfront design system. Everything is re-exported from the package root, so a
single import path covers both components and hooks. Styling lives in the sibling `@esfront/theme` package.

<EXTREMELY-IMPORTANT>
Do not defer this skill to "implementation time". These APIs constrain the design, not just the code: what a hook returns, whether a provider flag changes history behaviour, and which hooks already exist decide which designs are correct. A design written without reading the references will invent machinery this library already provides.
</EXTREMELY-IMPORTANT>

## Reference

- [Components](references/components.md) — props, slots and usage for every component.
- [Hooks](references/hooks.md) — signatures and behaviour for every hook.

Read the relevant reference file before writing code against a component or hook. Do not guess prop names.

### Components

**COMPONENTS_LIST**

### Hooks

**HOOKS_LIST**

If a component or hook is not on these lists, it does not come from `@esfront/react` — check MUI or the project's own
code instead.
