'use client';

import { useRef } from 'react';

import { TooltipEllipsisProps } from './TooltipEllipsis.types';

import { useOverflow } from '../../hooks';
import { Tooltip } from '../Tooltip';

/**
 * A tooltip that is shown only when the content of the child element is truncated with an ellipsis.
 */
export const TooltipEllipsis = ({ children, ...props }: TooltipEllipsisProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const childrenRef = useRef<HTMLElement | null>(null);

  const root = useOverflow(ref);
  const child = useOverflow(childrenRef);

  const overflow = root.isOverflowX || root.isOverflowY || child.isOverflowX || child.isOverflowY;

  return (
    <Tooltip
      {...props}
      disableFocusListener={!overflow}
      disableHoverListener={!overflow}
      disableTouchListener={!overflow}
    >
      {children({ ref, childrenRef })}
    </Tooltip>
  );
};
