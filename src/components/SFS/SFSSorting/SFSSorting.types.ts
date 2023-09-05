import { Dispatch, ReactNode, SetStateAction } from 'react';

import { SFSSortingClasses } from './SFSSorting.classes';

import { SxProps, Theme } from '@mui/material';

export type SFSSortingDirection = 'asc' | 'desc';

export type SFSSortingValue = {
  value: string;
  direction: SFSSortingDirection;
};

export interface SFSSortingOptionMap {
  value: string;
  label: string;
  direction: SFSSortingDirection;
  i: number;
}

export type SFSSortingProps = {
  /** Function to render the custom button element. */
  button?: (props: {
    anchorEl: HTMLElement | null;
    setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  }) => ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSSortingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The sorting options. */
  options: { value: string; label: string }[];

  /** Text for the ascending label. */
  labelAsc?: string;
  /** Text for the descending label. */
  labelDesc?: string;
  /** Text for the reset button. */
  labelResetButton?: string;
  /** Text for the menu open button. */
  labelButton?: string;
  /** Text for the sorting menu button label when multisort is enabled. */
  labelSortOrder?: string;
  /** Text for the menu title. */
  labelSortTooltip?: string;
  /** Text for the left mouse button. */
  labelMultisortLMB?: string;
  /** Text for the switch label. */
  labelMultisortTitle?: string;
  /** Text for the switch label. */
  labelMultisortMobileOn?: string;
  /** Text for the switch label. */
  labelMultisortMobileOff?: string;

  /** Icon for the menu button. */
  iconSort?: ReactNode;
  /** Icon for the ascending badge. */
  iconAsc?: ReactNode;
  /** Icon for the descending badge. */
  iconDesc?: ReactNode;
  /** Icon for the ascending item direction. */
  iconItemAsc?: ReactNode;
  /** Icon for the descending item direction. */
  iconItemDesc?: ReactNode;
} & (
  | {
      /** If `true`, multiple options can be selected. */
      multiple: true;
      /** The selected options with directions. */
      value: SFSSortingValue[];
      /** Callback fired when user changes sorting. */
      onChange: (value: SFSSortingValue[]) => void;
    }
  | {
      /** If `true`, multiple options can be selected. */
      multiple?: false;
      /** The selected option with direction. */
      value: SFSSortingValue | null;
      /** Callback fired when user changes sorting. */
      onChange: (value: SFSSortingValue | null) => void;
    }
);
