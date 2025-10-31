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
@use '@esfront/theme/presets/colors' as colorsPresets;
@use '@esfront/theme/presets/shadows' as shadowsPresets;

@use '@esfront/theme/components' as *;
@use '@esfront/theme/utility-classes' as *;

:root {
  @include colorsPresets.common;
  @include colorsPresets.light;

  @include shadowsPresets.light;
}
```

## Customization

### Breakpoints

```scss
@use '@esfront/theme/breakpoints' with (
  $breakpoints: (
    xs: 0,
    sm: 640,
    lg: 1280,
  )
);
```

### Colors

```scss
@use '@esfront/theme/colors' with (
  $alphas: (
    a100: 0.08,
    a900: 0.88,
  )
);

@use '@esfront/theme/presets/shadows' as shadowsPresets;

:root {
  @include colorsPresets.common;

  --es-primary-50: #c0c0ff;
  --es-primary-100: #988dff;
  --es-primary-200: #7c5aff;
  --es-primary-300: #6d2fff;
  --es-primary-400: #631ae9;
  --es-primary-500: #590dcd;
  --es-primary-600: #46069f;
  --es-primary-700: #340472;
  --es-primary-800: #240351;
  --es-primary-900: #14062e;

  @include colors.color-alphas('es-primary', #6d2fff);
}
```

### Typography

```scss
@use '@esfront/theme/typography';

@include typography.configure(
  $overrides: (
    display1: (
      font-size: 40,
      font-weight: 500,
      letter-spacing: 0.2,
      line-height: 46,
    ),
    overline: false,
  )
);
```
