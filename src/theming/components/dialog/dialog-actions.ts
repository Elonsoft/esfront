import { Component } from '../component';

export const createDialogActions: Component<'MuiDialogActions'> = () => {
  return {
    styleOverrides: {
      root: {
        padding: 24,

        '> :not(:first-of-type)': {
          marginLeft: 16
        }
      }
    }
  };
};
