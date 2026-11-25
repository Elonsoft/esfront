'use client';

import { createContext } from 'react';

import { DEFAULT_LOCALE, getLocaleData } from './registry';
import type { LocaleData } from './types';

export const LocaleContext = createContext<LocaleData>(getLocaleData(DEFAULT_LOCALE));
