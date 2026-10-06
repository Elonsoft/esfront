import * as checks from './checks';
import * as upload from './entities.upload';
import * as transforms from './transforms';

/**
 * Namespace of every entities helper. Each one takes the editor as its first argument.
 *
 * Spread rather than listed, so that a helper reaching the namespace is a consequence of exporting it
 * from `checks`, `transforms` or the upload queue rather than a second thing to remember. What the
 * queue needs from the registry and the schema sits in `entities.options` for that reason — exported
 * from here it would read as something an application is meant to call.
 */
export const EntitiesEditor = { ...checks, ...transforms, ...upload };
