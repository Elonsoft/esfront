/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverrideProps } from '../../../types';
import { ExtendButtonTypeMap } from '../../Button';

export interface SFSButtonOwnProps {
  /**
   * If `true`, the icon is hidden at tablet resolution.
   */
  active?: boolean;
}

export type SFSButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonTypeMap<{
  props: AdditionalProps & SFSButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type SFSButtonProps<
  RootComponent extends React.ElementType = SFSButtonTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<SFSButtonTypeMap<AdditionalProps, RootComponent>, RootComponent>;
