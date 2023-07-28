import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagEc = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path
        clipRule="evenodd"
        d="M14.782 8a2.782 2.782 0 1 1-5.564 0H0v4h24V8h-9.218Z"
        fill="#0052B4"
        fillRule="evenodd"
      />
      <path d="M24 12H0v4h24v-4Z" fill="#D80027" />
      <path
        d="M12 9.842a1.795 1.795 0 0 1-1.793-1.793V6.973c0-.99.804-1.794 1.793-1.794.99 0 1.794.805 1.794 1.794v1.076c0 .989-.805 1.793-1.793 1.793Z"
        fill="#338AF3"
      />
      <path
        d="M14.87 3.745h-2.152a.718.718 0 0 0-1.435 0H9.131c0 .396.345.717.741.717h-.024c0 .396.321.718.718.718 0 .396.32.717.717.717h1.435a.717.717 0 0 0 .717-.717.717.717 0 0 0 .717-.718h-.023c.396 0 .74-.321.74-.717Z"
        fill="#000"
      />
    </FlagRoot>
  );
};
