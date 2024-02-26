import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagFi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 7v2H8.609v7h-2V9H0V7h6.608V0h2v7H24Z" fill="#2E52B2" />
    </FlagRoot>
  );
};
