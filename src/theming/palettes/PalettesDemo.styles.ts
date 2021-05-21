import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  palettes: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
  },
  palettesPalette: {
    backgroundColor: theme.palette.monoA.A50,
    borderRadius: 2,
    gridColumnEnd: -1,
    gridColumnStart: 1,
    padding: '8px 16px',

    '&:not(:first-child)': {
      marginTop: 32
    }
  },
  palettesColorName: {
    backgroundColor: theme.palette.monoA.A50,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    padding: '8px 16px'
  },
  palettesColorBackground: {
    border: `1px solid ${theme.palette.monoA.A50}`,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTop: 0,
    padding: 16
  }
}));
