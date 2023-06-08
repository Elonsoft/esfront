import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconViewHeadline = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H13H12H5C4.44772 7 4 6.55228 4 6ZM5 11C4.44772 11 4 10.5523 4 10C4 9.44771 4.44772 9 5 9H19C19.5523 9 20 9.44771 20 10C20 10.5523 19.5523 11 19 11H5ZM5 19C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5ZM5 15C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
