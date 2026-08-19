---
name: esfront-theme
description: |-
  Use for ANY task in a repo that depends on @esfront/theme — the esfront design system's SCSS settings, presets, helpers and generated utility classes — including exploring, planning, designing, reviewing, debugging and answering questions, not only writing SCSS. Read it BEFORE writing a class name, a CSS variable or a media query, and BEFORE proposing a design. Most of this package is consumed WITHOUT importing it: the utility classes land in `className` strings in .tsx and .jsx files and the `--es-*` custom properties in plain CSS, so an import is not the trigger. TRIGGER when any of these hold: markup or styles use esfront utility classes (`flex`, `flex-col`, `hidden`, `mb-24`, `px-16`, `gap-24`, typography classes such as `h4` or `body300`, or a breakpoint-prefixed form such as `lg:mb-20`); an `--es-*` custom property appears; SCSS uses @esfront/theme; or the task concerns spacing, color, elevation, typography or breakpoints in such a repo. If you do not yet know whether the project uses it, load this skill FIRST and check second — run `grep -rl '"@esfront/theme"' --include=package.json .` rather than deferring.
---

# @esfront/theme

`@esfront/theme` is the styling layer of the esfront design system. It ships SCSS only — settings, presets, helpers, a
utility-class generator and the component styles — with no JavaScript entry point and no runtime theme object. Colors
and shadows reach the browser as `--es-*` custom properties, spacing and typography as generated utility classes, and
component styles consume both. The React layer lives in the sibling `@esfront/react` package.

<EXTREMELY-IMPORTANT>
Do not defer this skill to "when I write the CSS". These names constrain the design, not just the code: which utilities exist at all depends on the project's `$overrides`, and a class that does not exist fails silently — no error, no warning, just unstyled markup. Do not pattern-match on Tailwind. The scales differ. Spacing values are raw pixels, so 16px of bottom margin is `mb-16`, not `mb-4`. Read the reference and copy the name; never infer it from another framework.
</EXTREMELY-IMPORTANT>

## Reference

- [Setup](references/setup.md) — entry points, root stylesheet installation and `$overrides` configuration.
- [Breakpoints](references/breakpoints.md) — the breakpoint scale and the media query mixins.
- [Colors](references/colors.md) — the `--es-*` color variables.
- [Shadows](references/shadows.md) — the `--es-shadow-*` elevation variables.
- [Utilities](references/utilities.md) — the generated utility classes.

Read the relevant reference file before writing a class name or a variable name. Do not guess.
