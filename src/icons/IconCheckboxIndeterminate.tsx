import { useTheme } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCheckboxIndeterminate = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="18" height="18" rx="4" fill="currentColor" />
      <rect x="4" y="8" width="10" height="2" rx="1" fill={theme.palette.monoB[500]} />
    </SvgIcon>
  );
};
