import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronUp = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="currentColor" />
    </SvgIcon>
  );
};
