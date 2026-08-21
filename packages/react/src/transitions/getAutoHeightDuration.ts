/**
 * Calculates a transition duration in milliseconds proportional to the size of the animated element.
 *
 * @param height The size of the element in pixels. Despite the name it works for any dimension.
 */
export const getAutoHeightDuration = (height: number) => {
  if (!height) {
    return 0;
  }

  const constant = height / 36;

  // https://www.desmos.com/calculator/vbrp3ggqet
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
};
