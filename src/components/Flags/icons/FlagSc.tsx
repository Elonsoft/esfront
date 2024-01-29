import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSc = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#F0F0F0" />
      <path d="M11.037 0 0 15.969 20.032 0h-8.995Z" fill="#FFDA44" />
      <path d="m24 11.418-24 4.55h24v-4.55Z" fill="#6DA544" />
      <path d="M24 0h-3.968L0 15.969 24 6.4V0Z" fill="#D80027" />
      <path d="M0 0v15.969L11.037 0H0Z" fill="#0052B4" />
    </FlagRoot>
  );
};
