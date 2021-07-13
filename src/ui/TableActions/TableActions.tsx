import { FC } from 'react';

import clsx from 'clsx';
import { useStyles } from './TableActions.styles';

import { TableActionsProps } from './TableActions.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Typography from '@material-ui/core/Typography';

export const TableActions: FC<TableActionsProps> = (inProps) => {
  const { classes, className, label, count, children } = useThemeProps({
    props: inProps,
    name: 'ESTableActions'
  });
  const styles = useStyles({ classes });

  return (
    <div className={clsx(styles.root, className)}>
      <Typography className={styles.text} variant="body200">
        {label} {count}
      </Typography>
      <div className={styles.children}>{children}</div>
    </div>
  );
};
