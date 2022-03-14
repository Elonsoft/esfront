import { Component } from '../component';

export const createListItem: Component<'MuiListItem'> = () => {
  return {
    styleOverrides: {
      root: {
        padding: '4px 16px',
        minHeight: '40px',

        '& .MuiIconButton-root': {
          marginLeft: '8px'
        }
      }
    }
  };
};
