import { createContext, useContext } from 'react';

import { MetadataJson } from 'libphonenumber-js/core';

export const PhoneFieldContext = createContext<MetadataJson | null>(null);

export const usePhoneFieldContext = () => {
  const value = useContext(PhoneFieldContext);

  if (value === null) {
    throw new Error('No provider for PhoneFieldContext.');
  }

  return value;
};
