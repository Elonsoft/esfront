import { MutableRefObject, ReactElement } from 'react';

import { TooltipProps } from '@mui/material/Tooltip';

export type TooltipEllipsisProps = Omit<TooltipProps, 'children'> & {
  children: (props: {
    ref: MutableRefObject<HTMLElement | null>;
    childrenRef: MutableRefObject<HTMLElement | null>;
  }) => ReactElement;
};
