import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMd = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path
        d="M14.782 6.294H12.87a.87.87 0 0 0-1.74 0H9.218c0 .473.412.857.884.857h-.028c0 .472.383.856.856.856 0 .418.3.766.698.84l-.675 1.524a2.774 2.774 0 0 0 2.095 0l-.675-1.523a.856.856 0 0 0 .698-.841.856.856 0 0 0 .856-.856h-.029c.473 0 .885-.384.885-.857Z"
        fill="#FF9811"
      />
      <path d="M8.522 0H0v16h8.522V0ZM12 7.478 10.87 8v1.043L12 9.74l1.13-.696V8L12 7.478Z" fill="#0052B4" />
      <path d="M24 0h-8.522v16H24V0ZM13.13 6.956h-2.26V8h2.26V6.956Z" fill="#D80027" />
    </FlagRoot>
  );
};
