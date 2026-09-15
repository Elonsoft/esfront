'use client';

import { RefObject, useCallback, useContext, useEffect } from 'react';

import { useForkRef, useId } from '../../hooks';
import { setRef } from '../../utils';
import { FormFieldContext } from '../FormField';

export interface UseDateInputFormFieldParams {
  ref: RefObject<HTMLDivElement | null>;
  id?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

/**
 * @internal
 * Plugs the input into the form field it is rendered in, if there is one. The state the field provides only applies
 * where the input has not been given a value of its own.
 */
export const useDateInputFormField = ({
  ref,
  id: idProp,
  ariaLabel,
  ariaLabelledby: ariaLabelledbyProp,
  disabled: disabledProp,
  required: requiredProp,
  error: errorProp,
}: UseDateInputFormFieldParams) => {
  // Read directly rather than through `useFormFieldContext`, which throws when there is no provider.
  const formField = useContext(FormFieldContext);

  const id = useId(idProp ?? formField?.id);

  // The field focuses whatever sits in the context ref when its padding is clicked, so the control registers itself.
  const setControl = useCallback(
    (node: HTMLDivElement | null) => {
      setRef(formField?.inputRef, node);
    },
    [formField?.inputRef]
  );
  const handleRef = useForkRef(ref, setControl);

  // Every field of the date shows a placeholder at all times, so the label has to stay out of the way even while
  // nothing is entered.
  useEffect(() => {
    formField?.onFilled();
  }, [formField?.onFilled]);

  const notifyFocus = () => {
    formField?.onFocus();
  };

  const notifyBlur = () => {
    formField?.onBlur();
  };

  return {
    id,
    ariaLabelledby: ariaLabelledbyProp ?? (formField && !ariaLabel ? `${formField.id}-label` : undefined),
    disabled: disabledProp ?? formField?.disabled ?? false,
    required: requiredProp ?? formField?.required ?? false,
    error: errorProp ?? formField?.error ?? false,
    handleRef,
    notifyFocus,
    notifyBlur,
  };
};
