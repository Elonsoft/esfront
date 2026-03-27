import { CSSProperties, ReactNode } from 'react';

export interface FormFieldLabelProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * If `true`, the label is shrunk above the field. Defaults to whether the field is focused or filled, pass it to take
   * over, e.g. to keep the label up while a menu is shown.
   */
  shrink?: boolean;

  /** Id applied to the root element. Reference it from the input to label it. */
  id?: string;
}
