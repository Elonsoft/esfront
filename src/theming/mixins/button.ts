export interface ButtonMixinStates {
  /** The background color of the element. */
  background: string;
  /** The text color of the element. */
  color: string;
  /** The hover color. */
  hover: string;
  /** The focus color. */
  focus: string;
  /** The active color. */
  active: string;
}

/**
 * The mixin that applies button states.
 */
export const buttonMixin = (states: ButtonMixinStates) => {
  const { background, color, hover, active, focus } = states;

  return {
    '&, &:not(:disabled):hover, &:not(:disabled):active': {
      backgroundColor: background,
      color: color
    },
    '& .MuiTouchRipple-root': {
      color: active
    },
    '@media (hover: hover)': {
      '&:not(.Mui-focusVisible):not(:disabled):hover .MuiTouchRipple-root': {
        backgroundColor: hover
      }
    },
    '&.Mui-focusVisible': {
      '& .MuiTouchRipple-root': {
        backgroundColor: focus
      }
    }
  } as React.CSSProperties;
};
