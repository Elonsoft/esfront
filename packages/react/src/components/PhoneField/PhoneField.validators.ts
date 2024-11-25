import { parsePhoneNumber } from 'libphonenumber-js/min';

export function isPossiblePhoneNumber(value: string | null | undefined): boolean {
  if (typeof value !== 'string' || value.trim() !== value) {
    return false;
  }

  try {
    const phoneNumber = parsePhoneNumber(value);
    return phoneNumber.isPossible();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}

export function isValidPhoneNumber(value: string | null | undefined): boolean {
  if (typeof value !== 'string' || value.trim() !== value) {
    return false;
  }

  try {
    const phoneNumber = parsePhoneNumber(value);
    return phoneNumber.isValid();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}
