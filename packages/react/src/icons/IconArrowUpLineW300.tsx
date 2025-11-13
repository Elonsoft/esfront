import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconArrowUpLineW300 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M8 12L12 8M12 8L16 12M12 8V17" stroke="currentColor" strokeWidth="1.5" />
    </SvgIcon>
  );
};
