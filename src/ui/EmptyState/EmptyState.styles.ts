import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px dashed ${theme.palette.monoA.A200}`,
    color: theme.palette.text.primary,
    padding: 16
  }
}));
