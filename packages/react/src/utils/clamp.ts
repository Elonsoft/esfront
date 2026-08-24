/** Clamps a value between the given bounds. */
export const clamp = (
  value: number,
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number => {
  return Math.max(min, Math.min(value, max));
};
