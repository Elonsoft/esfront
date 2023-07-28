import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconTrashCan = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM9 8H11V17H9V8ZM13 8H15V17H13V8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
