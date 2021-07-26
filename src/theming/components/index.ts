import { Theme } from '@material-ui/core/styles';
import { Components } from '@material-ui/core/styles/components';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { createButton } from './button';
export { createButton } from './button';

import { createIconButton } from './icon-button';
export { createIconButton } from './icon-button';

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
  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiIconButton = createIconButton(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiTextField = createTextField(theme, typography);

  const components: Components = {
    MuiButton,
    MuiIconButton,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputAdornment,
    MuiSelect,
    MuiOutlinedInput,
    MuiTextField,
    MuiFormControl
  };
  return components;
};
