import { Theme } from '@material-ui/core/styles';
import { Components } from '@material-ui/core/styles/components';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { createButton } from './button';
export { createButton } from './button';
import { createIconButton } from './icon-button';
export { createIconButton } from './icon-button';

export const createComponents = (theme: Theme, typography: TypographyOptions) => {
  const MuiButton = createButton(theme, typography);
  const MuiIconButton = createIconButton(theme, typography);

  const components: Components = {
    MuiButton,
    MuiIconButton
  };
  return components;
};
