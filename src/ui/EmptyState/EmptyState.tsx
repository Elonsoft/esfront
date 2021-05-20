import React from 'react';

import { useStyles } from './EmptyState.styles';
import { IEmptyState } from './EmptyState.types';

import Typography from '@material-ui/core/Typography';

export const EmptyState: React.FC<IEmptyState> = ({ children, heading, subheading }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {!!heading && <Typography variant="body400">{heading}</Typography>}
      {!!subheading && <Typography variant="body300">{subheading}</Typography>}
      <div>{children}</div>
    </div>
  );
};
