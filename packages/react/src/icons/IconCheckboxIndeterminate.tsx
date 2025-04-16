// eslint-disable-next-line no-restricted-imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material-pigment-css';

export const IconCheckboxIndeterminate = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect fill="currentColor" height="18" rx="4" width="18" />
      <rect fill={theme.vars.palette.monoB[500]} height="2" rx="1" width="10" x="4" y="8" />
    </SvgIcon>
  );
};
