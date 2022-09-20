import { keyframes } from '@mui/system';

import { Component } from '../component';

const enterKeyframe = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const createMenuItem: Component<'MuiMenuItem'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.subtitle1,

        padding: '4px 16px',
        minHeight: '40px',
        transitionDuration: `${theme.transitions.duration.short}ms`,

        '& .MuiIconButton-root': {
          marginRight: '-8px'
        },

        '&.MuiMenuItem-root': {
          '& .MuiTouchRipple-root': {
            transitionDuration: `${theme.transitions.duration.short}ms`,
            color: theme.palette.monoA.A150
          },
          '& .MuiTouchRipple-rippleVisible': {
            animationName: `${enterKeyframe} !important`,
            opacity: '1 !important'
          },
          '&, &:hover, &:active': {
            backgroundColor: 'transparent'
          },
          '@media (hover: hover)': {
            '&:not(.Mui-focusVisible):hover': {
              backgroundColor: theme.palette.monoA.A50
            }
          },
          '&.Mui-focusVisible': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.monoA.A200
            }
          },

          '&.Mui-selected': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.monoA.A150
            },
            '&, &:hover, &:active': {
              backgroundColor: theme.palette.secondary.A100
            },
            '&:hover': {
              '& .MuiTouchRipple-root': {
                backgroundColor: theme.palette.monoA.A50
              }
            },
            '&.Mui-focusVisible': {
              '& .MuiTouchRipple-root': {
                backgroundColor: theme.palette.monoA.A200
              }
            }
          }
        }
      }
    }
  };
};
