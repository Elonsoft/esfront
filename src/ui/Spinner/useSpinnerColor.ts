import { useTheme } from '@mui/material/styles';
import { SpinnerColor } from './Spinner.types';

export const useSpinnerColor = (color: SpinnerColor) => {
  const theme = useTheme();

  switch (color) {
    case 'inherit':
      return 'currentColor';
    case 'monoA':
      return theme.palette[color][500];
    case 'primary':
    case 'secondary':
      return theme.palette[color][300];
  }
};
