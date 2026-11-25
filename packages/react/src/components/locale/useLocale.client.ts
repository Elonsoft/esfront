'use client';

import { useContext } from 'react';

import { LocaleContext } from './LocaleContext';

export const useLocale = () => useContext(LocaleContext);
