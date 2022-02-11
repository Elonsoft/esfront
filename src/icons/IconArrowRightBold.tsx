import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconArrowRightBold = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16" sx={{ fontSize: 16 }}>
      <path d="M13 8L9 4V7H2V9H9V12L13 8Z" fill="currentColor" />
    </SvgIcon>
  );
};
