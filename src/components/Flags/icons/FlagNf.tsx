import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagNf = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M8 0H0v16h8V0ZM24 0h-8v16h8V0ZM14.25 10.625 12 3.5l-2.25 7.125h1.688V12.5h1.124v-1.875h1.688Z"
        fill="#6DA544"
      />
    </FlagRoot>
  );
};
