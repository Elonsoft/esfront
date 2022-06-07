import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCheckbox = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="1" y="1" width="16" rx="3" height="16" stroke="currentColor" strokeWidth="2" />
      <circle width="9" height="9" r="10" cx="9" cy="9" strokeWidth="1.8" stroke="transparent" />
      <path d="M13 6.5L8 11.5L5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </SvgIcon>
  );
};
