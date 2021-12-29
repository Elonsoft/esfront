/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import {
  BreakpointOverrides,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  Theme,
  TypographyVariants,
  TypographyVariantsOptions
} from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { CommonColors } from '@mui/material/styles/createPalette';
import { ComponentNameToClassKey, ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@mui/material/styles/props';
import { Color, ComponentsVariants } from '@mui/material';
import { ButtonPropsSizeOverrides } from '@mui/material/Button';
import { FormControlPropsSizeOverrides } from '@mui/material/FormControl';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase';
import { TextFieldPropsSizeOverrides } from '@mui/material/TextField';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography';

import { DropzoneClassKey, DropzoneProps } from './ui/Dropzone';
import { EmptyStateClassKey, EmptyStateProps } from './ui/EmptyState';
import {
  FileIconBadgeClassKey,
  FileIconBadgeProps,
  FileIconClassKey,
  FileIconProps,
  FileIconTextClassKey,
  FileIconTextProps
} from './ui/FileIcon';
import {
  FileInfoClassKey,
  FileInfoContentClassKey,
  FileInfoContentProps,
  FileInfoMetaClassKey,
  FileInfoMetaProps,
  FileInfoMetaSeparatorClassKey,
  FileInfoMetaSeparatorProps,
  FileInfoNameClassKey,
  FileInfoNameProps,
  FileInfoProps
} from './ui/FileInfo';
import { FormatDateProps } from './ui/FormatDate';
import { FormatSizeProps } from './ui/FormatSize';
import { KbdClassKey, KbdProps } from './ui/Kbd';
import {
  SpinnerDashRingClassKey,
  SpinnerDashRingProps,
  SpinnerFadingBarsClassKey,
  SpinnerFadingBarsProps,
  SpinnerFadingDotsClassKey,
  SpinnerFadingDotsProps,
  SpinnerFadingDoubleRingClassKey,
  SpinnerFadingDoubleRingProps,
  SpinnerFadingRingClassKey,
  SpinnerFadingRingProps,
  SpinnerRingClassKey,
  SpinnerRingProps
} from './ui/Spinner';
import {
  SwiperButtonClassKey,
  SwiperClassKey,
  SwiperPaginationBaseProps,
  SwiperPaginationClassKey,
  SwiperPaginationProps,
  SwiperProps
} from './ui/Swiper';
import { TableActionsClassKey, TableActionsProps } from './ui/TableActions';

export interface ISurfacePalette {
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
  on: string;
}

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    ESEmptyState: EmptyStateProps;
    ESSwiper: SwiperProps<SwiperPaginationBaseProps>;
    ESSwiperPagination: SwiperPaginationProps;
    ESTableActions: TableActionsProps;
    ESDropzone: DropzoneProps;
    ESFileIcon: FileIconProps;
    ESFileIconBadge: FileIconBadgeProps;
    ESFileIconText: FileIconTextProps;
    ESFileInfo: FileInfoProps;
    ESFileInfoContent: FileInfoContentProps;
    ESFileInfoMeta: FileInfoMetaProps;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorProps;
    ESFileInfoName: FileInfoNameProps;
    ESFormatDate: FormatDateProps;
    ESFormatSize: FormatSizeProps;
    ESKbd: KbdProps;
    ESSpinnerDashRing: SpinnerDashRingProps;
    ESSpinnerFadingBars: SpinnerFadingBarsProps;
    ESSpinnerFadingDots: SpinnerFadingDotsProps;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingProps;
    ESSpinnerFadingRing: SpinnerFadingRingProps;
    ESSpinnerRing: SpinnerRingProps;
  }
}

declare module '@mui/material/styles/overrides' {
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
    ESSpinnerDashRing: SpinnerDashRingClassKey;
    ESSpinnerFadingBars: SpinnerFadingBarsClassKey;
    ESSpinnerFadingDots: SpinnerFadingDotsClassKey;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingClassKey;
    ESSpinnerFadingRing: SpinnerFadingRingClassKey;
    ESSpinnerRing: SpinnerRingClassKey;
    ESFileInfo: FileInfoClassKey;
    ESFileInfoContent: FileInfoContentClassKey;
    ESFileInfoMeta: FileInfoMetaClassKey;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorClassKey;
    ESFileInfoName: FileInfoNameClassKey;
    ESKbd: KbdClassKey;
  }
}

declare module '@mui/material/styles/components' {
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
    ESFileInfo?: {
      defaultProps?: ComponentsProps['ESFileInfo'];
      styleOverrides?: ComponentsProps['ESFileInfo'];
    };
    ESFileInfoContent?: {
      defaultProps?: ComponentsProps['ESFileInfoContent'];
      styleOverrides?: ComponentsProps['ESFileInfoContent'];
    };
    ESFileInfoMeta?: {
      defaultProps?: ComponentsProps['ESFileInfoMeta'];
      styleOverrides?: ComponentsProps['ESFileInfoMeta'];
    };
    ESFileInfoMetaSeparator?: {
      defaultProps?: ComponentsProps['ESFileInfoMetaSeparator'];
      styleOverrides?: ComponentsProps['ESFileInfoMetaSeparator'];
    };
    ESFileInfoName?: {
      defaultProps?: ComponentsProps['ESFileInfoName'];
      styleOverrides?: ComponentsProps['ESFileInfoName'];
    };
    ESFormatDate?: {
      defaultProps?: ComponentsProps['ESFormatDate'];
    };
    ESFormatSize?: {
      defaultProps?: ComponentsProps['ESFormatSize'];
    };
    ESKbd?: {
      defaultProps?: ComponentsProps['ESKbd'];
    };
    ESSpinnerDashRing?: {
      defaultProps?: ComponentsProps['ESSpinnerDashRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerDashRing'];
    };
    ESSpinnerFadingBars?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingBars'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingBars'];
    };
    ESSpinnerFadingDots?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDots'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingDots'];
    };
    ESSpinnerFadingDoubleRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDoubleRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingDoubleRing'];
    };
    ESSpinnerFadingRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingRing'];
    };
    ESSpinnerRing?: {
      defaultProps?: ComponentsProps['ESSpinnerRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerRing'];
    };
  }
}

declare module '@mui/material' {
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

declare module '@mui/material/styles' {
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
    red: PaletteColor;
    brown: PaletteColor;
    orange: PaletteColor;
    yellow: PaletteColor;
    green: PaletteColor;
    marine: PaletteColor;
    sky: PaletteColor;
    blue: PaletteColor;
    violet: PaletteColor;
    purple: PaletteColor;
    pink: PaletteColor;
    teal: PaletteColor;
    grey: Color;
    greyscale: PaletteColor;
  }

  interface PaletteOptions {
    monoA?: PaletteColorOptions;
    monoB?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    surface?: Partial<ISurfacePalette>;
    red?: PaletteColorOptions;
    brown?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
    green?: PaletteColorOptions;
    marine?: PaletteColorOptions;
    sky?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    violet?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    teal?: PaletteColorOptions;
    grey?: Partial<Color>;
    greyscale?: PaletteColorOptions;
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

declare module '@mui/material/styles/createPalette' {
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

declare module '@mui/material/Button' {
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

declare module '@mui/material/IconButton' {
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

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/Typography' {
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
