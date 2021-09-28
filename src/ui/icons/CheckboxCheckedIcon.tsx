import { useTheme } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const CheckboxCheckedIcon = (props: SvgIconProps) => {
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
      <path d="M13 6.5L8 11.5L5 8.5" stroke={theme.palette.monoB[500]} strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  );
};
