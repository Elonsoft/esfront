import { Component } from '../component';

export const createSelect: Component<'MuiSelect'> = () => {
  return {
    styleOverrides: {
      iconOutlined: {
        right: 12,
      },
    },
  };
};
