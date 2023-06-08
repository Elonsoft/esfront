import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconExclamation = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path clipRule="evenodd" d="M11 6V14H13V6H11ZM11 16V18H13V16H11Z" fill="currentColor" fillRule="evenodd" />
    </SvgIcon>
  );
};
