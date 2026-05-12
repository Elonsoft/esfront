import { CSSProperties, ReactNode } from 'react';

export interface TableCellProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Specify the cell type. The prop defaults to the value inherited from the parent TableHead or TableBody components. */
  variant?: 'head' | 'body';
  /**
   * The padding applied to the cell.
   * @default 'normal'
   */
  padding?: 'none' | 'normal' | 'checkbox';
  /** A non-negative integer value that indicates for how many columns the cell extends. */
  colSpan?: number;

  /** If `true`, the table row divider is shown.
   * @default false
   */
  rowDivider?: boolean;
  /** If `true`, the table col divider is shown.
   * @default false
   */
  colDivider?: boolean;
  /**
   * Set the text-align on the table cell content.
   * @default 'flex-start'
   */
  align?: 'flex-start' | 'center' | 'flex-end';
  /** Pin the cell to the left or right side. */
  pin?: 'left' | 'right';
  /** Indicate if component is in error state. */
  error?: boolean;
  /** If true, the table cell will overlap it's row. */
  overlap?: boolean;
  /** If true, the table cell is editable. */
  editable?: boolean;

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent?: React.ElementType;
  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /** Callback fired when user starts cell editing. */
  onEdit?: () => void;
  /** Callback fired when user accepts cell editing. */
  onEditAccept?: (input: HTMLInputElement) => void;
  /** Callback fired when user cancels cell editing. */
  onEditCancel?: (input: HTMLInputElement) => void;

  /** The id attribute passed to root element. */
  id?: string;

  /** Callback function that is fired when the cell's width changed. */
  onResize?: (width: number, element: HTMLElement) => void;
  /** Callback function that is fired when the cell's width finished changing. */
  onResizeCommit?: (width: number, element: HTMLElement) => void;

  /**
   * The minimum width of the cell for manual resizing.
   * @default 0
   */
  minWidth?: number;

  /** Icon for the edit hint. */
  iconEdit?: React.ReactNode;
  /** Icon for the edit accept button. */
  iconEditAccept?: React.ReactNode;
  /** Icon for the edit cancel button. */
  iconEditCancel?: React.ReactNode;

  /** Text for the resize button aria-label. */
  labelResize?: string;
  /** Text for the edit accept button aria-label. */
  labelEditAccept?: string;
  /** Text for the edit cancel button aria-label. */
  labelEditCancel?: string;
}
