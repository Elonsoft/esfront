import React, { Fragment } from 'react';
import { useStyles } from './PalettesDemo.styles';

import { useTheme } from '@material-ui/core/styles';
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

export const PalettesDemo = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <div className={styles.palettes}>
      {PALETTES.map((palette) => (
        <Fragment key={palette}>
          <Typography className={styles.palettesPalette} component="div" variant="body100">
            <code>{palette}</code>
          </Typography>
          {Object.keys((theme.palette as any)[palette])
            .filter((color) => !COLOR_IGNORE.includes(color))
            .map((color) => (
              <div key={color}>
                <Typography className={styles.palettesColorName} component="div" variant="caption">
                  <code>{color}</code>
                </Typography>
                <div
                  className={styles.palettesColorBackground}
                  style={{
                    backgroundColor: (theme.palette as any)[palette][color] as string
                  }}
                ></div>
              </div>
            ))}
        </Fragment>
      ))}
    </div>
  );
};
