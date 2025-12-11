import { Theme } from '@mui/material/styles';

export const createTypography = (theme: Theme) => {
  const pxToRem = theme.typography.pxToRem;

  return {
    subtitle1: {
      fontSize: pxToRem(16),
      fontWeight: 400,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(24),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1),
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: 400,
      letterSpacing: pxToRem(0.4),
      lineHeight: pxToRem(16),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1),
    },

    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,

    subtitle2: undefined,

    body1: undefined,
    body2: undefined,

    button: undefined,
    overline: undefined,
  };
};
