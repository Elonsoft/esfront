import { ReactNode } from 'react';

import { AudioPlayerMenuClasses } from './AudioPlayerMenu.classes';

import { SxProps, Theme, TooltipProps } from '@mui/material';

export interface AudioPlayerMenuProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerMenuClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  rate: number;
  rates?: number[];

  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

  onRateInputChange: (value: number) => () => void;
  onDownloadClick?: () => void;
  iconBack?: ReactNode;
  iconRate?: ReactNode;
  iconRateOpen?: ReactNode;
  iconRateCheck?: ReactNode;
  iconDownload?: ReactNode;
  iconOptions?: ReactNode;
  labelBack?: string;
  labelRateNormal?: string;
  labelRate?: string;
  labelDownload?: string;
  labelOptions?: string;

  TooltipProps?: Partial<TooltipProps>;
}
