import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCheckSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M16 8L17.5 9.5L10.5 16.5L6 12L7.5 10.5L10.5 13.5L16 8Z" fill="currentColor" />
    </SvgIcon>
  );
};
