import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagUsHi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M12 0h12v16H0V8h12V0Z" fill="#F0F0F0" />
      <path d="M12 0H0v8h12V0Z" fill="#F0F0F0" />
      <path
        d="M12 6h12V4H12v2ZM0 12v-2h24v2H0ZM9.23 5.391 12 6.931V5.39H9.23ZM7.304 5.391 12 8.001v-.739l-3.368-1.87H7.304ZM10.75 8 7.303 6.086V8h3.445Z"
        fill="#0052B4"
      />
      <path
        d="M7.304 5.391 12 8.001v-.739l-3.368-1.87H7.304ZM2.117 5.391 0 6.568V5.39h2.117ZM4.696 5.723V8H.597l4.099-2.277ZM2.77 2.609 0 1.069v1.54h2.77ZM4.696 2.609 0 0v.738l3.368 1.87h1.328ZM1.25 0l3.446 1.914V0H1.25Z"
        fill="#0052B4"
      />
      <path
        d="M4.696 2.609 0 0v.738l3.368 1.87h1.328ZM9.883 2.609 12 1.433v1.176H9.883ZM7.304 2.277V0h4.099L7.304 2.277Z"
        fill="#0052B4"
      />
      <path
        d="M12 4h12V2H12v2ZM24 10V8H0v2h24ZM0 16v-2h24v2H0ZM6.75 0h-1.5v3.25H0v1.5h5.25V8h1.5V4.75H12v-1.5H6.75V0Z"
        fill="#D80027"
      />
      <path
        d="M7.304 5.391 12 8.001v-.739l-3.368-1.87H7.304ZM3.368 5.391 0 7.262V8l4.696-2.609H3.368ZM4.696 2.609 0 0v.738l3.368 1.87h1.328ZM8.632 2.609 12 .738V0L7.304 2.609h1.328Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
