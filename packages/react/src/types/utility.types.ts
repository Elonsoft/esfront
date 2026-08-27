/** Removes the properties `K` from `T`, distributing over union types instead of collapsing them. */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/** Like `T & U`, but the property types of `U` win wherever the two overlap. */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<{ [Key in keyof T]: true extends T[Key] ? Key : never }[keyof T], string>;

/**
 * Builds a union of string literals from the default record `T` and the override record `U`. A property of `U` set to
 * `true` is added to the union, and one set to `false` is removed from it, which is how a component lets consumers
 * extend or narrow the values a prop accepts.
 */
export type OverridableStringUnion<T extends string | number, U = object> = GenerateStringUnion<
  Overwrite<Record<T, true>, U>
>;
