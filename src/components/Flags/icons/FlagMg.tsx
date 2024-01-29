import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 16V0H0v16h24Z" fill="#6DA544" />
      <path d="M24 0H0v8h24V0Z" fill="#D80027" />
      <path d="M8.522 0H0v16h8.522V0Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
