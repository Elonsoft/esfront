import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCf = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M9.913 8H0v4h9.913V8ZM24 8h-9.913v4H24V8Z" fill="#6DA544" />
      <path d="M0 0v4h9.913V0h4.174v4H24V0H0Z" fill="#0052B4" />
      <path d="M24 4h-9.913v4H24V4ZM9.913 4H0v4h9.913V4Z" fill="#F0F0F0" />
      <path
        d="M14.087 16H9.913v-4H0v4h24v-4h-9.913v4ZM5.61 1.217l.216.665h.698l-.565.41.216.664-.565-.41-.565.41.216-.664-.565-.41h.698l.216-.665Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
