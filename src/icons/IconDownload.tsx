import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconDownload = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" fill="currentColor" />
    </SvgIcon>
  );
};
