<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>;
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconError = (props: SvgIconProps) => {
  return (
    <SvgIcon fill="none" height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        clipRule="evenodd"
        d="M9.24264 2C8.44699 2 7.68393 2.31607 7.12132 2.87868L2.87868 7.12132C2.31607 7.68393 2 8.44699 2 9.24264V14.7574C2 15.553 2.31607 16.3161 2.87868 16.8787L7.12132 21.1213C7.68393 21.6839 8.44699 22 9.24264 22H14.7574C15.553 22 16.3161 21.6839 16.8787 21.1213L21.1213 16.8787C21.6839 16.3161 22 15.553 22 14.7574V9.24264C22 8.44699 21.6839 7.68393 21.1213 7.12132L16.8787 2.87868C16.3161 2.31607 15.553 2 14.7574 2H9.24264ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
