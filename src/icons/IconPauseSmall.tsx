import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconPauseSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        clipRule="evenodd"
        d="M8.5 7C7.67157 7 7 7.67157 7 8.5V15.5C7 16.3284 7.67157 17 8.5 17C9.32843 17 10 16.3284 10 15.5V8.5C10 7.67157 9.32843 7 8.5 7ZM15.5 7C14.6716 7 14 7.67157 14 8.5V15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5V8.5C17 7.67157 16.3284 7 15.5 7Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
