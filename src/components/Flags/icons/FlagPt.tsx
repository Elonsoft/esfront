import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagPt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M9.218 6.5V0H0v16h9.218v-5.937A1.688 1.688 0 0 1 7.53 8.375V6.5h1.688Z" fill="#6DA544" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.217 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.688.375V6.5h3.375v1.875a1.688 1.688 0 0 1-3.375 0Z"
        fill="#FFDA44"
      />
      <path d="M9.217 8.938a.563.563 0 0 1-.563-.563v-.75H9.78v.75c0 .31-.252.563-.562.563Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
