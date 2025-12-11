import { Component } from '../component';

export const createList: Component<'MuiList'> = () => {
  return {
    styleOverrides: {
      root: {
        '& .MuiDivider-root': {
          margin: '8px 0',
          borderColor: 'var(--es-mono-a-a100)',
        },
      },
    },
  };
};
