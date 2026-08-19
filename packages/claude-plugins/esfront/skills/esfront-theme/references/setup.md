# Setup

`@esfront/theme` exports SCSS only, under the `sass` condition. Everything on this page belongs in the project's **root
stylesheet and nowhere else**.

## Entry points

All under the `@esfront/theme/` prefix:

| Entry point                  | Provides                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| `settings`                   | `$overrides` config and the `$alphas` / `$breakpoints` / `$typography` / `$utilities` maps. |
| `utilities`                  | The utility-class generator. See [Utilities](utilities.md).                                 |
| `components`, `components/*` | Styles for all of the `@esfront/react` components, or for a single one.                     |
| `presets/colors`             | `common` / `light` / `dark` color variables. See [Colors](colors.md).                       |
| `presets/shadows`            | `light` / `dark` shadow variables. See [Shadows](shadows.md).                               |
| `helpers/breakpoints`        | Media query mixins. See [Breakpoints](breakpoints.md).                                      |
| `helpers/typography`         | The `level($name)` mixin. See [Utilities](utilities.md).                                    |
| `helpers/scrollbars`         | The scrollbar mixins. See [Utilities](utilities.md).                                        |
| `helpers/colors`             | The `color-alphas($name, $color)` mixin. See [Custom colors](#custom-colors).               |

Helpers are the only part importable from inside a component's own stylesheet.

## Installation

```scss
@use '@esfront/theme/settings';
@use '@esfront/theme/utilities';
@use '@esfront/theme/components';

@use '@esfront/theme/presets/colors' as colorsPresets;
@use '@esfront/theme/presets/shadows' as shadowsPresets;

@include settings.include;
@include utilities.include;
@include components.include;

:root {
  @include colorsPresets.common;

  @include colorsPresets.light;
  @include shadowsPresets.light;

  @media (prefers-color-scheme: dark) {
    @include colorsPresets.dark;
    @include shadowsPresets.dark;
  }
}
```

- `settings.include` must come first — the utility and component generators read the maps it applies `$overrides` to.
- `colorsPresets.common` holds the colors that do not change between schemes and is always required.
- `light` and `dark` declare the same variable names, so the selector the dark pair goes under is the application's
  choice: `prefers-color-scheme` above, or a class/attribute selector for a manual toggle.

## Configuration

Every configurable setting goes through one `$overrides` map, passed when the settings module is first used:

```scss
@use '@esfront/theme/settings' with (
  $overrides: (
    alphas: (
      a25: false,
    ),
    breakpoints: (
      lg: 1200,
    ),
    typography: (
      h4: false,
    ),
    utilities: (
      gap: (
        0,
        2,
        4,
        8,
      ),
    ),
  )
);
```

| Key           | Configures                        | Reference                     |
| ------------- | --------------------------------- | ----------------------------- |
| `alphas`      | Alpha levels and their opacities. | [Colors](colors.md)           |
| `breakpoints` | Breakpoint names and widths.      | [Breakpoints](breakpoints.md) |
| `typography`  | Typography levels.                | [Utilities](utilities.md)     |
| `utilities`   | Padding, margin and gap scales.   | [Utilities](utilities.md)     |

- **`false` removes an entry.** `h4: false` deletes the `h4` level along with its `h4` utility class.
- **Any other value replaces the entry outright — not a deep merge.** Overriding a typography level means restating
  every property of it.
- **Configuration happens once, at the first `@use`.** A second `@use ... with` of the settings module is an error.
- Overrides feed the mixins and the generated classes alike, so removing a breakpoint or typography level removes its
  classes too, and any `breakpoints.up()` call naming it becomes a build error.
- Shadows are the exception: no settings map, not configurable.

## Custom colors

Redeclare the variable after the preset. If the palette has alpha variants, regenerate them — otherwise the `a*` levels
keep pointing at the old tone:

```scss
@use '@esfront/theme/helpers/colors';
@use '@esfront/theme/presets/colors' as colorsPresets;

:root {
  @include colorsPresets.common;
  @include colorsPresets.light;

  --es-primary-300: #6d2fff;

  @include colors.color-alphas('es-primary', #6d2fff);
}
```

`color-alphas($name, $color)` emits one variable per entry of `settings.$alphas`, named `--#{$name}-#{$level}`. Pass the
name **with** the `es-` prefix and without a level. It is also how a project adds a palette of its own.
