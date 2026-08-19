import { createContext, useContext } from 'react';

import { MetadataJson } from 'libphonenumber-js/core';

export const PhoneFieldContext = createContext<MetadataJson | null>(null);

/**
 * The hook that returns the libphonenumber metadata of the enclosing `PhoneFieldProvider`. Throws when used
 * outside of it.
 */
export const usePhoneFieldContext = () => {
  const value = useContext(PhoneFieldContext);

  if (value === null) {
    throw new Error('No provider for PhoneFieldContext.');
  }

  return value;
};
