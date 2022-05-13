import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconRadio = (props: SvgIconProps) => {
  return (
    <SvgIcon sx={{ fill: 'none' }} width="20" height="20" viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </SvgIcon>
  );
};
