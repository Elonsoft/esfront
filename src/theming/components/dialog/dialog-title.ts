import { Component } from '../component';

export const createDialogTitle: Component<'MuiDialogTitle'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.h4,
        colot: theme.palette.monoA.A900,
        padding: 24
      }
    }
  };
};
