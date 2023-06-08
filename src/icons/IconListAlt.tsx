import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconListAlt = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M3 5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.11 3 19V5ZM19 5H5V19H19V5ZM11 9V7H17V9H11ZM11 13V11H17V13H11ZM11 17V15H17V17H11ZM9 7H7V9H9V7ZM7 11H9V13H7V11ZM9 15H7V17H9V15Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
