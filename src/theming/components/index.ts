import { Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { createButton } from './button';
export { createButton } from './button';

import { createIconButton } from './icon-button';
export { createIconButton } from './icon-button';

import { createDialog, createDialogActions, createDialogContent, createDialogTitle } from './dialog';
export { createDialog, createDialogActions, createDialogContent, createDialogTitle } from './dialog';

import { createSlider } from './slider';
export { createSlider } from './slider';

import {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField
} from './text-field';
export {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField
} from './text-field';

export const createComponents = (theme: Theme, typography: TypographyOptions) => {
  const MuiButton = createButton(theme, typography);

  const MuiIconButton = createIconButton(theme, typography);

  const MuiDialog = createDialog(theme, typography);
  const MuiDialogActions = createDialogActions(theme, typography);
  const MuiDialogContent = createDialogContent(theme, typography);
  const MuiDialogTitle = createDialogTitle(theme, typography);

  const MuiSlider = createSlider(theme, typography);

  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiTextField = createTextField(theme, typography);

  const components: Components = {
    MuiButton,

    MuiIconButton,

    MuiDialog,
    MuiDialogActions,
    MuiDialogContent,
    MuiDialogTitle,

    MuiSlider,

    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputAdornment,
    MuiOutlinedInput,
    MuiSelect,
    MuiTextField
  };
  return components;
};
