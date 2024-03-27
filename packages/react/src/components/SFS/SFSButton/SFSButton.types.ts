/* eslint-disable @typescript-eslint/ban-types */

import { SFSButtonClasses } from './SFSButton.classes';

import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';
import { ButtonClasses, ExtendButtonTypeMap } from '@mui/material/Button';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface SFSButtonOwnProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses> & SFSButtonClasses;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * If `true`, the icon is hidden at tablet resolution.
   */
  active?: boolean;
}

export type SFSButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: AdditionalProps & SFSButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type SFSButtonProps<
  RootComponent extends React.ElementType = SFSButtonTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<SFSButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
