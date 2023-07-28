import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconSortDirectionDown = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="12" sx={{ width: '8px', height: '12px' }} viewBox="0 0 8 12" width="8" {...props}>
      <path
        clipRule="evenodd"
        d="M3.25011 8H0.689453L4.00011 11.31L7.31077 8H4.75011V1H3.25011V8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
