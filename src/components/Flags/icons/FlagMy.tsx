import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 2H0v2h24V2ZM24 6H0v2h24V6ZM24 10H0v2h24v-2ZM24 14H0v2h24v-2Z" fill="#D80027" />
      <path d="M12 0H0v8.615h12V0Z" fill="#0052B4" />
      <path
        d="M6.606 6.285a1.978 1.978 0 1 1 .94-3.718 2.435 2.435 0 1 0 0 3.48c-.28.152-.6.238-.94.238Z"
        fill="#FFDA44"
      />
      <path
        d="m7.163 2.916.351.734.793-.183-.355.733.638.505-.794.18.002.814-.635-.51-.635.51.002-.815-.794-.179.638-.505-.355-.733.793.183.351-.734Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
