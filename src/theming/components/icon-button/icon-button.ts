import { keyframes } from '@mui/system';

import { Component } from '../component';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const createIconButton: Component<'MuiIconButton'> = (theme) => {
  return {
    defaultProps: {
      disableFocusRipple: true,
      size: '40',
      color: 'tertiary'
    },
    styleOverrides: {
      root: {
        padding: 0,
        '&:not(.MuiIconButton-colorInherit)': {
          '& .MuiTouchRipple-root': {
            transitionDuration: `${theme.transitions.duration.short}ms`
          },
          '& .MuiTouchRipple-rippleVisible': {
            animationName: `${enterKeyframe} !important`,
            opacity: '1 !important'
          }
        },
        '&.MuiIconButton-size16': {
          height: 16,
          width: 16
        },
        '&.MuiIconButton-size20': {
          height: 20,
          width: 20
        },
        '&.MuiIconButton-size24': {
          height: 24,
          width: 24
        },
        '&.MuiIconButton-size32': {
          height: 32,
          width: 32
        },
        '&.MuiIconButton-size40': {
          height: 40,
          width: 40
        },
        '&.MuiIconButton-size48': {
          height: 48,
          width: 48
        },
        '&.MuiIconButton-size56': {
          height: 56,
          width: 56
        },
        '&.MuiIconButton-colorPrimary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.primary[300],
            hover: theme.palette.primary.A50,
            focus: theme.palette.primary.A200,
            active: theme.palette.primary.A150
          })
        },
        '&.MuiIconButton-colorSecondary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.secondary[400],
            hover: theme.palette.secondary.A50,
            focus: theme.palette.secondary.A200,
            active: theme.palette.secondary.A150
          })
        },
        '&.MuiIconButton-colorTertiary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.monoA.A700,
            hover: theme.palette.monoA.A50,
            focus: theme.palette.monoA.A200,
            active: theme.palette.monoA.A150
          })
        },
        '&.MuiIconButton-colorError': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.error[300],
            hover: theme.palette.error.A50,
            focus: theme.palette.error.A200,
            active: theme.palette.error.A150
          })
        },
        '&.MuiIconButton-colorMonoA': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.monoA[500],
            hover: theme.palette.monoA.A50,
            focus: theme.palette.monoA.A200,
            active: theme.palette.monoA.A150
          })
        },
        '&.MuiIconButton-colorMonoB': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.monoB[500],
            hover: theme.palette.monoB.A50,
            focus: theme.palette.monoB.A200,
            active: theme.palette.monoB.A150
          }),

          '&.Mui-disabled': {
            color: theme.palette.monoB.A400
          }
        },
        '&.MuiIconButton-colorWhite': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.white[500],
            hover: theme.palette.white.A50,
            focus: theme.palette.white.A200,
            active: theme.palette.white.A150
          }),

          '&.Mui-disabled': {
            color: theme.palette.white.A400
          }
        },
        '&.MuiIconButton-colorBlack': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.black[500],
            hover: theme.palette.black.A50,
            focus: theme.palette.black.A200,
            active: theme.palette.black.A150
          }),

          '&.Mui-disabled': {
            color: theme.palette.black.A400
          }
        },
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: theme.palette.monoA.A400
        }
      }
    }
  };
};
