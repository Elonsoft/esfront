import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0H0v5.333h24V0ZM24 10.666H0V16h24v-5.333Z" fill="#6DA544" />
      <path d="M12 8 0 16V0l12 8Z" fill="#D80027" />
      <path
        d="m14.158 6.608.346 1.063h1.117l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118l.345-1.063ZM17.636 6.608l.346 1.063h1.117l-.904.657.345 1.063-.904-.657-.904.657.346-1.063-.905-.657h1.118l.345-1.063Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
