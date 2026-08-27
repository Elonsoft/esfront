/**
 * Adds the keys of `defaultProps` that are missing from `props`.
 *
 * The `slots` and `slotProps` keys are merged one level deep instead of being replaced as a whole, so that a default
 * for a single slot does not discard the props the component passes to the remaining slots.
 */
export const resolveProps = <Props extends object>(defaultProps: Partial<Props>, props: Props): Props => {
  const output = { ...props } as Record<string, unknown>;

  for (const key in defaultProps) {
    if (!Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      continue;
    }

    const defaultValue = defaultProps[key];

    if (key === 'slots') {
      output[key] = { ...(defaultValue as object), ...(output[key] as object) };
    } else if (key === 'slotProps') {
      const defaultSlotProps = defaultValue as Record<string, object> | undefined;
      const slotProps = output[key] as Record<string, object> | undefined;

      if (slotProps && defaultSlotProps) {
        const merged: Record<string, object> = { ...slotProps };

        for (const slotKey in defaultSlotProps) {
          if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
            merged[slotKey] = resolveProps(defaultSlotProps[slotKey], slotProps[slotKey] ?? {});
          }
        }

        output[key] = merged;
      } else {
        output[key] = slotProps || defaultSlotProps || {};
      }
    } else if (output[key] === undefined) {
      output[key] = defaultValue;
    }
  }

  return output as Props;
};
