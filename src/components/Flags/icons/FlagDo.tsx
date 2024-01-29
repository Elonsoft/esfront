import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagDo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M14.088 8a2.087 2.087 0 1 1-4.174 0c0-1.152 2.087-2.086 2.087-2.086s2.087.934 2.087 2.087Z"
        fill="#496E2D"
      />
      <path
        d="M9.913 0H0v5.913h9.913V0ZM24 10.087h-9.913V16H24v-5.913ZM9.913 8a2.087 2.087 0 1 1 4.174 0"
        fill="#0052B4"
      />
      <path
        d="M9.913 10.087H0V16h9.913v-5.913ZM24 0h-9.913v5.913H24V0ZM10.826 6.957v1.304a1.174 1.174 0 1 0 2.348 0V6.957h-2.348Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
