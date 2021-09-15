import { Component } from '../component';

export const createDialog: Component<'MuiDialog'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiBackdrop-root': {
          backgroundColor: theme.palette.common.overlayModal
        }
      },
      paper: {
        borderRadius: 6,
        boxShadow: theme.palette.shadows.down[24],
        overflow: 'visible',
        margin: '80px 24px',
        marginBottom: 24,

        [theme.breakpoints.up('tabletXS')]: {
          margin: '32px 80px'
        },

        '&.MuiDialog-paperScrollPaper': {
          maxHeight: 'calc(100% - 104px)',
          [theme.breakpoints.up('tabletXS')]: {
            maxHeight: 'calc(100% - 64px)'
          }
        }
      }
    }
  };
};
