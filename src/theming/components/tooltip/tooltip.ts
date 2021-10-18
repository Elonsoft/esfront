import Fade from '@mui/material/Fade';

import { Component } from '../component';

export const createTooltip: Component<'MuiTooltip'> = (theme) => {
  return {
    styleOverrides: {
      tooltip: {
        color: theme.palette.monoB[500],
        backgroundColor: theme.palette.monoA.A600,
        backdropFilter: 'blur(40px)',

        '& .MuiTooltip-arrow': {
          color: theme.palette.monoA.A600,
          backdropFilter: 'blur(40px)'
        }
      }
    },
    defaultProps: {
      TransitionComponent: Fade
    }
  };
};
