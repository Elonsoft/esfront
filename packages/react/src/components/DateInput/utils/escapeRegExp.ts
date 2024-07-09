const RESERVED_REGEXP_CHARACTERS = /[.*+?^${}()|[\]\\]/g;

export const escapeRegExp = (value: string) => {
  return value.replace(RESERVED_REGEXP_CHARACTERS, '\\$&');
};
