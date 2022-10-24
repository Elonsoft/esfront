export interface ListItemMixinStates {
  /** The background color of the element. */
  background: string;
  /** The text color of the element. */
  color?: string;
  /** The icon color of the element. */
  icon?: string;
  /** The hover color. */
  hover: string;
  /** The focus color. */
  focus: string;
  /** The active color. */
  active: string;
}

/**
 * The mixin that applies list item states.
 */
export const listItemMixin = (states: ListItemMixinStates) => {
  const { background, color, icon, hover, focus, active } = states;

  return {
    '&, &:hover, &:active': {
      backgroundColor: background
    },
    ...(color && {
      '&, & .MuiListItemText-root': {
        color: color
      }
    }),
    ...(icon && {
      '& .MuiListItemIcon-root': {
        color: icon
      }
    }),
    '& .MuiTouchRipple-root': {
      color: active,
      transform: 'translateZ(0)'
    },
    '@media (hover: hover)': {
      '&:not(.Mui-focusVisible):hover .MuiTouchRipple-root': {
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
