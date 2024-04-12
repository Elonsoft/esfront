import { useRef } from 'react';

import { HighlighProps } from './Highligh.types';

import clsx from 'clsx';
import { getHighlighUtilityClass } from './Highligh.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type HighlighOwnerState = {
  classes?: HighlighProps['classes'];
};

const useUtilityClasses = (ownerState: HighlighOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getHighlighUtilityClass, classes);
};

const HighlighRoot = styled('span', {
  name: 'ESHighlight',
  slot: 'Root'
})(({ theme }) => ({
  backgroundColor: theme.palette.warning.A300,
  borderRadius: '4px',
  padding: '2px'
}));

/**
 * The Highligh displays information and actions relating to the current screen.
 */
export const Highligh = (inProps: HighlighProps) => {
  const { className, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESHighlight'
  });

  const ref = useRef<HTMLSpanElement | null>(null);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <HighlighRoot ref={ref} className={clsx(className, classes.root)}>
      {children}
    </HighlighRoot>
  );
};
