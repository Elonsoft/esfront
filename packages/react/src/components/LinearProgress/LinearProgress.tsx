import { forwardRef } from 'react';

import { LinearProgressProps } from './LinearProgress.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/** Express an unspecified wait time or display the length of a process. */
export const LinearProgress = forwardRef<HTMLButtonElement, LinearProgressProps>(function LinearProgress(
  inProps: LinearProgressProps,
  ref
) {
  const props = useDefaultProps({ props: inProps, name: 'ESLinearProgress' });

  const { className, width = 4, color = 'primary', value, valueBuffer, variant = 'indeterminate', ...other } = props;

  const rootProps = {};
  const inlineStyles = { bar1: {}, bar2: {}, dashed: {} };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      if (value <= 100) {
        const transform = value - 100;
        inlineStyles.bar1 = { transform: `translateX(${transform}%)` };
      }
    }

    if (valueBuffer !== undefined) {
      if (valueBuffer <= 100) {
        const transform = (valueBuffer || 0) - 100;
        inlineStyles.bar2 = { transform: `translateX(${transform}%)` };
      }
    }
  }

  if (variant === 'buffer') {
    if (value !== undefined) {
      const transform = value;
      inlineStyles.dashed = { transform: `translateX(${transform}%)` };
    }

    if (valueBuffer !== undefined) {
      const transform = valueBuffer;
      inlineStyles.dashed = { transform: `translateX(${transform}%)` };
    }
  }

  return (
    <span
      className={clsx(
        'es-linear-progress',
        `es-linear-progress--color--${color}`,
        `es-linear-progress--variant--${variant}`,
        className
      )}
      role="progressbar"
      style={
        {
          '--es-linear-progress-width': `${width}px`,
        } as React.CSSProperties
      }
      {...rootProps}
      ref={ref}
      {...other}
    >
      {variant === 'buffer' ? (
        <span
          className={clsx('es-linear-progress__dashed', `es-linear-progress__dashed--color--${color}`)}
          style={inlineStyles.dashed}
        />
      ) : null}
      <span
        className={clsx(
          'es-linear-progress__bar1',
          `es-linear-progress__bar1--color--${color}`,
          `es-linear-progress__bar1--variant--${variant}`
        )}
        style={inlineStyles.bar1}
      />
      {valueBuffer && (
        <span
          className={clsx(
            'es-linear-progress__bar2',
            `es-linear-progress__bar2--color--${color}`,
            `es-linear-progress__bar2--variant--${variant}`
          )}
          style={inlineStyles.bar2}
        />
      )}
    </span>
  );
});
