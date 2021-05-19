import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px dashed ${theme.palette.grey[500]}`,
    padding: 16
  }
}));
