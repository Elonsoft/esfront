import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconFormatHeader1 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 4H5V10H9V4H11V18H9V12H5V18H3V4ZM14 18V16H16V6.31L13.5 7.75V5.44L16 4H18V16H20V18H14Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
