import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconFilter = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M8 12.5H16V11H8V12.5ZM6 7V8.5H18V7H6ZM10 16.5H14V15H10V16.5Z" fill="currentColor" />
    </SvgIcon>
  );
};
