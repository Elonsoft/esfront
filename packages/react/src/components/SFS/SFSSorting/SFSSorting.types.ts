import { CSSProperties, ReactNode } from 'react';

import { SortingMenuOption, SortingMenuValue } from '../../SortingMenu';

export type SFSSortingProps = {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The sorting options. */
  options: SortingMenuOption[];

  /** Text for the menu open button. */
  labelButton?: string;

  /** Icon for the menu button. */
  iconSort?: ReactNode;
  /** Icon for the ascending badge. */
  iconAsc?: ReactNode;
  /** Icon for the descending badge. */
  iconDesc?: ReactNode;
} & (
  | {
      /** If `true`, multiple options can be selected. */
      multiple: true;
      /** The selected options with directions. */
      value: SortingMenuValue[];
      /** Callback fired when user changes sorting. */
      onChange: (value: SortingMenuValue[]) => void;
    }
  | {
      /** If `true`, multiple options can be selected. */
      multiple?: false;
      /** The selected option with direction. */
      value: SortingMenuValue | null;
      /** Callback fired when user changes sorting. */
      onChange: (value: SortingMenuValue | null) => void;
    }
);
