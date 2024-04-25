import React from 'react';

import { SearchHighlightProps } from './SearchHighlight.types';

import clsx from 'clsx';
import { getSearchHighlightUtilityClass } from './SearchHighlight.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { useFocusBox } from '../../hooks';
import { Highligh } from '../Highligh';

type SearchHighlightOwnerState = {
  classes?: SearchHighlightProps['classes'];
};

const useUtilityClasses = (ownerState: SearchHighlightOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSearchHighlightUtilityClass, classes);
};

/**
 * The SearchHighlight displays information and actions relating to the current screen.
 */
export const SearchHighlight = (inProps: SearchHighlightProps) => {
  const { className, text, searchText, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSearchHighlight'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const highlightedParts = useFocusBox(text || '', searchText || '');

  return (
    <Box className={clsx(className, classes.root)}>
      <Typography component="span" sx={{ display: 'inline' }}>
        {highlightedParts.map(({ text, highlighted }, index) => (
          <React.Fragment key={index}>{highlighted ? <Highligh>{text}</Highligh> : text}</React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};
