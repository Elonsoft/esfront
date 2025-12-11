import { forwardRef } from 'react';

import { TabScrollButtonProps } from './TabScrollButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconChevronLeftLineW400, IconChevronRightLineW400 } from '../../../icons';
import { ButtonBase } from '../../ButtonBase';
import { Divider } from '../../Divider';

export const TabScrollButton = forwardRef<HTMLDivElement, TabScrollButtonProps>(function TabScrollButton(
  inProps: TabScrollButtonProps,
  ref
) {
  const {
    className,
    direction,
    slots = {},
    tabListHeight,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESTabScrollButton' });

  return (
    <ButtonBase
      ref={ref}
      className={clsx(
        'es-tab-scroll-button',
        props.disabled && 'es-tab-scroll-button--disabled',
        `es-tab-scroll-button--direction--${direction}`,
        className
      )}
      component="div"
      style={{ '--es-tab-scroll-button-tab-list-height': `${tabListHeight}px` } as React.CSSProperties}
      {...props}
    >
      {direction === 'left' ? (
        <>
          <span className="es-tab-scroll-button__icon">
            {slots.StartScrollButtonIcon ? (
              slots.StartScrollButtonIcon
            ) : (
              <IconChevronLeftLineW400 style={{ color: 'var(--es-mono-a-a600)' }} />
            )}
          </span>
          <Divider flexItem className="es-tab-scroll-button__divider" orientation="vertical" />
          <div className="es-tab-scroll-button__gradient" />
        </>
      ) : (
        <>
          <div className="es-tab-scroll-button__gradient" />
          <Divider flexItem className="es-tab-scroll-button__divider" orientation="vertical" />
          <span className="es-tab-scroll-button__icon">
            {slots.EndScrollButtonIcon ? (
              slots.EndScrollButtonIcon
            ) : (
              <IconChevronRightLineW400 style={{ color: 'var(--es-mono-a-a600)' }} />
            )}
          </span>
        </>
      )}
    </ButtonBase>
  );
});
