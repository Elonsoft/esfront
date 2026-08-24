import { Components, CssVarsTheme, Theme, TypographyVariantsOptions } from '@mui/material/styles';

import {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField,
} from './text-field';
export {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField,
} from './text-field';

import { createList, createMenu } from './menu';
export { createMenu } from './menu';

export const createComponents = (theme: Theme, typography: TypographyVariantsOptions) => {
  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiTextField = createTextField(theme, typography);

  const MuiMenu = createMenu(theme, typography);

  const MuiList = createList(theme, typography);

  const components: Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme> = {
    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputAdornment,
    MuiOutlinedInput,
    MuiSelect,
    MuiTextField,

    MuiMenu,
    MuiList,
  };

  return components;
};
