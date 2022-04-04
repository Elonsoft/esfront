import { Component } from '../component';

export const createAlertTitle: Component<'MuiAlertTitle'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.body100Bold,
        color: theme.palette.monoA.A800,
        margin: 0
      }
    }
  };
};
