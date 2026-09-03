'use client';

import * as React from 'react';

import { RadioGroupProps } from './RadioGroup.types';

import clsx from 'clsx';

import RadioGroupContext from './RadioGroup.context';

import { useControlled, useForkRef, useId } from '../../hooks';
import { useDefaultProps } from '../../theming';

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  inProps: RadioGroupProps,
  ref
) {
  const {
    children,
    className,
    defaultValue,
    name: nameProp,
    onChange,
    row = false,
    value: valueProp,
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESRadioGroup',
  });

  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const [value, setValueState] = useControlled(defaultValue, valueProp);

  const handleRef = useForkRef(ref, rootRef);

  const name = useId(nameProp);

  const contextValue = React.useMemo(
    () => ({
      name,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValueState(event.target.value);

        if (onChange) {
          onChange(event, event.target.value);
        }
      },
      value,
    }),
    [name, onChange, setValueState, value]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        ref={handleRef}
        className={clsx(className, 'es-radio-group', row && 'es-radio-group--row')}
        role="radiogroup"
        {...other}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
});
