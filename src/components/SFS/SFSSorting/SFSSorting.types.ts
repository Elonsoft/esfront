import { SFSSortingClasses } from './SFSSorting.classes';

import { SxProps, Theme } from '@mui/material';

export type SFSSortingProps = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSSortingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The sorting options. */
  options: { value: string; label: string }[];
  /** The `asc` sorting label. */
  labelAsc?: string;
  /** The `desc` sorting label. */
  labelDesc?: string;
  /** The reset sort button label. */
  labelResetButton?: string;
  /** The open sorting menu button label. */
  labelButton?: string;
  /** The open sorting menu button label when multisort is enabled. */
  labelSortOrder?: string;
  labelSortTooltip?: string;
  labelMultisortLMB?: string;
  labelMultisortTitle?: string;
  labelMultisortMobileOn?: string;
  labelMultisortMobileOff?: string;
} & (
  | {
      multiple: true;
      values: SFSSortingValue[];
      onChange: (value: SFSSortingValue[]) => void;
    }
  | {
      multiple?: false;
      values: SFSSortingValue | null;
      onChange: (value: SFSSortingValue | null) => void;
    }
);

export interface SFSSortingOptionMap {
  value: string;
  label: string;
  direction: SFSSortingDirection;
  i: number;
}

export type SFSSortingDirection = 'asc' | 'desc';
export type SFSSortingValue = {
  value: string;
  direction: SFSSortingDirection;
};
export type SFSSortingValues = SFSSortingValue[];
