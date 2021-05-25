import React from 'react';

import clsx from 'clsx';
import { useStyles } from './EmptyState.styles';

import { ESEmptyStateProps } from './EmptyState.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Typography from '@material-ui/core/Typography';

export const EmptyState: React.FC<ESEmptyStateProps> = (inProps) => {
  const styles = useStyles();
  const { classes, className, children, heading, subheading, labelImage } = useThemeProps({
    props: inProps,
    name: 'ESEmptyState'
  });

  return (
    <div className={clsx(styles.root, classes?.root, className)}>
      <div>{labelImage}</div>
      {!!heading && (
        <Typography className={clsx(styles.heading, classes?.heading)} component="div" variant="body400">
          {heading}
        </Typography>
      )}
      {!!subheading && (
        <Typography component="div" variant="body300">
          {subheading}
        </Typography>
      )}
      <div>{children}</div>
    </div>
  );
};
