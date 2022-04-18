import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCircleLarge = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </SvgIcon>
  );
};
