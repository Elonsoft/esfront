# Colors

CSS custom properties declared by `@esfront/theme/presets/colors`, consumed with `var(--es-…)` — never hardcode a hex
value in component styles. Installation, alpha configuration and custom palettes: [Setup](setup.md).

`light` and `dark` declare **the same variable names** with different values, so normal usage needs no scheme-specific
CSS.

## Naming

`--es-{palette}-{level}`.

| Levels | Values                                                                                         | Meaning                                                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Solid  | `50` `100` `200` `300` `400` `500` `600` `700` `800` `900`                                     | Low is light, high is dark. `300` is the base tone: what alphas derive from, and what components use for a plain "the error color" fill. |
| Alpha  | `a25` `a50` `a75` `a100` `a150` `a200` `a300` `a400` `a500` `a550` `a600` `a700` `a800` `a900` | The base tone from 2% to 88% opacity. They come from `settings.$alphas`, so an override changes every palette at once.                   |

## Palettes

Which levels a palette has varies — check here before using one.

### Monochrome

| Palette          | Levels          | Role                                                                                              |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------- |
| `mono-a`         | `500` + alphas  | **The foreground** — black in light, white in dark. The most used variables in the design system. |
| `mono-b`         | `500` + alphas  | **The surface** — white in light, black in dark.                                                  |
| `black`, `white` | `500` + alphas  | The fixed counterparts of the above, from the `common` preset; they do not flip with the scheme.  |
| `gray`           | 50–900 + alphas | A neutral ramp that does not flip with the scheme.                                                |
| `grayscale`      | 50–900          | The same ramp with **no** alphas. Does not flip either.                                           |

### Semantic

| Palette                                                       | Levels          | Role                        |
| ------------------------------------------------------------- | --------------- | --------------------------- |
| `primary`, `secondary`, `error`, `info`, `warning`, `success` | 50–900 + alphas | Color that carries meaning. |

### Decorative

| Palette                                                                                                                       | Levels          | Role                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------- |
| `lime`, `lightblue`, `red`, `brown`, `orange`, `yellow`, `green`, `marine`, `sky`, `blue`, `violet`, `purple`, `pink`, `teal` | 50–900 + alphas | Charts, tags, avatars — anything needing a distinguishable color without meaning. |

### Structural

| Palette   | Levels                            | Role                                                                                                                                                                                                    |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `surface` | 50–900                            | Raised surfaces: pure white in light mode, progressively lighter grays in dark. Plus `--es-surface-background` and `--es-surface-background2` for page and recessed backgrounds, and `--es-surface-on`. |
| `overlay` | `100`, `200`, `300`, `700`, `900` | The already semi-transparent scrims behind dialogs, sheets and the gallery.                                                                                                                             |
| `common`  | none                              | `--es-common-link`, `--es-common-link-visited`, `--es-common-switch`.                                                                                                                                   |

## Usage

What the design system's own components reach for:

| Need                           | Variable                       |
| ------------------------------ | ------------------------------ |
| Secondary text                 | `--es-mono-a-a600`             |
| Borders                        | `--es-mono-a-a150`             |
| Hover fills                    | `--es-mono-a-a50`              |
| Plain surface                  | `--es-mono-b-500`              |
| Menus, popovers, table headers | `--es-surface-400`             |
| Semantic accent                | `--es-{palette}-300`           |
| Tinted background behind it    | `--es-{palette}-a50` / `-a150` |

### Choosing a palette

- **`red` is not `error`** — semantic palette when the color carries meaning, decorative when it does not.
- **`black` / `white` only for always-dark or always-light surfaces** (media overlays, gallery chrome). For theme-aware
  monochrome use `mono-a` / `mono-b`, and prefer them over `gray` / `grayscale` for theme-aware neutrals too.
