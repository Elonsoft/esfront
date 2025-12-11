import { DialogContentProps } from './DialogContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const DialogContent = (inProps: DialogContentProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESDialogContent',
  });

  return (
    <div className={clsx('es-dialog-content', className)} style={style}>
      {children}
    </div>
  );
};
