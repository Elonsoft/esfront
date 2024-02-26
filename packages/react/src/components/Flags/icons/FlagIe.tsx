import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M8 0H0v16h8V0Z" fill="#6DA544" />
      <path d="M24 0h-8v16h8V0Z" fill="#FF9811" />
    </FlagRoot>
  );
};
