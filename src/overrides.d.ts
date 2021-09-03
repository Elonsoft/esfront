/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import { Color, ComponentsVariants } from '@mui/material';
import {
  Theme,
  BreakpointOverrides,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  TypographyVariants,
  TypographyVariantsOptions
} from '@mui/material/styles';
import { CommonColors } from '@mui/material/styles/createPalette';

import { ButtonPropsSizeOverrides } from '@mui/material/Button';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton';
import { FormControlPropsSizeOverrides } from '@mui/material/FormControl';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase';
import { TextFieldPropsSizeOverrides } from '@mui/material/TextField';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography';

import { Components } from '@mui/material/styles/components';
import { ComponentsOverrides, ComponentNameToClassKey } from '@mui/material/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@mui/material/styles/props';

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
import {
  FileInfoProps,
  FileInfoClassKey,
  FileInfoContentProps,
  FileInfoContentClassKey,
  FileInfoMetaProps,
  FileInfoMetaClassKey,
  FileInfoMetaSeparatorProps,
  FileInfoMetaSeparatorClassKey,
  FileInfoNameProps,
  FileInfoNameClassKey
} from './ui/FileInfo';
import { FormatDateProps } from './ui/FormatDate';
import { FormatSizeProps } from './ui/FormatSize';
import {
  SpinnerFadingRingClassKey,
  SpinnerFadingDotsClassKey,
  SpinnerFadingDotsProps,
  SpinnerFadingRingProps,
  SpinnerFadingBarsProps,
  SpinnerFadingBarsClassKey,
  SpinnerRingProps,
  SpinnerRingClassKey,
  SpinnerDashRingClassKey,
  SpinnerDashRingProps,
  SpinnerFadingDoubleRingClassKey,
  SpinnerFadingDoubleRingProps
} from './ui/Spinner';

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
