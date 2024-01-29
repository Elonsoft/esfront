import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#D80027" />
      <path d="M24 10.666H0v5.333h24v-5.333Z" fill="#000" />
      <path
        d="m8.78 6.086.431 1.329h1.397l-1.13.821.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.821h1.397l.432-1.329ZM15.22 6.086l.431 1.329h1.397l-1.13.821.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.821h1.397l.431-1.329Z"
        fill="#6DA544"
      />
    </FlagRoot>
  );
};
