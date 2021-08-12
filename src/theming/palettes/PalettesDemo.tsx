import { Fragment } from 'react';

import { useTheme, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const PALETTES = [
  'primary',
  'secondary',
  'error',
  'success',
  'info',
  'warning',
  'monoA',
  'monoB',
  'grey',
  'surface',
  'common',
  'black',
  'white'
];

const COLOR_IGNORE = ['contrastText'];

const PalettesDemoRoot = styled('div')(() => ({
  display: 'grid',
  gap: 4,
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
}));

const PalettesDemoPalette = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  borderRadius: 2,
  display: 'block',
  gridColumnEnd: -1,
  gridColumnStart: 1,
  padding: '8px 16px',

  '&:not(:first-child)': {
    marginTop: 32
  }
}));

const PalettesDemoColorName = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  display: 'block',
  padding: '8px 16px'
}));

const PalettesDemoColorBackground = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.monoA.A50}`,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
  borderTop: 0,
  padding: 16
}));

export const PalettesDemo = () => {
  const theme = useTheme();

  return (
    <PalettesDemoRoot>
      {PALETTES.map((palette) => (
        <Fragment key={palette}>
          <PalettesDemoPalette variant="body100">
            <code>{palette}</code>
          </PalettesDemoPalette>
          {Object.keys((theme.palette as any)[palette])
            .filter((color) => !COLOR_IGNORE.includes(color))
            .map((color) => (
              <div key={color}>
                <PalettesDemoColorName variant="caption">
                  <code>{color}</code>
                </PalettesDemoColorName>
                <PalettesDemoColorBackground
                  style={{
                    backgroundColor: (theme.palette as any)[palette][color] as string
                  }}
                ></PalettesDemoColorBackground>
              </div>
            ))}
        </Fragment>
      ))}
    </PalettesDemoRoot>
  );
};
