import { DialogActionsProps } from './DialogActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useStuckSentinel } from '../../../hooks';

export const DialogActions = (inProps: DialogActionsProps) => {
  const { className, style, sticky, children } = useDefaultProps({
    props: inProps,
    name: 'ESDialogActions',
  });

  const { stuck, sentinel } = useStuckSentinel();

  return (
    <>
      <div
        className={clsx(
          'es-dialog-actions',
          sticky && 'es-dialog-actions--sticky',
          stuck && 'es-dialog-actions--stuck',
          className
        )}
        style={style}
      >
        {children}
      </div>
      {sentinel}
    </>
  );
};
