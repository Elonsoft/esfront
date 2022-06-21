import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconCalendarMonth = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3C7.44772 3 7 3.44772 7 4V5H6C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H17V4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V5H9V4C9 3.44772 8.55228 3 8 3ZM7 12V10H9V12H7ZM7 16V14H9V16H7ZM11 14H13V16H11V14ZM17 16V14H15V16H17ZM13 10H11V12H13V10ZM15 12V10H17V12H15Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
