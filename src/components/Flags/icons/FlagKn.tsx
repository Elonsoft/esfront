import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagKn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0H0v16" fill="#6DA544" />
      <path d="M20.938 0h-1.352L0 13.057V16h4.414L24 2.944V0h-3.062Z" fill="#FFDA44" />
      <path d="M24 0h-3.062L0 13.959v2.04h3.062L24 2.042V0Z" fill="#000" />
      <path
        d="m8.73 8.465.886.681.922-.632-.374 1.053.886.681-1.117-.03-.374 1.053-.317-1.072-1.117-.03.922-.632-.317-1.072ZM13.556 5.155l.886.681.921-.632-.374 1.053.886.681-1.117-.03-.374 1.053-.316-1.072-1.118-.03.922-.632-.316-1.072Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
