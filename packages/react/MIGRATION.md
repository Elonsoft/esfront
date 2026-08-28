# Migration Guide

- [0.16.0 → 0.17.0](#0160--0170)
  - [MUI Removal](#mui-removal)
  - [Theme Replacement](#theme-replacement)
  - [Baseline Styles](#baseline-styles)
  - [New Components](#new-components)
- [0.14.0 → 0.15.0](#0140--0150)
  - [Theme Package](#theme-package)
  - [Class Names](#class-names)
- [0.11.14 → 0.12.0](#01114--0120)
  - [Markup and Style Changes](#markup-and-style-changes)
  - [Tooltip Replacement](#tooltip-replacement)
- [0.10.1 → 0.11.0](#0101--0110)
  - [Package Name](#package-name)
  - [CSS Theme Variables](#css-theme-variables)
  - [Components Replacement](#components-replacement)

## 0.16.0 → 0.17.0

### MUI Removal

The library no longer depends on MUI. `@mui/material`, `@mui/system`, `@emotion/react` and `@emotion/styled` are removed
from the peer dependencies, so you can drop them from your project unless you use them on your own.

Two new peer dependencies have to be installed instead:

```bash
npm install @floating-ui/react-dom react-transition-group
```

### Theme Replacement

`createTheme`, `ThemeProvider`, `breakpoints` and `createTypography` are removed. Default props and localization are now
supplied by the `DefaultPropsProvider` component, and all design tokens live in `@esfront/theme`.

If your setup looks like this:

```tsx
const theme = createTheme(
  {
    paletteLight: {
      ...palettes.common,
      ...palettes.light,
    },
  },
  { ...ruRU, ru }
);

const Application = () => <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
```

Please migrate it to look like this instead:

```tsx
const Application = () => <DefaultPropsProvider value={ru.components}>{/* ... */}</DefaultPropsProvider>;
```

To customize a component globally, spread the locale before your own defaults:

```tsx
<DefaultPropsProvider value={{ ...ru.components, ESDrawer: { defaultProps: { anchor: 'right' } } }}>
```

Any remaining usage of the MUI theme, such as `theme.vars.palette`, `sx` or `styled`, has to be replaced with the scss
variables and mixins of `@esfront/theme`.

### Baseline Styles

`ThemeProvider` used to render MUI `CssBaseline` for you. Include the new `baseline` layer of `@esfront/theme` instead,
and declare the font family yourself, because the layer does not set one:

```scss
@use '@esfront/theme/settings';
@use '@esfront/theme/baseline';
@use '@esfront/theme/components';
@use '@esfront/theme/utilities';

@include settings.include;
@include baseline.include;
@include components.include;
@include utilities.include;

body {
  font-family: 'Nunito Sans', sans-serif;
}
```

### New Components

The components previously used from `@mui/material` have been reimplemented:

- `Backdrop`
- `ClickAwayListener`
- `Collapse`
- `Drawer`
- `Fade`
- `FocusTrap`
- `FormField`
- `Grow`
- `Menu`
- `Modal`
- `Popover`
- `Popper`
- `Portal`
- `Slide`
- `Slider`
- `TextField`
- `Zoom`

The `useMediaQuery` hook and the transition helpers `createTransition`, `duration` and `easing` are provided as well.
Please import all of them from `@esfront/react`. Some breaking changes expected to occur, since the props and the markup
of these components differ from their MUI counterparts.

## 0.14.0 → 0.15.0

### Theme Package

Usage of `@esfront/theme` package is now required. Color and typography tokens are removed from MUI theme.

### Class Names

We migrated all components to scss theme, so their class names are changed, e.g. `.ESAlert-content` now is
`.es-alert__content`.

## 0.11.14 → 0.12.0

### Markup and Style Changes

We changed markup and/or styles of `AutocompleteMenu`, `Checkbox`, `PageHGroupHeading` and `TableCell` components, so
there may be some breaking changes if this components are styled.

### Tooltip Replacement

The `Tooltip` component has been copied and extended for our needs. If you are using this components, please import it
from `@esfront/react` instead of `@mui/material`.

## 0.10.1 → 0.11.0

### Package Name

Package name is changed from `@elonkit/react` to `@esfront/react`.

### CSS Theme Variables

We migrated our components and `createTheme` function to support
[css theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/).

If your call of `createTheme` looks like this:

```ts
const theme = createTheme(
  {
    palette: {
      ...palettes.common,
      ...palettes.light,
    },
  },
  { ...ruRU, ru }
);
```

Please migrate it to look like this instead:

```ts
const theme = createTheme(
  {
    paletteLight: {
      ...palettes.common,
      ...palettes.light,
    },
  },
  { ...ruRU, ru }
);
```

Then you need to replace all occurrences of `theme.palette` with `theme.vars.palette` throughout your project.

### Components Replacement

Following components from `@mui/material` have been reimplemented or copied and extended for our needs:

- `ButtonBase`
- `Button`
- `ListItem`
- `MenuItem`
- `SwitchBase`
- `Checkbox`
- `Radio`
- `Avatar`
- `Badge`
- `LinearProgress`

If you are using any of this components, please import them from `@esfront/react` instead of `@mui/material`. Some
breaking changes expected to occur.

If you are using our `@esfront/eslint-config` config you'll notice forbidden import errors which will help you to locate
such imports to replace.
