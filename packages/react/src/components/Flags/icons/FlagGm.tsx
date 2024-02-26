import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagGm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 11.13H0V16h24v-4.87Z" fill="#496E2D" />
      <path d="M24 0H0v4.9h24V0Z" fill="#A2001D" />
      <path d="M24 5.885H0v4.203h24V5.885Z" fill="#0052B4" />
    </FlagRoot>
  );
};
