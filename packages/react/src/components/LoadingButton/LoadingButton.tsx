import { forwardRef } from 'react';

import { LoadingButtonTypeMap } from './LoadingButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { unstable_useId as useId } from '@mui/utils';

import { Button, ButtonOwnProps, ExtendButton } from '../Button';
import { SpinnerFadingDots } from '../Spinner';

export const getLoadingButtonSpinnerSize = (size: ButtonOwnProps['size']) => {
  switch (size) {
    case '100':
      return 10;
    case '200':
      return 12;
    case '300':
    case '400':
      return 16;
    default:
      return 24;
  }
};

/** LoadingButton shows loading state and disables interactions. */
export const LoadingButton = forwardRef(function LoadingButton(inProps, ref) {
  const {
    children,
    id: inId,
    disabled = false,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESLoadingButton' });

  const id = useId(inId);
  const loadingIndicator = loadingIndicatorProp ?? (
    <SpinnerFadingDots aria-labelledby={id} size={getLoadingButtonSpinnerSize(props.size)} />
  );

  const loadingButtonLoadingIndicator = loading ? (
    <span className="es-loading-button__loading-indicator">{loadingIndicator}</span>
  ) : null;

  return (
    <Button
      ref={ref}
      disabled={disabled || loading}
      id={id}
      {...props}
      className={clsx('es-loading-button', loading && 'es-loading-button--loading', props.className)}
    >
      {children}
      {loadingButtonLoadingIndicator}
    </Button>
  );
}) as ExtendButton<LoadingButtonTypeMap>;
