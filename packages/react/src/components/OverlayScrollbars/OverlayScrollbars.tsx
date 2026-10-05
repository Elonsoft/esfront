'use client';

import { RefAttributes } from 'react';

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
export const OverlayScrollbars = ({
  ref,
  color = 'mono-a',
  ...props
}: OverlayScrollbarsComponentProps &
  RefAttributes<OverlayScrollbarsComponentRef> & { color?: 'mono-a' | 'mono-b' | 'white' | 'black' }) => {
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
};
