import React from 'react';

import clsx from 'clsx';
import { useStyles } from './EmptyState.styles';

import { ESEmptyStateProps } from './EmptyState.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Typography from '@material-ui/core/Typography';

export const EmptyState: React.FC<ESEmptyStateProps> = (inProps) => {
  const styles = useStyles();
  const { children, classes, className, icon, heading, subheading } = useThemeProps({
    props: inProps,
    name: 'ESEmptyState'
  });

  return (
    <div className={clsx(styles.root, classes?.root, className)}>
      {!!icon && (
        <div className={clsx(styles.icon, classes?.icon)} data-testid="icon">
          {icon}
        </div>
      )}
      <div className={clsx(styles.text, classes?.text)}>
        {!!heading && (
          <Typography className={clsx(styles.heading, classes?.heading)} component="div" variant="body200">
            {heading}
          </Typography>
        )}
        {!!subheading && (
          <Typography className={clsx(styles.subheading, classes?.subheading)} component="div" variant="caption">
            {subheading}
          </Typography>
        )}
      </div>
      {children}
    </div>
  );
};
