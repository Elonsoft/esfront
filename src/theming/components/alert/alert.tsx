import { IconAlert, IconCheckCircle, IconCloseOctagon, IconInfo } from '../../../icons';
import { Component } from '../component';

export const createAlert: Component<'MuiAlert'> = (theme, typography) => {
  return {
    defaultProps: {
      variant: 'standard',
      severity: 'success',
      iconMapping: {
        success: <IconCheckCircle />,
        warning: <IconAlert />,
        error: <IconCloseOctagon />,
        info: <IconInfo />
      }
    },
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        borderRadius: '6px',
        padding: '7px 15px',

        '& .MuiAlert-message': {
          wordBreak: 'break-word',
          minHeight: '40px',
          display: 'flex',
          marginRight: 'auto',
          flexDirection: 'column',
          justifyContent: 'center'
        },

        '& .MuiAlert-action': {
          color: theme.palette.monoA.A500,
          margin: '8px 0 0 8px',
          padding: 0,
          '& .MuiButton-root': {
            padding: '0 4px'
          }
        },

        '&.MuiAlert-standardMonoA': {
          backgroundColor: theme.palette.monoA.A50,
          border: `1px solid ${theme.palette.monoA.A100}`,
          '& .MuiAlert-icon': {
            color: theme.palette.monoA.A500
          }
        }
      },
      icon: {
        marginRight: '8px',
        padding: '8px 0',
        opacity: 1,
        color: 'currentcolor'
      },
      message: {
        ...typography.body100,
        color: theme.palette.monoA.A900,
        padding: 0
      },
      standardSuccess: {
        backgroundColor: theme.palette.success.A100,
        border: `1px solid ${theme.palette.success.A200}`,
        color: theme.palette.success[300]
      },
      standardWarning: {
        backgroundColor: theme.palette.warning.A100,
        border: `1px solid ${theme.palette.warning.A200}`,
        color: theme.palette.warning[300]
      },
      standardError: {
        backgroundColor: theme.palette.error.A100,
        border: `1px solid ${theme.palette.error.A200}`,
        '& .MuiAlert-icon': {
          color: theme.palette.error[300]
        }
      },
      standardInfo: {
        backgroundColor: theme.palette.info.A100,
        border: `1px solid ${theme.palette.info.A200}`,
        color: theme.palette.info[300]
      }
    }
  };
};
