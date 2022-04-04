import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconInfo = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.8 7.2C10.8 6.53726 11.3373 6 12 6C12.6628 6 13.2 6.53726 13.2 7.2C13.2 7.86274 12.6628 8.4 12 8.4C11.3373 8.4 10.8 7.86274 10.8 7.2ZM12 10C12.5523 10 13 10.4477 13 11V16H13.5C14.0523 16 14.5 16.4477 14.5 17C14.5 17.5523 14.0523 18 13.5 18H10.5C9.94771 18 9.5 17.5523 9.5 17C9.5 16.4477 9.94771 16 10.5 16H11V12H10.5C9.94771 12 9.5 11.5523 9.5 11C9.5 10.4477 9.94772 10 10.5 10H12Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
