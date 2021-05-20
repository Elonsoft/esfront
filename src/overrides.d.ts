/* eslint-disable @typescript-eslint/no-unused-vars */

import { BreakpointOverrides, TypographyVariants, TypographyVariantsOptions } from '@material-ui/core/styles';
import { TypographyPropsVariantOverrides } from '@material-ui/core/Typography';

declare module '@material-ui/core/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tabletXS: true;
    desktopXS: true;
  }

  interface TypographyVariants {
    body400: React.CSSProperties;
    body300: React.CSSProperties;
    body200: React.CSSProperties;
    body100: React.CSSProperties;
    mini1: React.CSSProperties;
    mini2: React.CSSProperties;
    micro: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body400?: React.CSSProperties;
    body300?: React.CSSProperties;
    body200?: React.CSSProperties;
    body100?: React.CSSProperties;
    mini1?: React.CSSProperties;
    mini2?: React.CSSProperties;
    micro?: React.CSSProperties;
  }
}

declare module '@material-ui/core/Typography' {
  interface TypographyPropsVariantOverrides {
    body400: true;
    body300: true;
    body200: true;
    body100: true;
    mini1: true;
    mini2: true;
    micro: true;
    body1: false;
    body2: false;
  }
}
