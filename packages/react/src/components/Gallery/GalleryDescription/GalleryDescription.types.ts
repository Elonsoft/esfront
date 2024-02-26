import { ReactNode } from 'react';

import { GalleryDescriptionClasses } from './GalleryDescription.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface GalleryDescriptionProps {
  children?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryDescriptionClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

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
