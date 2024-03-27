/* eslint-disable @typescript-eslint/ban-types */

import { LoadingButtonClasses } from './LoadingButton.classes';

import { SxProps, Theme } from '@mui/material';
import { ButtonClasses, ExtendButtonTypeMap } from '@mui/material/Button';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface LoadingButtonOwnProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses> & LoadingButtonClasses;
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading?: boolean;
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `SpinnerFadingDots` that is labelled by the button itself.
   */
  loadingIndicator?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type LoadingButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: AdditionalProps & LoadingButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type LoadingButtonProps<
  RootComponent extends React.ElementType = LoadingButtonTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<LoadingButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
