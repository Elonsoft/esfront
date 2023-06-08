import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCalendarRange = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5ZM5 7H19V5H5V7ZM19 19V9H5V19H19ZM7 17H13V15H7V17ZM11 13H17V11H11V13Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
