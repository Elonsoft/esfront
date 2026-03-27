import { forwardRef, useRef } from 'react';

import { FormFieldAdornmentProps } from './FormFieldAdornment.types';

import clsx from 'clsx';

import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useForkRef } from '../../../hooks';
import { useFormFieldContext } from '../FormField.context';

let resizeObserver: ResizeObserver | null = null;

const getResizeObserver = () => {
  if (!resizeObserver) {
    resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const parent = target.closest('.es-form-field') as HTMLElement | null;

        if (parent) {
          parent.style.setProperty('--es-form-field-adornment-width', `${target.clientWidth}px`);
        }
      });
    });
  }

  return resizeObserver;
};

export const FormFieldAdornment = forwardRef<HTMLDivElement, FormFieldAdornmentProps>(function FormFieldAdornment(
  { children, className, style, position },
  ref
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { variant, size, disabled, setAdornedStart } = useFormFieldContext();

  useEnhancedEffect(() => {
    if (position === 'start' && innerRef.current) {
      const observer = getResizeObserver();
      const element = innerRef.current;

      setAdornedStart(true);
      observer.observe(element, { box: 'border-box' });

      return () => {
        setAdornedStart(false);
        observer.unobserve(element);

        const parent = element.closest('.es-form-field') as HTMLElement | null;

        if (parent) {
          parent.style.removeProperty('--es-form-field-adornment-width');
        }
      };
    }
  }, [position]);

  return (
    <div
      ref={handleRef}
      className={clsx(
        className,
        'es-form-field-adornment',
        `es-form-field-adornment--position--${position}`,
        `es-form-field-adornment--variant--${variant}`,
        `es-form-field-adornment--size--${size}`,
        disabled && 'es-form-field-adornment--disabled'
      )}
      style={style}
    >
      {children}
    </div>
  );
});
