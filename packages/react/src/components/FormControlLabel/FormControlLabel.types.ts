import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface FormControlLabelProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** A control element. For instance, it can be a Radio or a Checkbox. */
  control: ReactNode;
  /** A text or an element to be used in an enclosing label element. */
  label?: ReactNode;

  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';

  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    typography?: Partial<HTMLAttributes<HTMLDivElement>>;
  };
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    typography?: React.ElementType;
  };
}
