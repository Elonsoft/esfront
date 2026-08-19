# Shadows

CSS custom properties declared by `@esfront/theme/presets/shadows`. Each is a complete, multi-layer `box-shadow` value —
assign it directly, never compose your own. Installation: [Setup](setup.md).

`light` and `dark` declare **the same variable names** with different values; dark uses markedly stronger opacities (up
to 48% versus 12%). Unlike colors, breakpoints and typography, shadows have no settings map and cannot be configured.

## Naming

`--es-shadow-{direction}-{level}`. All four directions have all ten levels.

### Directions

Which edge of the element the shadow falls outside of.

| Direction | Use for                                              |
| --------- | ---------------------------------------------------- |
| `down`    | Anything raised above the page.                      |
| `up`      | A surface docked to the bottom edge of the viewport. |
| `left`    | A surface docked to the right edge.                  |
| `right`   | A surface docked to the left edge.                   |

### Levels

| Levels      | Shadow                                             | Meaning                             |
| ----------- | -------------------------------------------------- | ----------------------------------- |
| `50`        | A hairline offset with no blur.                    | A divider rather than an elevation. |
| `100`–`900` | Layered shadows whose blur grows from 2px to 48px. | Increasing elevation.               |

## Usage

```scss
.es-thing {
  box-shadow: var(--es-shadow-down-600);
}
```

Pick the level by **how far the element floats above the page**, not by how the shadow looks. Match the direction to the
element's anchor — a docked surface needs its shadow pointing inward:

| Element                               | Variable               |
| ------------------------------------- | ---------------------- |
| Tab bar at the bottom of the viewport | `--es-shadow-up-50`    |
| Bottom sheet                          | `--es-shadow-up-700`   |
| Right-docked panel                    | `--es-shadow-left-800` |
