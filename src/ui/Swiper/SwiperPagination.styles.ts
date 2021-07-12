import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      width: '100%',
      '&$start': {
        marginBottom: 14,
        marginTop: -2
      },
      '&$end': {
        marginBottom: -2,
        marginTop: 14
      }
    },
    vertical: {
      flexDirection: 'column',
      height: '100%',
      '&$start': {
        marginLeft: -2,
        marginRight: 14
      },
      '&$end': {
        marginLeft: 14,
        marginRight: -2
      }
    },
    start: {
      order: -1
    },
    end: {},
    small: {},
    long: {
      '&$horizontal $bulletActive': {
        width: 16
      },
      '&$vertical $bulletActive': {
        height: 16
      }
    },
    big: {
      '& $itemActive': {
        padding: 2
      },
      '& $bulletActive': {
        height: 12,
        width: 12
      }
    },
    item: {
      alignItems: 'center',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      margin: 2,
      minHeight: 16,
      minWidth: 16,
      padding: 4,
      position: 'relative',
      transitionDuration: `${theme.transitions.duration.shortest}ms`,
      transitionTimingFunction: 'linear',
      '&:focus': {
        outline: 'none'
      },
      '&:hover $bullet': {
        backgroundColor: theme.palette.secondary.A600
      },
      '&:active $bullet': {
        backgroundColor: theme.palette.secondary.A800
      }
    },
    itemActive: {
      '&:hover $bullet, &:active $bullet': {
        backgroundColor: theme.palette.secondary[300]
      }
    },
    input: {
      appearance: 'none',
      cursor: 'pointer',
      height: 0,
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: 0,
      '&:focus-visible + $bulletActive': {
        boxShadow: `0 0 0 7px ${theme.palette.secondary.A500}`
      }
    },
    bullet: {
      backgroundColor: theme.palette.secondary.A400,
      borderRadius: '16px',
      height: 8,
      transitionDuration: `${theme.transitions.duration.shortest}ms`,
      transitionTimingFunction: 'linear',
      width: 8
    },
    bulletActive: {
      backgroundColor: theme.palette.secondary[300]
    },
    bulletSmall: {
      height: 4,
      width: 4
    }
  }),
  {
    // stylelint-disable-next-line
    name: 'ESSwiperPagination'
  }
);

export type SwiperPaginationClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if direction='horizontal'. */
  horizontal: string;
  /** Styles applied to the root element if direction='vertical'. */
  vertical: string;
  /** Styles applied to the root element if position='start'. */
  start: string;
  /** Styles applied to the root element if position='end'. */
  end: string;
  /** Styles applied to the root element if variant='small'. */
  small: string;
  /** Styles applied to the root element if variant='long'. */
  long: string;
  /** Styles applied to the root element if variant='big'. */
  big: string;
  /** Styles applied to the item element. */
  item: string;
  /** Styles applied to the item element if it is active. */
  itemActive: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the bullet element. */
  bullet: string;
  /** Styles applied to the bullet element if it is active. */
  bulletActive: string;
  /** Styles applied to the bullet element if it is at the end of visible siblings. */
  bulletSmall: string;
};
export type SwiperPaginationClassKey = keyof SwiperPaginationClasses;
