import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconStopSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <rect x="8" y="8" width="8" height="8" rx="1.5" fill="currentColor" />
    </SvgIcon>
  );
};
