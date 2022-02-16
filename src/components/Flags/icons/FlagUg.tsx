import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagUg = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#000" />
      <path d="M0 2.667h24v2.667H0V2.667ZM0 10.667h24v2.667H0v-2.667Z" fill="#FFDA44" />
      <path
        d="M0 5.333h24V8H12.664L12 7.712s.229-.76.241-.811a.518.518 0 0 0-.139-.488l.246-.246a.867.867 0 0 0-1.23 0l.246.246a.52.52 0 0 0-.13.52l-.37.371h.672s-.244.367-.4.696H0V5.333ZM0 13.333h24V16H0v-2.667Z"
        fill="#D80027"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.67 8a2.67 2.67 0 1 1-5.34 0 2.67 2.67 0 0 1 5.34 0ZM12 7.712l.978.424c.35.156.509.567.353.918l-.01.02h-.656l-.317.317v.696h-.696L12 9.739V9.39l-.338-.317-.203-.09a.702.702 0 0 1-.353-.919c.152-.343.43-.761.43-.761h-.673l.37-.37a.522.522 0 0 1 .13-.52l-.245-.247a.867.867 0 0 1 1.23 0l-.246.246a.52.52 0 0 1 .139.488c-.012.052-.241.811-.241.811Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
