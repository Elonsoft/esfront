import { Component } from '../component';

export const createFormHelperText: Component<'MuiFormHelperText'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.caption,
        color: 'var(--es-mono-a-a700)',
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12,
        '&.Mui-error': {
          color: 'var(--es-error-300)',
        },
      },
    },
  };
};
