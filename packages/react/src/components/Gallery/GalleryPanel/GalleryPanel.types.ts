import { CSSProperties, ReactNode } from 'react';

export interface GalleryPanelProps {
  /** Function to render the text. */
  children: (item: any, index: number) => ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Position of the panel. */
  position: 'top' | 'bottom';
  /** Layout direction inside of the panel. */
  direction: 'row' | 'column';
}
