import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconCircleFillW500 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" fill="currentColor" r="8" />
    </SvgIcon>
  );
};
