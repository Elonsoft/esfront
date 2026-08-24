/** Chains functions into a single one, skipping the nullish ones. */
export const createChainedFunction = <Args extends unknown[], This>(
  ...funcs: Array<((this: This, ...args: Args) => unknown) | null | undefined>
): ((this: This, ...args: Args) => void) => {
  return funcs.reduce<(this: This, ...args: Args) => void>(
    (acc, func) => {
      if (func === null || func === undefined) {
        return acc;
      }

      return function chainedFunction(this: This, ...args: Args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {}
  );
};
