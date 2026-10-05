import { ReactElement, RefObject } from 'react';

import { TooltipProps } from '../Tooltip';

export type TooltipEllipsisProps = Omit<TooltipProps, 'children'> & {
  children: (props: { ref: RefObject<HTMLElement | null>; childrenRef: RefObject<HTMLElement | null> }) => ReactElement;
};
