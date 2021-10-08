import { KbdClasses } from './Kbd.classes';
export interface KbdProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<KbdClasses>;

  /**
   * Class applied to the root element.
   */
  className?: string;

  /**
   * Variant of the component.
   * @default 'raised'
   */
  variant?: 'raised' | 'contained' | 'outlined';
}
