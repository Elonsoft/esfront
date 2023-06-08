import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconFullscreen = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 5H10V7H7V10H5V5ZM14 5H19V10H17V7H14V5ZM17 14H19V19H14V17H17V14ZM10 17V19H5V14H7V17H10Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
