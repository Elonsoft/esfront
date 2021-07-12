import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    icon: {
      color: theme.palette.monoA.A150,
      marginBottom: 12
    },
    text: {
      '&:not(:last-child)': {
        marginBottom: 20
      }
    },
    heading: {
      color: theme.palette.monoA.A900,
      '&:not(:last-child)': {
        marginBottom: 2
      }
    },
    subheading: {
      color: theme.palette.monoA.A600
    }
  }),
  {
    // stylelint-disable-next-line
    name: 'ESEmptyState'
  }
);

export type EmptyStateClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the subheading element. */
  subheading: string;
};
export type EmptyStateClassKey = keyof EmptyStateClasses;
