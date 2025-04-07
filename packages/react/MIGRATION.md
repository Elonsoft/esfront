# Migration Guide

- [0.11.14 → 0.12.0](#01114--0120)
  - [Markup and Style Changes](#markup-and-style-changes)
  - [Tooltip Replacement](#tooltip-replacement)
- [0.10.1 → 0.11.0](#0101--0110)
  - [Package Name](#package-name)
  - [CSS Theme Variables](#css-theme-variables)
  - [Components Replacement](#components-replacement)

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
