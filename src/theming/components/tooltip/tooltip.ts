import Fade from '@mui/material/Fade';

import { Component } from '../component';

export const createTooltip: Component<'MuiTooltip'> = (theme) => {
  return {
    styleOverrides: {
      popper: {
        '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
          marginBottom: '14px !important'
        },
        '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
          marginTop: '14px !important'
        },
        '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
          marginLeft: '14px !important'
        },
        '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
          marginRight: '14px !important'
        }
      },
      tooltip: {
        color: theme.palette.monoB[500],
        backgroundColor: theme.palette.monoA.A600,
        backdropFilter: 'blur(40px)',
        padding: '4px 8px',

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
