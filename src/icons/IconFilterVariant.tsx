import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconFilterVariant = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 13H18V11H6V13ZM3 6V8H21V6H3ZM10 18H14V16H10V18Z" fill="currentColor" />
    </SvgIcon>
  );
};
