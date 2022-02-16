import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMs = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M15.666 5v3.667c0 1.786 2.333 2.333 2.333 2.333s2.334-.547 2.334-2.333V5h-4.667Z" fill="#338AF3" />
      <path d="M15.666 8.666c0 1.786 2.333 2.333 2.333 2.333s2.334-.547 2.334-2.333h-4.667Z" fill="#A2001D" />
      <path d="M19 6.667h-.667V6h-.666v.667H17v.666h.667v2h.666v-2H19v-.666Z" fill="#000" />
      <path
        d="M12 0v1.432L9.883 2.61H12V5.39H9.23L12 6.931V8h-1.25L7.303 6.086V8H4.696V5.723L.597 8H0V6.568L2.117 5.39H0V2.61h2.77L0 1.069V0h1.25l3.446 1.914V0h2.608v2.277L11.403 0H12Z"
        fill="#F0F0F0"
      />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304Z" fill="#F0F0F0" />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path d="M4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path d="M6.75 0h-1.5v3.25H0v1.5h5.25V8h1.5V4.75H12v-1.5H6.75V0Z" fill="#D80027" />
      <path
        d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM3.368 5.39 0 7.263v.737l4.696-2.608H3.368ZM4.696 2.609 0 0v.738l3.368 1.87h1.328ZM8.632 2.609 12 .738V0L7.304 2.609h1.328Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
