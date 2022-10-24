import { keyframes } from '@mui/system';

import { IconRadio } from '../../../icons';
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

export const createRadio: Component<'MuiRadio'> = (theme) => {
  return {
    defaultProps: {
      size: 'small',
      checkedIcon: <IconRadio />,
      icon: <IconRadio />
    },
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root': {
          fill: 'none',

          '&.MuiSvgIcon-fontSizeSmall': {
            fontSize: '20px'
          }
        },
        '&:not(.Mui-checked):not(.Mui-disabled):hover .MuiSvgIcon-root circle:last-child': {
          opacity: 1
        },
        '&:not(.Mui-checked) .MuiSvgIcon-root circle:last-child': {
          transitionDuration: `${theme.transitions.duration.shorter}ms`,
          opacity: 0
        },
        '&.Mui-checked .MuiSvgIcon-root circle:first-child': {
          transitionDuration: `${theme.transitions.duration.shorter}ms`,
          strokeWidth: '7px',
          r: '6.5px'
        },
        '&.Mui-checked .MuiSvgIcon-root circle:last-child': {
          color: theme.palette.monoB.A500
        },
        '& .MuiTouchRipple-rippleVisible': {
          animationName: `${enterKeyframe} !important`,
          opacity: '1!important'
        },
        '&.MuiButtonBase-root': {
          '& .MuiTouchRipple-root': {
            transitionDuration: `${theme.transitions.duration.short}ms`
          }
        },
        ...theme.mixins.button({
          background: 'transparent',
          color: theme.palette.monoA.A500,
          hover: theme.palette.monoA.A50,
          focus: theme.palette.monoA.A200,
          active: theme.palette.monoA.A150
        }),

        '&.MuiRadio-root.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto'
        },
        '&.MuiRadio-colorPrimary': {
          '&.Mui-checked': {
            '&.Mui-disabled': {
              '&, &:hover': {
                color: theme.palette.primary.A500
              }
            },
            ...theme.mixins.button({
              background: 'transparent',
              color: theme.palette.primary[300],
              hover: theme.palette.primary.A50,
              focus: theme.palette.primary.A200,
              active: theme.palette.primary.A150
            })
          }
        },
        '&.MuiRadio-colorSecondary': {
          '&.Mui-checked': {
            '&.Mui-disabled': {
              '&, &:hover': {
                color: theme.palette.secondary.A500
              }
            },
            ...theme.mixins.button({
              background: 'transparent',
              color: theme.palette.secondary[300],
              hover: theme.palette.secondary.A50,
              focus: theme.palette.secondary.A200,
              active: theme.palette.secondary.A150
            })
          }
        },
        '&.MuiRadio-colorError': {
          color: theme.palette.error[300],
          '&.Mui-checked': {
            '&.Mui-disabled': {
              '&, &:hover': {
                color: theme.palette.error.A500
              }
            }
          },
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.palette.error[300],
            hover: theme.palette.error.A50,
            focus: theme.palette.error.A200,
            active: theme.palette.error.A150
          })
        },
        '&.Mui-disabled': {
          '&, &:hover': {
            color: theme.palette.monoA.A400
          }
        }
      }
    }
  };
};
