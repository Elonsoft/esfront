import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCircleMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="7" fill="currentColor" />
    </SvgIcon>
  );
};
