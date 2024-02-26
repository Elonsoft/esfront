import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagTo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        clipRule="evenodd"
        d="M0 0h12v8H0V0Zm6.626 2.121v1.252h1.252v1.253H6.626v1.252H5.374V4.626H4.122V3.373h1.252V2.121h1.252Z"
        fill="#F0F0F0"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
