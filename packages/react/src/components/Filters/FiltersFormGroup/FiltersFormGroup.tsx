import { Children, useRef, useState } from 'react';

import { FiltersFormGroupProps } from './FiltersFormGroup.types';

import clsx from 'clsx';
import { getFiltersFormGroupUtilityClass } from './FiltersFormGroup.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { outlinedInputClasses } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

import { useBoolean, useResizeObserver } from '../../../hooks';
import { Link } from '../../Link';
import { searchClasses } from '../../Search';

type FiltersFormGroupOwnerState = {
  classes?: FiltersFormGroupProps['classes'];
  isScrollable?: boolean;
  isBeforeScroll?: boolean;
  isAfterScroll?: boolean;
};

const useUtilityClasses = (ownerState: FiltersFormGroupOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    header: ['header'],
    footer: ['footer'],
  };

  return composeClasses(slots, getFiltersFormGroupUtilityClass, classes);
};

const FiltersFormGroupRoot = styled('div', {
  name: 'ESFiltersFormGroup',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => ({}));

const FiltersFormGroupContent = styled('div', {
  name: 'ESFiltersFormGroup',
  slot: 'Content',
  overridesResolver: (_props, styles) => styles.content,
})<{ ownerState: FiltersFormGroupOwnerState }>(({ theme }) => ({
  ...theme.scrollbars.overlayMonoA,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8px',
  alignItems: 'flex-start',
  maxHeight: '288px',

  variants: [
    {
      props: {
        isScrollable: true,
        isBeforeScroll: true,
        isAfterScroll: true,
      },
      style: {
        mask: 'linear-gradient(to bottom, transparent 0, black 40px) top, linear-gradient(to bottom, black calc(100% - 40px), transparent 100%) bottom',
        maskSize: '100% 51%',
        maskRepeat: 'no-repeat',
      },
    },
    {
      props: {
        isScrollable: true,
        isBeforeScroll: true,
        isAfterScroll: false,
      },
      style: {
        mask: 'linear-gradient(to bottom, transparent 0, black 40px) top, none',
        maskSize: '100% auto',
        maskRepeat: 'no-repeat',
      },
    },
    {
      props: {
        isScrollable: true,
        isBeforeScroll: false,
        isAfterScroll: true,
      },
      style: {
        mask: 'none, linear-gradient(to bottom, black calc(100% - 40px), transparent 100%) bottom',
        maskSize: 'auto 100%',
        maskRepeat: 'no-repeat',
      },
    },
  ],
}));

const FiltersFormGroupHeader = styled('div', {
  name: 'ESFiltersFormGroup',
  slot: 'Header',
  overridesResolver: (_props, styles) => styles.header,
})(({ theme }) => ({
  padding: '4px 8px 8px',

  [`& .${searchClasses.root}`]: {
    [`& .${outlinedInputClasses.root}`]: {
      backgroundColor: 'transparent',
    },

    [`& .${outlinedInputClasses.notchedOutline}`]: {
      border: `1px solid ${theme.vars.palette.monoA.A100}`,
    },
  },
}));

const FiltersFormGroupFooter = styled('div', {
  name: 'ESFiltersFormGroup',
  slot: 'Footer',
  overridesResolver: (_props, styles) => styles.footer,
})(() => ({
  display: 'flex',
  padding: '6px 8px',
}));

export const FiltersFormGroup = (inProps: FiltersFormGroupProps) => {
  const { children, header, className, sx, maxLines, labelShow, labelHide, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersFormGroup',
  });

  const [open, toggleOpen] = useBoolean(false);

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setScrollable(ref.current?.scrollHeight > ref.current?.clientHeight);
    }
  });

  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      setBeforeScroll(scrollTop > 0);
      setAfterScroll(!(scrollTop >= scrollHeight - clientHeight));
    }
  };

  const ownerState = { isScrollable, isBeforeScroll, isAfterScroll, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersFormGroupRoot className={clsx(classes.root, className)} sx={sx}>
      {!!header && <FiltersFormGroupHeader className={classes.header}>{header}</FiltersFormGroupHeader>}
      <FiltersFormGroupContent ref={ref} className={classes.content} ownerState={ownerState} onScroll={onScroll}>
        {!!maxLines && !open ? Children.toArray(children).slice(0, maxLines) : children}
      </FiltersFormGroupContent>
      {!!maxLines && Children.count(children) > maxLines && (
        <FiltersFormGroupFooter className={classes.footer}>
          <Link
            color="monoA.A600"
            component="button"
            type="button"
            underline="none"
            variant="caption"
            onClick={toggleOpen}
          >
            {open ? labelHide : labelShow}
          </Link>
        </FiltersFormGroupFooter>
      )}
    </FiltersFormGroupRoot>
  );
};
