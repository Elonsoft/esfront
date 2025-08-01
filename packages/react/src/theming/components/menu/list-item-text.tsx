import { Component } from '../component';

export const listItemTextDefaultProps = {
  primaryTypographyProps: {
    variant: 'body100' as const,
  },
};

export const createListItemText: Component<'MuiListItemText'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        color: theme.vars.palette.monoA.A900,
      },
      inset: {
        '&.MuiListItemText-inset': {
          paddingLeft: '40px',
        },
      },
    },
  };
};
