'use client';

import { createContext } from 'react';

import { Components, DefaultPropsProviderProps } from './DefaultPropsProvider.types';

export const DefaultPropsContext = createContext<Components>({});

/**
 * The DefaultPropsProvider supplies the default props that every component below it falls back to. Props passed to a
 * component always win over the ones coming from here.
 */
export const DefaultPropsProvider = ({ children, value }: DefaultPropsProviderProps) => {
  return <DefaultPropsContext.Provider value={value}>{children}</DefaultPropsContext.Provider>;
};
