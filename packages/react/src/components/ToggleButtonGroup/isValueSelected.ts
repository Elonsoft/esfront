export default function isValueSelected(value: string, candidate: string | string[] | null | undefined) {
  if (Array.isArray(candidate)) {
    return candidate.includes(value);
  }

  return value === candidate;
}
