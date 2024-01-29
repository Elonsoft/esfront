import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagPt30 = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path d="M24 0h-8.521v16H24V0ZM8.522 0H0v16h8.522V0Z" fill="#0052B4" />
      <path
        d="m14.332 8.717.538.717v-2.87l-.538.718h-1.614V5.668l.717-.538h-2.87l.718.538v1.614H9.669l-.538-.717v2.87l.538-.718h1.614v1.614l-.717.538h2.87l-.718-.538V8.717h1.614Z"
        fill="#D80027"
      />
      <path d="M14.152 7.64h-1.793V5.848h-.718v1.794H9.848v.717h1.793v1.793h.717V8.359h1.794v-.717Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
