import { forwardRef } from 'react';

import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
  OverlayScrollbarsComponentRef,
} from 'overlayscrollbars-react';

import clsx from 'clsx';

export const OVERLAY_SCROLLBARS_OPTIONS: OverlayScrollbarsComponentProps['options'] = {
  showNativeOverlaidScrollbars: true,
  scrollbars: { autoHide: 'leave', autoHideDelay: 0 },
};

/**
 * A scrollable container that replaces the native scrollbars with themed ones overlaying the content.
 */
export const OverlayScrollbars = forwardRef<
  OverlayScrollbarsComponentRef,
  OverlayScrollbarsComponentProps & { color?: 'mono-a' | 'mono-b' | 'white' | 'black' }
>(function OverlayScrollbars({ color = 'mono-a', ...props }, ref) {
  return (
    <OverlayScrollbarsComponent
      ref={ref}
      defer
      {...props}
      className={clsx('es-overlay-scrollbars', `es-overlay-scrollbars--color--${color}`, props.className)}
      options={{
        ...props.options,
        showNativeOverlaidScrollbars: true,
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 0,
          ...(props.options as any)?.scrollbars,
        },
      }}
    />
  );
});
