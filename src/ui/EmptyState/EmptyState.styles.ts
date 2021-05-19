import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px dashed ${theme.palette.grey[500]}`,
    color: theme.palette.text.primary,
    padding: 16
  }
}));
