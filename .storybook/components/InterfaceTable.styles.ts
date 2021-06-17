import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.monoA.A150}`,
    borderRadius: 4,
    marginTop: 24
  },
  row: {
    '& .MuiTableCell-root': {
      borderBottom: `1px solid ${theme.palette.monoA.A150}`
    },
    '&:last-child .MuiTableCell-root': {
      borderBottom: 0
    },
    '&.MuiTableRow-head:last-child .MuiTableCell-root': {
      borderBottom: `1px solid ${theme.palette.monoA.A150}`
    }
  },
  code: {
    display: 'inline-block',
    padding: '3px 5px',
    borderRadius: 3,
    backgroundColor: theme.palette.monoA.A50,
    border: `1px solid ${theme.palette.monoA.A150}`
  },
  description: {
    marginBottom: 4
  }
}));
