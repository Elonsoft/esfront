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
      size: '40',
      color: 'monoA'
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
          '&, &:hover, &:active': {
            color: theme.palette.primary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.primary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.primary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.A200
            }
          }
        },
        '&.MuiIconButton-colorSecondary': {
          '&, &:hover, &:active': {
            color: theme.palette.secondary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.secondary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.secondary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.secondary.A200
            }
          }
        },
        '&.MuiIconButton-colorError': {
          '&, &:hover, &:active': {
            color: theme.palette.error[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.error.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.error.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.error.A200
            }
          }
        },
        '&.MuiIconButton-colorMonoA': {
          '&, &:hover, &:active': {
            backgroundColor: 'transparent',
            color: theme.palette.monoA.A700
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoA.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.monoA.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.monoA.A200
            }
          }
        },
        '&.Mui-disabled': {
          color: theme.palette.monoA.A400
        }
      }
    }
  };
};
