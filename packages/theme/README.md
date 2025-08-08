# @esfront/theme

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/theme@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/theme
```

## Usage

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

## Customization

### Settings for Color Alphas, Breakpoints, Typography and Utilities

For the default values of the settings refer to the [source code](/packages/theme/lib/settings).

```scss
@use '@esfront/theme/settings' with (
  $overrides: (
    alphas: (
      a25: false,
    ),
    breakpoints: (
      md: 900,
    ),
    typography: (
      display100: (
        font-size: 40,
        font-weight: 500,
        letter-spacing: 0.2,
        line-height: 46,
      ),
      h4: false,
      h5: false,
      h6: false,
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

### Colors

```scss
// ...

@use '@esfront/theme/helpers/colors';

@use '@esfront/theme/presets/colors' as colorsPresets;
@use '@esfront/theme/presets/shadows' as shadowsPresets;

:root {
  @include colorsPresets.common;

  @include colorsPresets.light;
  @include shadowsPresets.light;

  --es-primary-300: #6d2fff;

  @include colors.color-alphas('es-primary', #6d2fff);
}
```
