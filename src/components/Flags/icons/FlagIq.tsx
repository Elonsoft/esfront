import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIq = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#A2001D" />
      <path d="M24 10.667H0V16h24v-5.333Z" fill="#000" />
      <path
        d="M10.274 7.535H8.898a.621.621 0 0 1 .6-.466v-.93c-.855 0-1.551.695-1.551 1.55v.777h2.327c.086 0 .156.07.156.155v.31H7.326v.931h4.035V8.621c0-.599-.488-1.086-1.087-1.086ZM12.602 8.931V6.138h-.93v3.724h1.55v-.93h-.62ZM15.706 8.931V6.138h-.932v2.793h-.31v-.93h-.931v1.861h2.793v-.93h-.62Z"
        fill="#496E2D"
      />
    </FlagRoot>
  );
};
