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
        boxShadow: theme.palette.shadows.down[24]
      }
    }
  };
};
