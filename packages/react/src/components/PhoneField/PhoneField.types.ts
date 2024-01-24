import { ReactNode } from 'react';

import { TextFieldProps } from '@mui/material';

import { AutocompleteMenuProps } from '../AutocompleteMenu';

import { CountryCode } from 'libphonenumber-js';

export type PhoneFieldProps = {
  /** An array of accepted countries. */
  countries: CountryCode[];
  /** Country to select by default. */
  defaultCountry?: CountryCode;
  /** An array of countries to display at the top of the dropdown list. */
  preferredCountries?: CountryCode[];
  /** If true, user can input only phones from countries list. */
  whitelist?: boolean;

  /** Used to determine the flag icon for a given country code. */
  getCountryFlag?: (code: CountryCode | null) => ReactNode;
  /** Used to determine the country display name for a given country code. */
  getCountryDisplayName?: (code: CountryCode) => string;

  /** Text for the menu button aria-label. */
  labelMenu?: string;

  /** Icon for the menu button drop down arrow. */
  iconMenuArrow?: ReactNode;

  /** Props applied to the menu component. */
  MenuProps?: Partial<
    Omit<
      AutocompleteMenuProps<any>,
      | 'value'
      | 'onChange'
      | 'multiple'
      | 'getDisplayValue'
      | 'options'
      | 'getOptionLabel'
      | 'getOptionValue'
      | 'getOptionDisabled'
      | 'groupBy'
      | 'actions'
    >
  >;

  /** Callback fired when the value is about to be modified. */
  onBeforeInput?: (event: InputEvent) => void;
  /**
   * Callback fired when the value has been changed as a direct result of a user action.
   * PhoneField uses this event in order to modify browser autocomplete.
   */
  onInput?: (event: Event) => void;
} & Omit<TextFieldProps, 'onBeforeInput' | 'onInput'>;
