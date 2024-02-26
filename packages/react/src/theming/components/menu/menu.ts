import { Component } from '../component';

export const createMenu: Component<'MuiMenu'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiDivider-root': {
          borderColor: theme.palette.monoA.A100
        }
      },
      paper: {
        '&.MuiMenu-paper': {
          backgroundImage: 'none',
          backgroundColor: theme.palette.surface[400],
          boxShadow: theme.palette.shadow.down[600]
        },
        '& .MuiListItemIcon-root': {
          color: theme.palette.monoA.A500
        }
      }
    }
  };
};
