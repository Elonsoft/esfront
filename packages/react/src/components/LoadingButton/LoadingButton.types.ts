/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverrideProps } from '@mui/material/OverridableComponent';

import { ExtendButtonTypeMap } from '../Button';

export interface LoadingButtonOwnProps {
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
}

export type LoadingButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonTypeMap<{
  props: AdditionalProps & LoadingButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type LoadingButtonProps<
  RootComponent extends React.ElementType = LoadingButtonTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<LoadingButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
