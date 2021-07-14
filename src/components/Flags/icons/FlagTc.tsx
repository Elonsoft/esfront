import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagTc = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M15.565 5v3.667c0 1.786 2.434 2.333 2.434 2.333s2.435-.547 2.435-2.333V5h-4.87Z" fill="#FFDA44" />
      <path
        d="M17.653 6.333c0 .368-.311 1.333-.696 1.333-.384 0-.695-.965-.695-1.333 0-.369.695-.667.695-.667s.696.298.696.667Z"
        fill="#FF9811"
      />
      <path
        d="M19.499 7.059c.112-.263.2-.646.2-.837 0-.307-.418-.556-.418-.556s-.417.249-.417.556c0 .19.087.574.2.837l-.242.521a1.26 1.26 0 0 0 .918 0l-.241-.521Z"
        fill="#A2001D"
      />
      <path
        d="M17.479 8.666s-.348.667-.348 1.334h1.739c0-.667-.348-1.334-.348-1.334L18 8.333l-.521.333Z"
        fill="#6DA544"
      />
      <path
        d="M12 0v1.432L9.883 2.61H12V5.39H9.23L12 6.931V8h-1.25L7.303 6.086V8H4.696V5.723L.597 8H0V6.568L2.117 5.39H0V2.61h2.77L0 1.069V0h1.25l3.446 1.914V0h2.608v2.277L11.403 0H12Z"
        fill="#F0F0F0"
      />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304Z" fill="#F0F0F0" />
      <path d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path d="M4.696 2.609 0 0v.738l3.368 1.87h1.328Z" fill="#F0F0F0" />
      <path
        d="M18.522 8.666V8.5c0-.276-.234-.5-.522-.5a.511.511 0 0 0-.522.5v.166h1.044ZM6.75 0h-1.5v3.25H0v1.5h5.25V8h1.5V4.75H12v-1.5H6.75V0Z"
        fill="#D80027"
      />
      <path
        d="M7.304 5.39 12 8v-.738L8.632 5.39H7.304ZM3.368 5.39 0 7.263v.737l4.696-2.608H3.368ZM4.696 2.609 0 0v.738l3.368 1.87h1.328ZM8.632 2.609 12 .738V0L7.304 2.609h1.328Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};