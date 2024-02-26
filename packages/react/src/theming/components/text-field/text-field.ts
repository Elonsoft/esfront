import { Component } from '../component';

export const createTextField: Component<'MuiTextField'> = () => {
  return {
    defaultProps: {
      variant: 'outlined'
    }
  };
};
