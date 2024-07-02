# Migration Guide

- [0.10.1 → 0.11.0](#0101--0110)
  - [CSS Theme Variables](#css-theme-variables)
  - [Components Replacement](#components-replacement)

## 0.10.1 → 0.11.0

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

If you are using any of this components, please import them from `@elonkit/react` instead of `@mui/material`. Some
breaking changes expected to occur.

If you are using our `@elonkit/eslint-config` config you'll notice forbidden import errors which will help you to locate
such imports to replace.
