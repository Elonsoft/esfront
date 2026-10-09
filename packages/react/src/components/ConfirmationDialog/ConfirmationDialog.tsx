'use client';

import { RefAttributes, useState } from 'react';

import { ConfirmationDialogProps } from './ConfirmationDialog.types';

import clsx from 'clsx';

import { IconAlertFillW500, IconCloseLineW500, IconInformation2FillW500 } from '../../icons';
import { useDefaultProps } from '../../theming';
import { Button, ButtonOwnProps } from '../Button';
import { Dialog, DialogActions, DialogClose, DialogContent, DialogTitle } from '../Dialog';
import { LoadingButton } from '../LoadingButton';

const defaultIconMapping: Record<string, React.ReactNode> = {
  error: <IconAlertFillW500 />,
  primary: <IconInformation2FillW500 />,
};

/**
 * ConfirmationDialog asks the user to approve an operation before it is performed.
 */
export const ConfirmationDialog = ({ ref, ...inProps }: ConfirmationDialogProps & RefAttributes<HTMLDivElement>) => {
  const {
    children,
    className,
    severity = 'error',
    title,
    icon,
    iconClose = <IconCloseLineW500 />,
    iconMapping = defaultIconMapping,
    labelConfirm,
    labelCancel,
    labelClose,
    labelEscapeKey,
    disabled = false,
    action,
    close,
    fullWidth = true,
    maxWidth = '480px',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESConfirmationDialog',
  });

  const [loading, setLoading] = useState(false);

  const onClose = () => {
    if (!loading) {
      close();
    }
  };

  const onConfirm = () => {
    setLoading(true);

    action()
      .then((data) => {
        close(data);
      })
      .catch((error: unknown) => {
        setLoading(false);
        return Promise.reject(error);
      });
  };

  return (
    <Dialog
      ref={ref}
      before={<DialogClose label={labelClose} labelEscapeKey={labelEscapeKey} onClick={onClose} />}
      className={clsx('es-confirmation-dialog', `es-confirmation-dialog--severity--${severity}`, className)}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={onClose}
      {...props}
    >
      <Button aria-label={labelClose} className="es-confirmation-dialog__close" color="tertiary" onClick={onClose}>
        {iconClose}
      </Button>
      <DialogTitle align="center" icon={icon === false ? undefined : icon || iconMapping[severity]}>
        {title}
      </DialogTitle>
      <DialogContent className="body200">{children}</DialogContent>
      <DialogActions fullWidth>
        <Button color="tertiary" size="500" variant="outlined" onClick={onClose}>
          {labelCancel}
        </Button>
        {!!labelConfirm && (
          <LoadingButton
            color={severity as ButtonOwnProps['color']}
            disabled={disabled}
            loading={loading}
            size="500"
            variant="contained"
            onClick={onConfirm}
          >
            {labelConfirm}
          </LoadingButton>
        )}
      </DialogActions>
    </Dialog>
  );
};
