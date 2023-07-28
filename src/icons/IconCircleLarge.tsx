import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCircleLarge = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <circle cx="12" cy="12" fill="currentColor" r="10" />
    </SvgIcon>
  );
};
