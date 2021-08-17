/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import { Color, ComponentsVariants } from '@material-ui/core';
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

import { ButtonPropsSizeOverrides } from '@material-ui/core/Button';
import { IconButtonPropsSizeOverrides } from '@material-ui/core/IconButton';
import { FormControlPropsSizeOverrides } from '@material-ui/core/FormControl';
import { InputBasePropsSizeOverrides } from '@material-ui/core/InputBase';
import { TextFieldPropsSizeOverrides } from '@material-ui/core/TextField';
import { TypographyPropsVariantOverrides } from '@material-ui/core/Typography';

import { Components } from '@material-ui/core/styles/components';
import { ComponentsOverrides, ComponentNameToClassKey } from '@material-ui/core/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@material-ui/core/styles/props';

import { EmptyStateProps, EmptyStateClassKey } from './ui/EmptyState';
import { DropzoneProps, DropzoneClassKey } from './ui/Dropzone';
import {
  SwiperProps,
  SwiperPaginationBaseProps,
  SwiperClassKey,
  SwiperButtonClassKey,
  SwiperPaginationProps,
  SwiperPaginationClassKey
} from './ui/Swiper';
import { TableActionsProps, TableActionsClassKey } from './ui/TableActions';
import {
  FileIconBadgeClassKey,
  FileIconClassKey,
  FileIconBadgeProps,
  FileIconProps,
  FileIconTextProps,
  FileIconTextClassKey
} from './ui/FileIcon';

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
    ESTableActions: TableActionsProps;
    ESDropzone: DropzoneProps;
    ESFileIcon: FileIconProps;
    ESFileIconBadge: FileIconBadgeProps;
    ESFileIconText: FileIconTextProps;
  }
}

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    ESEmptyState: EmptyStateClassKey;
    ESSwiper: SwiperClassKey;
    ESSwiperButton: SwiperButtonClassKey;
    ESSwiperPagination: SwiperPaginationClassKey;
    ESTableActions: TableActionsClassKey;
    ESDropzone: DropzoneClassKey;
    ESFileIcon: FileIconClassKey;
    ESFileIconBadge: FileIconBadgeClassKey;
    ESFileIconText: FileIconTextClassKey;
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
    ESTableActions?: {
      defaultProps?: ComponentsProps['ESTableActions'];
      styleOverrides?: ComponentsOverrides['ESTableActions'];
    };
    ESDropzone?: {
      defaultProps?: ComponentsProps['ESDropzone'];
      styleOverrides?: ComponentsOverrides['ESDropzone'];
    };
    ESFileIcon?: {
      defaultProps?: ComponentsProps['ESFileIcon'];
      styleOverrides?: ComponentsProps['ESFileIcon'];
    };
    ESFileIconBadge?: {
      defaultProps?: ComponentsProps['ESFileIconBadge'];
      styleOverrides?: ComponentsProps['ESFileIconBadge'];
    };
    ESFileIconText?: {
      defaultProps?: ComponentsProps['ESFileIconText'];
      styleOverrides?: ComponentsProps['ESFileIconText'];
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

declare module '@material-ui/core/Button' {
  interface ButtonPropsSizeOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    small: false;
    medium: false;
    large: false;
  }
}

declare module '@material-ui/core/IconButton' {
  interface IconButtonPropsSizeOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    small: false;
    medium: false;
    large: false;
  }
}

declare module '@material-ui/core/FormControl' {
  interface FormControlPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@material-ui/core/InputBase' {
  interface InputBasePropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@material-ui/core/TextField' {
  interface TextFieldPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
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