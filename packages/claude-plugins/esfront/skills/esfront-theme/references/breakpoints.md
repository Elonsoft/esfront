# Breakpoints

Media query mixins in `@esfront/theme/helpers/breakpoints`, driven by `settings.$breakpoints`. Never hand-write
`@media (min-width: …)` in component styles. Configured through `$overrides.breakpoints` — see [Setup](setup.md).

## Naming

`settings.$breakpoints` maps a name to a **unitless pixel number**, ordered smallest to largest. The defaults:

| Name | Width  |
| ---- | ------ |
| `0`  | `0`    |
| `sm` | `640`  |
| `lg` | `1280` |

The entry whose value is `0` is the implicit base tier: no media query, no utility-class prefix. Keep it when overriding
the map.

## Mixins

| Mixin                     | Emits                                                            |
| ------------------------- | ---------------------------------------------------------------- |
| `up($name)`               | `@media (width >= {name}px)`                                     |
| `down($name)`             | `@media (width < {name}px)`                                      |
| `between($lower, $upper)` | `@media ({lower}px <= width < {upper}px)`                        |
| `only($name)`             | That tier alone, up to where the next breakpoint starts.         |
| `adaptive-classes()`      | Its content block once per breakpoint, with a class-name prefix. |

Every mixin `@error`s on a name not in `$breakpoints`, so a typo fails the build.

### `adaptive-classes()`

The generator behind the responsive utility classes. Runs its content block once per breakpoint, passing a class-name
prefix — `''` for the `0` tier, an escaped `'sm\\:'`-style prefix for the rest, each in its own min-width query. Root
level only; not for styling a component. See [Utilities](utilities.md).

```scss
@include breakpoints.adaptive-classes() using ($prefix) {
  .#{$prefix}my-utility {
    // …
  }
}
```

## Usage

```scss
@use '@esfront/theme/helpers/breakpoints';

.es-thing {
  padding: 8px;

  @include breakpoints.up('sm') {
    padding: 16px;
  }
}
```

- Prefer `up` and let the base declaration handle small screens — that is what the components do.
- `down` is exclusive: `down('lg')` stops exactly where `up('lg')` starts, never overlapping by a pixel.
- Names are quoted by convention (`'sm'`), though unquoted works. The base tier is the number `0` — `only(0)`, not
  `only('0')`.
