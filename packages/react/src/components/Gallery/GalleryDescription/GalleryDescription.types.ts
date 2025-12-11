import { CSSProperties, ReactNode } from 'react';

export interface GalleryDescriptionProps {
  children?: string;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Position of the description. Inherited from `GalleryPanel` by default. */
  position?: 'top' | 'bottom';

  /** Text for the collapse button aria-label. */
  labelCollapse?: string;
  /** Text for the expand button aria-label. */
  labelExpand?: string;

  /** Icon for the collapse button. */
  iconCollapse?: ReactNode;
  /** Icon for the expand button. */
  iconExpand?: ReactNode;
}
