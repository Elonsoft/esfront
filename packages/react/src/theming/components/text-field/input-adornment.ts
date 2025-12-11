import { Component } from '../component';

export const createInputAdornment: Component<'MuiInputAdornment'> = () => {
  return {
    styleOverrides: {
      root: {
        '& .MuiIcon-root': {
          color: 'var(--es-mono-a-a600)',
        },
      },
    },
  };
};
