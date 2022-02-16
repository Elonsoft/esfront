import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagJe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="m10.957 3.826 1.043.26 1.044-.26v-.887l-.417.209L12 2.52l-.626.627-.417-.21v.888Z" fill="#FFDA44" />
      <path
        d="M14.121 8 24 1.414V0h-2.121L12 6.586 2.121 0H0v1.414L9.879 8 0 14.586V16h2.121L12 9.414 21.879 16H24v-1.414L14.121 8Z"
        fill="#D80027"
      />
      <path d="M10.957 3.826v.652c0 .799 1.043 1.043 1.043 1.043s1.043-.244 1.043-1.043v-.652h-2.086Z" fill="#D80027" />
    </FlagRoot>
  );
};
