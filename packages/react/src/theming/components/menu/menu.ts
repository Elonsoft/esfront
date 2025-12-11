import { Component } from '../component';

export const createMenu: Component<'MuiMenu'> = () => {
  return {
    styleOverrides: {
      root: {
        '& .MuiDivider-root': {
          borderColor: 'var(--es-mono-a-a100)',
        },
      },
      paper: {
        '&.MuiMenu-paper': {
          backgroundImage: 'none',
          backgroundColor: 'var(--es-surface-400)',
          boxShadow: 'var(--es-shadow-down-600)',
        },
        '& .MuiListItemIcon-root': {
          color: 'var(--es-mono-a-a500)',
        },
      },
    },
  };
};
