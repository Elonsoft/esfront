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
