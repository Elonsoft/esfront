import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="m12 3.372 1.062 3.27H16.5l-2.781 2.02 1.062 3.27L12 9.91l-2.781 2.02 1.062-3.269L7.5 6.642h3.438L12 3.371Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
