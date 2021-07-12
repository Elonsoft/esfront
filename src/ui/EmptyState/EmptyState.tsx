import clsx from 'clsx';
import { useStyles } from './EmptyState.styles';

import { EmptyStateProps } from './EmptyState.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';
import Typography from '@material-ui/core/Typography';

export const EmptyState: React.FC<EmptyStateProps> = (inProps) => {
  const { children, classes, className, icon, heading, subheading } = useThemeProps({
    props: inProps,
    name: 'ESEmptyState'
  });
  const styles = useStyles({ classes });

  return (
    <div className={clsx(styles.root, className)}>
      {!!icon && (
        <div className={styles.icon} data-testid="icon">
          {icon}
        </div>
      )}
      <div className={styles.text}>
        {!!heading && (
          <Typography className={styles.heading} component="div" variant="body200">
            {heading}
          </Typography>
        )}
        {!!subheading && (
          <Typography className={styles.subheading} component="div" variant="caption">
            {subheading}
          </Typography>
        )}
      </div>
      {children}
    </div>
  );
};
