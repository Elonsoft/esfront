import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconArrowExpand = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        clipRule="evenodd"
        d="M14 5C13.5858 5 13.25 5.33579 13.25 5.75C13.25 6.16421 13.5858 6.5 14 6.5H16.4393L12.4697 10.4697L13.5303 11.5303L17.5 7.56066V10C17.5 10.4142 17.8358 10.75 18.25 10.75C18.6642 10.75 19 10.4142 19 10V5.75V5H18.25H14ZM7.56066 17.5001L11.5303 13.5304L10.4697 12.4697L6.5 16.4394V14.0001C6.5 13.5858 6.16421 13.2501 5.75 13.2501C5.33579 13.2501 5 13.5858 5 14.0001V18.2501V19.0001H5.75H10C10.4142 19.0001 10.75 18.6643 10.75 18.2501C10.75 17.8358 10.4142 17.5001 10 17.5001H7.56066Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
