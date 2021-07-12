import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      '&.MuiIconButton-root': {
        backdropFilter: 'blur(10px)',
        backgroundColor: theme.palette.black.A600,
        borderRadius: 4,
        color: theme.palette.white[500],
        padding: 8,

        '&:hover': {
          backgroundColor: theme.palette.black.A600
        }
      }
    }
  }),
  {
    // stylelint-disable-next-line
    name: 'ESSwiperButton'
  }
);

export type SwiperButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type SwiperButtonClassKey = keyof SwiperButtonClasses;
