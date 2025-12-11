import { DialogTitleProps } from './DialogTitle.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useStuckSentinel } from '../../../hooks';

export const DialogTitle = (inProps: DialogTitleProps) => {
  const { className, style, sticky, children } = useDefaultProps({
    props: inProps,
    name: 'ESDialogTitle',
  });

  const { stuck, sentinel } = useStuckSentinel();

  return (
    <>
      {sentinel}
      <div
        className={clsx(
          'es-dialog-title',
          sticky && 'es-dialog-title--sticky',
          stuck && 'es-dialog-title--stuck',
          'h4',
          className
        )}
        style={style}
      >
        {children}
      </div>
    </>
  );
};
