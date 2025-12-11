import { CSSProperties, ReactNode } from 'react';

export interface FiltersHeaderProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Callback fired when the clear button is clicked. If prop is passed clear button will appear. */
  onClear?: () => void;

  /** Text for the header content. */
  labelFilters?: string;
  /** Text for the reset button. */
  labelReset?: string;
}
