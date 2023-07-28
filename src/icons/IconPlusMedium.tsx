import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconPlusMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M18 13H13V18H11V13H6V11H11V6H13V11H18V13Z" fill="currentColor" />
    </SvgIcon>
  );
};
