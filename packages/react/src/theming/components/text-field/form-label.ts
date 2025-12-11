import { Component } from '../component';

export const createFormLabel: Component<'MuiFormLabel'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
        lineHeight: '23px',
        '&, &.Mui-focused, &.Mui-error': {
          color: 'var(--es-mono-a-a700)',
        },
        '&.Mui-disabled': {
          '&, & .MuiFormLabel-asterisk': {
            color: 'var(--es-mono-a-a500)',
          },
        },
      },
      asterisk: {
        position: 'relative',
        top: 3,
        '&, &.Mui-error': {
          color: 'var(--es-error-300)',
        },
      },
    },
  };
};
