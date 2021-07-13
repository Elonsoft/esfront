import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.A100,
      display: 'flex',
      padding: 8,
      paddingLeft: 24
    },
    text: {
      color: theme.palette.monoA.A900,
      fontWeight: 500,

      '&.MuiTypography-root': {
        marginRight: 'auto'
      }
    },
    children: {
      alignItems: 'center',
      alignSelf: 'stretch',
      display: 'grid',
      gap: 2,
      gridAutoFlow: 'column',

      '& .MuiIconButton-root': {
        color: theme.palette.monoA.A700
      },
      '& .MuiDivider-root': {
        backgroundColor: theme.palette.monoA.A200,
        margin: '0 6px'
      }
    }
  }),
  {
    // stylelint-disable-next-line
    name: 'ESTableActions'
  }
);

export type TableActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the children container element. */
  children: string;
};
export type TableActionsClassKey = keyof TableActionsClasses;
