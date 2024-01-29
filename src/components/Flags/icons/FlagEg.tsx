import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagEg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#000" />
      <path
        d="M15 7.076h-2.25a.75.75 0 0 0-1.5 0H9c0 .414.36.75.775.75H9.75c0 .414.336.75.75.75 0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75.75.75 0 0 0 .75-.75h-.025c.414 0 .775-.336.775-.75Z"
        fill="#FF9811"
      />
    </FlagRoot>
  );
};
