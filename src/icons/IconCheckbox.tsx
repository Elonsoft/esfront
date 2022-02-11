import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCheckbox = (props: SvgIconProps) => {
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
      <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
    </SvgIcon>
  );
};
