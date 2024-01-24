import { ReactNode } from 'react';

import { PhoneFieldContext } from './PhoneField.context';

import { MetadataJson } from 'libphonenumber-js/core';

export const PhoneFieldProvider = ({ children, metadata }: { children?: ReactNode; metadata: MetadataJson }) => {
  return <PhoneFieldContext.Provider value={metadata}>{children}</PhoneFieldContext.Provider>;
};
