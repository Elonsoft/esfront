import * as checks from './checks';
import * as transforms from './transforms';

/**
 * Namespace of every base helper. Each one takes the editor as its first argument.
 *
 * Spread rather than listed, so that a helper reaching the namespace is a consequence of exporting it
 * from `checks` or `transforms` rather than a second thing to remember.
 */
export const BaseEditor = { ...checks, ...transforms };
