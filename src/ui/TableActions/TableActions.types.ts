import { TableActionsClasses } from './TableActions.styles';

export interface TableActionsProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The number of selected rows. */
  count?: number;
  /** Customize the selected rows count label. */
  label?: string;
}
