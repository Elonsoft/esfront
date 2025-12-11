import { AlertActionsProps } from './AlertActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const AlertActions = (inProps: AlertActionsProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESAlertActions',
  });

  return (
    <div className={clsx(className, 'es-alert-actions')} style={style}>
      {children}
    </div>
  );
};
