import { Component } from '../component';

export const createFormHelperText: Component<'MuiFormHelperText'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.caption,
        color: theme.palette.monoA.A700,
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12,
        '&.Mui-error': {
          color: theme.palette.error[300]
        }
      }
    }
  };
};
