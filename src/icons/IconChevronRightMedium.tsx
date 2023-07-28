import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronRightMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="20" viewBox="0 0 20 20" width="20" {...props}>
      <path d="M8 5L13 10L8 15" fill="none" stroke="currentColor" strokeWidth="2" />
    </SvgIcon>
  );
};
