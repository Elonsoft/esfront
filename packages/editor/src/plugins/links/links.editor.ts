import * as checks from './checks';
import * as transforms from './transforms';

/**
 * Namespace of every links helper. Each one takes the editor as its first argument.
 */
export const LinksEditor = { ...checks, ...transforms };
