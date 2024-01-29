import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v15.969h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.323h24V0Z" fill="#6DA544" />
      <path d="M24 10.646H0v5.323h24v-5.323Z" fill="#338AF3" />
    </FlagRoot>
  );
};
