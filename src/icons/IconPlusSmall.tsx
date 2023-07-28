import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconPlusSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="currentColor" />
    </SvgIcon>
  );
};
