import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#FF9811" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#6DA544" />
      <path
        clipRule="evenodd"
        d="M14.057 8A2.058 2.058 0 1 1 9.94 8a2.058 2.058 0 0 1 4.116 0Zm-.772 0a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0Z"
        fill="#0052B4"
        fillRule="evenodd"
      />
      <path
        d="m12 6.413.396.9.977-.107-.58.794.58.793-.977-.106-.397.9-.397-.9-.977.106.58-.793-.58-.794.977.107.397-.9Z"
        fill="#0052B4"
      />
    </FlagRoot>
  );
};
