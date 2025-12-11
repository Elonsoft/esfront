import { useRef, useState } from 'react';

import { ChipsProps } from './Chips.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useBoolean, useResizeObserver } from '../../hooks';
import { IconChevronDownLineW200, IconChevronUpLineW200 } from '../../icons';
import { Button } from '../Button';

export const Chips = (inProps: ChipsProps) => {
  const {
    children,

    className,
    style,

    maxLines: inMaxLines = 1,

    labelHide,
    labelShow,

    iconHide = <IconChevronUpLineW200 container containerSize="16px" />,
    iconShow = <IconChevronDownLineW200 container containerSize="16px" />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESChips',
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const [open, toggleOpen] = useBoolean(false);

  const [isCollapsed, setCollapsed] = useState(false);
  const [hiddenCount, setHiddenCount] = useState(0);

  const maxLines = inMaxLines < 1 ? 1 : inMaxLines;

  const onResize = () => {
    if (!ref.current) {
      return;
    }

    const chips = ref.current.querySelectorAll('.es-chip');
    chips.forEach((chip) => (chip as HTMLElement).style.removeProperty('display'));

    if (!open) {
      let lineCount = 1;
      let hiddenCount = 0;
      let totalWidth = 0;

      const containerWidth = ref.current.getBoundingClientRect().width;
      const columnGap = parseInt(window.getComputedStyle(ref.current).columnGap);

      const button = ref.current.querySelector('.es-chips__button') as HTMLButtonElement;
      const buttonWidth = button.getBoundingClientRect().width;

      setCollapsed(false);

      chips.forEach((chip) => {
        const chipWidth = chip.getBoundingClientRect().width;

        if (
          totalWidth + columnGap + chipWidth + (lineCount >= maxLines ? columnGap + buttonWidth : 0) >=
          containerWidth
        ) {
          lineCount += 1;
          totalWidth = chipWidth;
        } else {
          totalWidth += chipWidth + columnGap;
        }

        if (lineCount > maxLines) {
          setCollapsed(true);
          (chip as HTMLElement).style.display = 'none';
          hiddenCount += 1;
        }
      });

      setHiddenCount(hiddenCount);
    }
  };

  useResizeObserver(ref, onResize);

  useEnhancedEffect(() => {
    onResize();
  }, [open]);

  return (
    <div ref={ref} className={clsx('es-chips', className)} style={style}>
      {children}
      <Button
        key={`${open}`}
        aria-label={open ? undefined : labelShow}
        className="es-chips__button"
        color="mono-a"
        endIcon={open ? iconHide : iconShow}
        size="300"
        style={{ display: isCollapsed ? 'flex' : 'none' }}
        onClick={toggleOpen}
      >
        {open ? labelHide : `+${hiddenCount}`}
      </Button>
    </div>
  );
};
