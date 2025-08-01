import { Components, CssVarsTheme, Theme, TypographyVariantsOptions } from '@mui/material/styles';

import { createSlider } from './slider';
export { createSlider } from './slider';

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

import {
  createList,
  createListItem,
  createListItemButton,
  createListItemIcon,
  createListItemText,
  createMenu,
  createMenuItem,
} from './menu';
export { createMenu } from './menu';

export const createComponents = (theme: Theme, typography: TypographyVariantsOptions) => {
  const MuiSlider = createSlider(theme, typography);

  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiTextField = createTextField(theme, typography);

  const MuiMenu = createMenu(theme, typography);
  const MuiMenuItem = createMenuItem(theme, typography);
  const MuiList = createList(theme, typography);
  const MuiListItem = createListItem(theme, typography);
  const MuiListItemIcon = createListItemIcon(theme, typography);
  const MuiListItemText = createListItemText(theme, typography);
  const MuiListItemButton = createListItemButton(theme, typography);

  const components: Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme> = {
    MuiSlider,

    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputAdornment,
    MuiOutlinedInput,
    MuiSelect,
    MuiTextField,

    MuiMenu,
    MuiMenuItem,
    MuiList,
    MuiListItem,
    MuiListItemButton,
    MuiListItemIcon,
    MuiListItemText,
  };

  return components;
};
