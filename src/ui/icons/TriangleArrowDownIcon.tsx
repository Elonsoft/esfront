import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const TriangleArrowDownIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" sx={{ fontSize: 16 }}>
      <path d="M4 6L8 10.5L12 6H4Z" fill="currentColor" />
    </SvgIcon>
  );
};
