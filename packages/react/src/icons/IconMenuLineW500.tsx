import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const IconMenuLineW500 = (props: SvgIconProps) => {
  return (
    <SvgIcon size="24px" viewBox="0 0 24 24" {...props}>
      <path d="M3 7V5H21V7H3Z" fill="currentColor" />
      <path d="M3 13H21V11H3V13Z" fill="currentColor" />
      <path d="M3 19H21V17H3V19Z" fill="currentColor" />
    </SvgIcon>
  );
};
