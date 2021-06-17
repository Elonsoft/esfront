/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import { Color } from '@material-ui/core';
import {
  Theme,
  BreakpointOverrides,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  TypographyVariants,
  TypographyVariantsOptions
} from '@material-ui/core/styles';
import { CommonColors } from '@material-ui/core/styles/createPalette';
import { TypographyPropsVariantOverrides } from '@material-ui/core/Typography';
import { Components } from '@material-ui/core/styles/components';
import { ComponentsOverrides, ComponentNameToClassKey } from '@material-ui/core/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@material-ui/core/styles/props';
import { DefaultTheme } from '@material-ui/styles/defaultTheme';

import { EmptyStateProps, EmptyStateClassKey } from './ui/EmptyState';
import {
  SwiperProps,
  SwiperPaginationBaseProps,
  SwiperClassKey,
  SwiperButtonClassKey,
  SwiperPaginationProps,
  SwiperPaginationClassKey
} from './ui/Swiper';

export interface ISurfacePalette {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  6: string;
  8: string;
  12: string;
  16: string;
  24: string;
  on: string;
}

declare module '@material-ui/core/styles/props' {
  interface ComponentsPropsList {
    ESEmptyState: EmptyStateProps;
    ESSwiper: SwiperProps<SwiperPaginationBaseProps>;
    ESSwiperPagination: SwiperPaginationProps;
  }
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    ESEmptyState: EmptyStateClassKey;
    ESSwiper: SwiperClassKey;
    ESSwiperButton: SwiperButtonClassKey;
    ESSwiperPagination: SwiperPaginationClassKey;
  }
}

declare module '@material-ui/core/styles/components' {
  interface Components {
    ESEmptyState?: {
      defaultProps?: ComponentsProps['ESEmptyState'];
      styleOverrides?: ComponentsOverrides['ESEmptyState'];
    };
    ESSwiper?: {
      defaultProps?: ComponentsProps['ESSwiper'];
      styleOverrides?: ComponentsOverrides['ESSwiper'];
    };
    ESSwiperButton?: {
      styleOverrides?: ComponentsOverrides['ESSwiperButton'];
    };
    ESSwiperPagination?: {
      defaultProps?: ComponentsProps['ESSwiperPagination'];
      styleOverrides?: ComponentsOverrides['ESSwiperPagination'];
    };
  }
}

declare module '@material-ui/core' {
  interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A50: string;
    A75: string;
    A100: string;
    A150: string;
    A200: string;
    A300: string;
    A400: string;
    A500: string;
    A600: string;
    A700: string;
    A800: string;
    A900: string;
  }
}

declare module '@material-ui/core/styles' {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A50: string;
    A75: string;
    A100: string;
    A150: string;
    A200: string;
    A300: string;
    A400: string;
    A500: string;
    A600: string;
    A700: string;
    A800: string;
    A900: string;
  }

  interface Palette {
    monoA: PaletteColor;
    monoB: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    surface: ISurfacePalette;
  }

  interface PaletteOptions {
    monoA?: PaletteColorOptions;
    monoB?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    surface?: Partial<ISurfacePalette>;
  }

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

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    background: string;
    background2: string;
    overlayModal: string;
    overlayFilter: string;
    overlayGallery: string;
    link: string;
    linkVisited: string;
    switch: string;
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

declare module '@material-ui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
