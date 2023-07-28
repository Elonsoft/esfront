import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronLeftMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="20" sx={{ fontSize: 20 }} viewBox="0 0 20 20" width="20" {...props}>
      <path d="M12 5L7 10L12 15" fill="none" stroke="currentColor" strokeWidth="2" />
    </SvgIcon>
  );
};
