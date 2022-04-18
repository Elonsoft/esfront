import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconPlusLarge = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="currentColor" />
    </SvgIcon>
  );
};
