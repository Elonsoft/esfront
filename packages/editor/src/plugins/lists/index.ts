// The lists plugin is a fork of `@prezly/slate-lists` (MIT, Copyright (c) 2021 Prezly) and keeps its
// design: the schema registry, the list / list item / list item text structure, and the names of
// most helpers. See NOTICE.md at the root of this package.
//
// The individual checks, transforms and normalization rules stay internal; `ListsEditor` and
// `withListsNormalization` are how they are reached.
export * from './lists';
export * from './lists.constants';
export * from './lists.editor';
export * from './lists.handlers';
export * from './lists.types';
export { withListsNormalization } from './normalizations';
export * from './utils';
