import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconTriangleArrowDown = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="16" sx={{ fontSize: 16 }} viewBox="0 0 16 16" width="16" {...props}>
      <path d="M4 6L8 10.5L12 6H4Z" fill="currentColor" />
    </SvgIcon>
  );
};
