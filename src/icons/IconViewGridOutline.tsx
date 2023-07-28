import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconViewGridOutline = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM13 21H21V13H13V21ZM15 15H19V19H15V15ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM13 3V11H21V3H13ZM19 9H15V5H19V9Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
