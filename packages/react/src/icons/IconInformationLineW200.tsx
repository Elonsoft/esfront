import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconInformationLineW200 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z"
        stroke="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
