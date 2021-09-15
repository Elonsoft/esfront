import { Component } from '../component';

export const createDialogContent: Component<'MuiDialogContent'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        color: theme.palette.monoA.A700,
        padding: '0 24px'
      }
    }
  };
};
