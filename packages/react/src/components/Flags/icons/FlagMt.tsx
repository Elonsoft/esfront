import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H12v16h12V0Z" fill="#D80027" />
      <path d="M9.762 2.5v-1h-1v1h-1v1h1v1h1v-1h1v-1h-1Z" fill="#ACABB1" />
    </FlagRoot>
  );
};
