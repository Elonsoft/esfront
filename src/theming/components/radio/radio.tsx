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
        color: theme.palette.monoA.A500,
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
        '& .MuiTouchRipple-root': {
          transitionDuration: `${theme.transitions.duration.short}ms`,
          color: theme.palette.monoA.A150
        },
        '&, &:hover, &:active': {
          backgroundColor: 'transparent'
        },
        '&:hover': {
          '& .MuiTouchRipple-root': {
            backgroundColor: theme.palette.monoA.A50
          }
        },
        '&.Mui-focusVisible': {
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoA.A200
          }
        },
        '&.MuiRadio-root.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto'
        },
        '&.MuiRadio-colorPrimary': {
          '&.Mui-checked': {
            '&.Mui-disabled': {
              color: theme.palette.primary.A500
            },
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.A150
            },
            '&:hover': {
              '& .MuiTouchRipple-root': {
                backgroundColor: theme.palette.primary.A50
              }
            },
            '&.Mui-focusVisible': {
              '& .MuiTouchRipple-root': {
                color: theme.palette.primary.A200
              }
            }
          }
        },
        '&.MuiRadio-colorSecondary': {
          '&.Mui-checked': {
            '&.Mui-disabled': {
              color: theme.palette.secondary.A500
            },
            '& .MuiTouchRipple-root': {
              color: theme.palette.secondary.A150
            },
            '&:hover': {
              '& .MuiTouchRipple-root': {
                backgroundColor: theme.palette.secondary.A50
              }
            },
            '&.Mui-focusVisible': {
              '& .MuiTouchRipple-root': {
                color: theme.palette.secondary.A200
              }
            }
          }
        },
        '&.MuiRadio-colorError': {
          color: theme.palette.error[300],
          '&.Mui-checked': {
            '&.Mui-disabled': {
              color: theme.palette.error.A500
            }
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.error.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.error.A50
            }
          },
          '&.Mui-focusVisible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.error.A200
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
