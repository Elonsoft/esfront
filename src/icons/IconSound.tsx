import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconSound = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V5ZM6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V13ZM17 8C16.4477 8 16 8.44772 16 9V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V9C18 8.44772 17.5523 8 17 8Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
