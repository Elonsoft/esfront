import { useRef, useState } from 'react';

import { ChipsProps } from './Chips.types';

import clsx from 'clsx';
import { chipsClasses, getChipsUtilityClass } from './Chips.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import composeClasses from '@mui/utils/composeClasses';

import { useBoolean, useResizeObserver } from '../../hooks';
import { IconChevronDownW200, IconChevronUpW200 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { chipClasses } from '../Chip';

type ChipsOwnerState = {
  classes?: ChipsProps['classes'];
};

const useUtilityClasses = (ownerState: ChipsOwnerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ['root'],
    button: ['button'],
  };
  return composeClasses(slots, getChipsUtilityClass, classes);
};

const ChipsRoot = styled('div', {
  name: 'ESChips',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  position: 'relative',
});

const ChipsButton = styled(Button, {
  name: 'ESChips',
  slot: 'Button',
  overridesResolver: (_props, styles) => styles.button,
})(({ theme }) => ({
  borderRadius: '1000px',

  [`&.${buttonClasses.size300}.${buttonClasses.variantText}`]: {
    '--text': theme.vars.palette.monoA.A550,
    '--icon': theme.vars.palette.monoA.A500,

    [`.${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.caption,
    },
  },
}));

export const Chips = (inProps: ChipsProps) => {
  const {
    className,
    classes: inClasses,
    children,
    sx,
    maxLines: inMaxLines = 1,

    labelHide,
    labelShow,

    iconHide = <IconChevronUpW200 container containerSize="16px" />,
    iconShow = <IconChevronDownW200 container containerSize="16px" />,

    ...props
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

    const chips = ref.current.querySelectorAll(`.${chipClasses.root}`);
    chips.forEach((chip) => (chip as HTMLElement).style.removeProperty('display'));

    if (!open) {
      let lineCount = 1;
      let hiddenCount = 0;
      let totalWidth = 0;

      const containerWidth = ref.current.getBoundingClientRect().width;
      const columnGap = parseInt(window.getComputedStyle(ref.current).columnGap);

      const button = ref.current.querySelector(`.${chipsClasses.button}`) as HTMLButtonElement;
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

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  useResizeObserver(ref, onResize);

  useEnhancedEffect(() => {
    onResize();
  }, [open]);

  return (
    <ChipsRoot ref={ref} className={clsx(classes.root, className)} sx={sx} {...props}>
      {children}
      <ChipsButton
        key={`${open}`}
        aria-label={open ? undefined : labelShow}
        className={classes.button}
        color="monoA"
        endIcon={open ? iconHide : iconShow}
        size="300"
        style={{ display: isCollapsed ? 'flex' : 'none' }}
        onClick={toggleOpen}
      >
        {open ? labelHide : `+${hiddenCount}`}
      </ChipsButton>
    </ChipsRoot>
  );
};
