import { MutableRefObject, ReactElement } from 'react';

import { TooltipProps } from '../Tooltip';

export type TooltipEllipsisProps = Omit<TooltipProps, 'children'> & {
  children: (props: {
    ref: MutableRefObject<HTMLElement | null>;
    childrenRef: MutableRefObject<HTMLElement | null>;
  }) => ReactElement;
};
