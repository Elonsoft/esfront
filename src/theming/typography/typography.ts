import { Theme } from '@mui/material/styles';

export const createTypography = (theme: Theme) => {
  const pxToRem = theme.typography.pxToRem;
  const tabletXS = theme.breakpoints.up('tabletXS');
  const desktopXS = theme.breakpoints.up('desktopXS');

  return {
    h1: {
      fontSize: pxToRem(30),
      fontWeight: 500,
      letterSpacing: pxToRem(0.2),
      lineHeight: pxToRem(36),

      [tabletXS]: {
        fontSize: pxToRem(34),
        lineHeight: pxToRem(40)
      },

      [desktopXS]: {
        fontSize: pxToRem(40),
        lineHeight: pxToRem(48)
      }
    },
    h2: {
      fontSize: pxToRem(26),
      fontWeight: 500,
      letterSpacing: pxToRem(0.1),
      lineHeight: pxToRem(32),

      [tabletXS]: {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36)
      },

      [desktopXS]: {
        fontSize: pxToRem(34),
        lineHeight: pxToRem(40)
      }
    },
    h3: {
      fontSize: pxToRem(24),
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: pxToRem(28),

      [tabletXS]: {
        fontSize: pxToRem(26),
        lineHeight: pxToRem(32)
      },

      [desktopXS]: {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36)
      }
    },
    h4: {
      fontSize: pxToRem(22),
      fontWeight: 500,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(28),

      [tabletXS]: {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(28)
      }
    },
    h5: {
      fontSize: pxToRem(20),
      fontWeight: 500,
      letterSpacing: pxToRem(0.2),
      lineHeight: pxToRem(24)
    },
    h6: {
      fontSize: pxToRem(18),
      fontWeight: 500,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(24)
    },
    subtitle1: {
      fontSize: pxToRem(16),
      fontWeight: 400,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(20)
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      letterSpacing: pxToRem(0.1),
      lineHeight: pxToRem(16)
    },
    body400: {
      fontSize: pxToRem(20),
      letterSpacing: pxToRem(0.5),
      lineHeight: pxToRem(32)
    },
    body300: {
      fontSize: pxToRem(18),
      letterSpacing: pxToRem(0.1),
      lineHeight: pxToRem(28)
    },
    body200: {
      fontSize: pxToRem(16),
      letterSpacing: pxToRem(0.5),
      lineHeight: pxToRem(24)
    },
    body100: {
      fontSize: pxToRem(14),
      letterSpacing: pxToRem(0.25),
      lineHeight: pxToRem(20)
    },
    mini1: {
      fontSize: pxToRem(11),
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: pxToRem(16)
    },
    mini2: {
      fontSize: pxToRem(9),
      fontWeight: 500,
      letterSpacing: pxToRem(0.6),
      lineHeight: pxToRem(14)
    },
    micro: {
      fontSize: pxToRem(9),
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: pxToRem(12)
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      letterSpacing: pxToRem(0.5)
    },
    caption: {
      fontSize: pxToRem(12),
      letterSpacing: pxToRem(0.4),
      lineHeight: pxToRem(16)
    },
    overline: {
      fontSize: pxToRem(10),
      fontWeight: 500,
      letterSpacing: pxToRem(1.2),
      lineHeight: pxToRem(16)
    },
    body1: undefined,
    body2: undefined
  };
};
