import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconFullscreenExit = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M14 14H19V16H16V19H14V14ZM5 14H10V19H8V16H5V14ZM8 5H10V10H5V8H8V5ZM19 8V10H14V5H16V8H19Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
