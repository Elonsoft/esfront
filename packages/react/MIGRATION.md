# Migration Guide

- [Unreleased](#unreleased)
  - [Server Components and DefaultPropsProvider](#server-components-and-defaultpropsprovider)
  - [Package Exports](#package-exports)
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

## Unreleased

### Server Components and DefaultPropsProvider

Most components no longer carry the `'use client'` directive, so in a framework that understands the `react-server`
export condition — the Next.js App Router, for instance — they now render as server components. A server component
cannot read React context, so it takes its defaults from a request-scoped store that `DefaultPropsProvider` fills only
when the provider is itself rendered from a server module.

**If your `DefaultPropsProvider` is rendered inside a `'use client'` module, move it into a server component.** Before
this release every component was a client component, so a provider placed in a client-side providers module worked. It
no longer does, and nothing tells you: the store stays empty, and every server component below falls back to the props
given at its call site, dropping your locale and your global default props.

Do not do this:

```tsx
// app/providers.tsx
'use client';

import { DefaultPropsProvider } from '@esfront/react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <DefaultPropsProvider value={ru.components}>{children}</DefaultPropsProvider>
);

// app/layout.tsx
const RootLayout = ({ children }: { children: ReactNode }) => (
  <html>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);
```

Render the provider from the server layout instead:

```tsx
// app/layout.tsx
import { DefaultPropsProvider } from '@esfront/react';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html>
    <body>
      <DefaultPropsProvider value={ru.components}>{children}</DefaultPropsProvider>
    </body>
  </html>
);
```

Client components below the provider keep reading the value through context in both shapes, so a purely client-side
application needs no change.

### Package Exports

The package now declares an `exports` map. These specifier shapes are supported:

- `@esfront/react` — the package root, in every consumer.
- `@esfront/react/lib/<path>.js` — unchanged from before this release.
- `@esfront/react/<path>.js` — new, and equivalent to the line above. `@esfront/react/icons/IconMenuLineW500.js` and
  `@esfront/react/lib/icons/IconMenuLineW500.js` resolve to the same file.

Deep imports written without the file extension, and directory-style deep imports, such as
`@esfront/react/icons/IconMenuLineW500` or `@esfront/react/components/Badge`, are **not** supported, and never were. The
build emits one module per source file and no per-directory barrels, so there is no `lib/components/Badge/index.js` to
resolve to. Watch out for this one: TypeScript resolves such a specifier to the adjacent `index.d.ts`, reports no error,
and lets the bundler fail instead. Always write the `.js` extension.

Bundlers and runtimes that support the `react-server` export condition, such as the Next.js App Router, resolve a
server-safe build automatically. There is nothing to configure; the condition selects the build.

The map also changes how Node ESM resolves the package root: it used to go through `main` to the CommonJS
`lib/node/index.js` and now goes to the ES module `lib/index.js`, so `import esfront from '@esfront/react'` throws a
`SyntaxError` instead of yielding a namespace object. Named imports are unaffected.

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
