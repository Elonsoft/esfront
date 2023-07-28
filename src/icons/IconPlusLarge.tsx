import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconPlusLarge = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="currentColor" />
    </SvgIcon>
  );
};
