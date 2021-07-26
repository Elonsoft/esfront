import { Component } from '../component';

export const createInputAdornment: Component<'MuiInputAdornment'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiIcon-root': {
          color: theme.palette.monoA.A600
        }
      }
    }
  };
};
