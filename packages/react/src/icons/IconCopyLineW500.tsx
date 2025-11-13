import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCopyLineW500 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 2H14C15.103 2 16 2.897 16 4V8H20C21.103 8 22 8.897 22 10V20C22 21.103 21.103 22 20 22H10C8.897 22 8 21.103 8 20V16H4C2.897 16 2 15.103 2 14V4C2 2.897 2.897 2 4 2ZM20 20V10H10L9.998 20H20ZM4 14H8V10C8 8.897 8.897 8 10 8H14V4H4V14Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
