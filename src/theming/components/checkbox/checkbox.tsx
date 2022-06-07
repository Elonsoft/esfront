import { keyframes } from '@mui/system';

import { IconCheckbox, IconCheckboxIndetereminate } from '../../../icons';
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

export const createCheckbox: Component<'MuiCheckbox'> = (theme) => {
  return {
    defaultProps: {
      size: 'small',
      icon: <IconCheckbox />,
      checkedIcon: <IconCheckbox />,
      indeterminateIcon: <IconCheckboxIndetereminate />
    },
    styleOverrides: {
      root: {
        color: theme.palette.monoA.A600,
        '& .MuiSvgIcon-root': {
          fill: 'none',
          '&.MuiSvgIcon-fontSizeSmall': {
            fontSize: '18px'
          }
        },
        '& svg': {
          borderRadius: '4px',
          '& path': {
            strokeDasharray: '15',
            strokeDashoffset: '18px',
            transitionDelay: '150ms',
            transitionDuration: '200ms'
          },
          '& circle': {
            transition: '200ms'
          }
        },
        '&.Mui-checked': {
          '& svg': {
            '& circle': {
              strokeWidth: '20px',
              stroke: 'currentColor'
            },
            '& path': {
              strokeDashoffset: '30px'
            }
          }
        },
        '& .MuiTouchRipple-rippleVisible': {
          animationName: `${enterKeyframe} !important`,
          opacity: '1 !important'
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
        '&.MuiCheckbox-root.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto'
        },
        '&.MuiCheckbox-colorPrimary': {
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
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
        '&.MuiCheckbox-colorSecondary': {
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
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
        '&.MuiCheckbox-colorError': {
          color: theme.palette.error[300],
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
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
