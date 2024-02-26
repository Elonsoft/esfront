import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconArrowDownW300 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M8 12L12 16M12 16L16 12M12 16V7" stroke="currentColor" strokeWidth="1.5" />
    </SvgIcon>
  );
};
