import { CountryCode, getCountryCallingCode, MetadataJson, validatePhoneNumberLength } from 'libphonenumber-js/core';

export interface PhoneFieldPatch {
  selectionStart: number;
  selectionEnd: number;
  value: string;
  countryCode: CountryCode | null;
  data: string | null;
  metadata: MetadataJson;
}

const isNumber = (char: string) => {
  return char >= '0' && char <= '9';
};

export const deleteSelection = (
  { selectionStart, selectionEnd, value, data, ...rest }: PhoneFieldPatch,
  start: number | null
): PhoneFieldPatch => {
  const newSelectionStart = Math.max(1, (start || 0) + 1, selectionStart);
  const newSelectionEnd = Math.max(1, selectionEnd);
  const newValue = value.substring(0, newSelectionStart) + value.substring(newSelectionEnd);

  return {
    selectionStart: newSelectionStart,
    selectionEnd: newSelectionStart,
    value: newValue,
    data,
    ...rest,
  };
};

export const deleteContentBackward = (
  { selectionStart, selectionEnd, countryCode, value, data, metadata }: PhoneFieldPatch,
  start: number | null
): PhoneFieldPatch => {
  let index = selectionStart - 1;

  while (index > -1 && !isNumber(value[index])) {
    index--;
  }

  if (index > -1 && (!start || index > start)) {
    const newValue = value.substring(0, index) + value.substring(index + 1);

    return {
      selectionStart: index,
      selectionEnd: index,
      countryCode,
      value: newValue,
      data,
      metadata,
    };
  }

  return {
    selectionStart,
    selectionEnd,
    countryCode,
    value,
    data,
    metadata,
  };
};

export const insertText = ({
  selectionStart,
  selectionEnd,
  countryCode,
  value,
  data,
  metadata,
}: PhoneFieldPatch): PhoneFieldPatch => {
  const newSelectionStart = Math.max(1, selectionStart);
  const newSelectionEnd = Math.max(1, selectionEnd);
  let newValue = value.substring(0, newSelectionStart) + (data || '')[0] + value.substring(newSelectionEnd);

  const lengthResult = validatePhoneNumberLength(newValue, metadata);

  if (lengthResult === 'TOO_LONG') {
    newValue = value;
  }

  return {
    selectionStart: newSelectionStart + 1,
    selectionEnd: newSelectionStart + 1,
    countryCode,
    value: newValue,
    data,
    metadata,
  };
};

export const insertFromPaste = ({ countryCode, data, metadata }: PhoneFieldPatch): PhoneFieldPatch => {
  const paste = (data || '').replace(/[^0-9]/g, '');

  let newValue = '';

  if ((data || '').startsWith('+')) {
    newValue = `+${paste}`;
  } else {
    if (countryCode) {
      newValue = getCountryCallingCode(countryCode, metadata) || '';
    }

    if (paste.startsWith(newValue)) {
      newValue = `+${paste}`;
    } else {
      newValue = `+${newValue}${paste}`;
    }
  }

  let lengthResult = validatePhoneNumberLength(newValue, metadata);

  while (lengthResult === 'TOO_LONG' && newValue.length > 1) {
    newValue = newValue.substring(0, newValue.length - 1);
    lengthResult = validatePhoneNumberLength(newValue, metadata);
  }

  const newSelection = newValue.length + 1;

  return {
    selectionStart: newSelection,
    selectionEnd: newSelection,
    countryCode,
    value: newValue,
    data,
    metadata,
  };
};

export const adjustSelection = (
  { selectionStart, countryCode, value, data, metadata }: PhoneFieldPatch,
  formatted: string
): PhoneFieldPatch => {
  let digits = 0;

  for (let i = 0; i < selectionStart; i++) {
    if (isNumber(value[i])) {
      digits++;
    }
  }

  let index = 0;

  for (let i = 0; i < formatted.length && digits > 0; i++) {
    if (isNumber(formatted[i])) {
      digits--;
      index = i + 1;
    }
  }

  return {
    selectionStart: Math.max(1, index),
    selectionEnd: Math.max(1, index),
    countryCode,
    value: formatted,
    data,
    metadata,
  };
};
