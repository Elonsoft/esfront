import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconBreadcrumbArrowLeft = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M14 8L10 12L14 16" stroke="currentColor" strokeWidth="1.5" />
    </SvgIcon>
  );
};
