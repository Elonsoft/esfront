import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconStopSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon height="24" viewBox="0 0 24 24" width="24" {...props}>
      <rect fill="currentColor" height="8" rx="1.5" width="8" x="8" y="8" />
    </SvgIcon>
  );
};
