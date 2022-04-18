import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconBellOutline = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C10.8954 2 10 2.89543 10 4V4.28988C7.10851 5.15043 5 7.82898 5 11V17L3 19V20H5H7H17H19H21V19L19 17V11C19 7.82898 16.8915 5.15043 14 4.28988V4C14 2.89543 13.1046 2 12 2ZM17 11V18H7V11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11ZM12 23C10.8954 23 10 22.1046 10 21H14C14 22.1046 13.1046 23 12 23Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
