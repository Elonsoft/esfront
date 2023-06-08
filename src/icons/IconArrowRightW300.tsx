import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconArrowRightW300 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M12 8L16 12M16 12L12 16M16 12H7" stroke="currentColor" strokeWidth="1.5" />
    </SvgIcon>
  );
};
