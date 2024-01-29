import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M0 10.667h24V16H0v-5.333Z" fill="#D80027" />
      <path
        d="m10.95 5.218-.007-2.084-4.173.012.006 2.072v.115H0v5.334h24V5.333H10.95v.58C10.95 7.511 8.863 8 8.863 8s-2.087-.49-2.087-2.087v-.695l.696.695L8.863 4.87l1.392 1.043.695-.695Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};
