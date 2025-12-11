import { CSSProperties, ReactNode } from 'react';

export interface SFSSearchProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Callback fired when the value is changed. */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  /** The value of the input element. */
  value: string;
  /** Callback fired when the clear button is clicked. If prop is passed clear button will appear. */
  onClear?: () => void;
  /** The aria-label input content. */
  ariaLabel?: string;
  /** The aria-label clear button content. */
  labelClear?: string;
  /** The placeholder content. */
  placeholder?: string;
  /** The icon placed in clear button. */
  iconClear?: ReactNode;
  /** The icon placed in before the search input. */
  iconSearch?: ReactNode;
}
