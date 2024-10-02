export interface PhoneFieldPatch {
  selectionStart: number;
  selectionEnd: number;
  value: string;
  data: string | null;
}

const isNumber = (char: string) => {
  return char >= '0' && char <= '9';
};

export const deleteSelection = ({ selectionStart, selectionEnd, value, data }: PhoneFieldPatch): PhoneFieldPatch => {
  const newValue = value.substring(0, selectionStart) + value.substring(selectionEnd);

  return {
    selectionStart,
    selectionEnd: selectionStart,
    value: newValue,
    data,
  };
};

export const deleteContentBackward = ({
  selectionStart,
  selectionEnd,
  value,
  data,
}: PhoneFieldPatch): PhoneFieldPatch => {
  let index = selectionStart - 1;

  while (index > -1 && !isNumber(value[index])) {
    index--;
  }

  if (index > -1) {
    const newValue = value.substring(0, index) + value.substring(index + 1);

    return {
      selectionStart: index,
      selectionEnd: index,
      value: newValue,
      data,
    };
  }

  return {
    selectionStart,
    selectionEnd,
    value,
    data,
  };
};

export const insertText = ({ selectionStart, selectionEnd, value, data }: PhoneFieldPatch): PhoneFieldPatch => {
  const newSelection = selectionStart + 1;
  let newValue = value.substring(0, selectionStart) + (data || '') + value.substring(selectionEnd);

  if (newValue[0] !== '+') {
    newValue = `+${newValue}`;
  }

  return {
    selectionStart: newSelection,
    selectionEnd: newSelection,
    value: newValue,
    data,
  };
};

export const adjustSelection = (
  { selectionStart, value, data }: PhoneFieldPatch,
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
    selectionStart: Math.max(2, index),
    selectionEnd: Math.max(2, index),
    value: formatted,
    data,
  };
};
