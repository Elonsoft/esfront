import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronLeftMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" sx={{ fontSize: 20 }}>
      <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" fill="none" />
    </SvgIcon>
  );
};
