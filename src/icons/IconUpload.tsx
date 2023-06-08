import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconUpload = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M9 16V10H5L12 3L19 10H15V16H9ZM5 20V18H19V20H5Z" fill="currentColor" />
    </SvgIcon>
  );
};
