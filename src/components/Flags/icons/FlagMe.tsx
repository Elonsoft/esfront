import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagMe = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FFDA44" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.391h24V14.61H0V1.391Zm13.74 4.523h-3.48V4.522l.697.348L12 3.827l1.043 1.043.696-.348v1.392ZM13.391 8h1.738c0 .532-.463.963-.995.963h.032c0 .436-.29.805-.688.923l.782.782-.738.738-1.047-1.047a.808.808 0 0 1-.127.035l.633 1.428a2.6 2.6 0 0 1-1.964 0l.633-1.428a.812.812 0 0 1-.127-.035l-1.047 1.047-.738-.738.782-.782a.963.963 0 0 1-.688-.923h.032c-.532 0-.995-.431-.995-.963h1.717a.803.803 0 1 1 1.402-.78.803.803 0 1 1 1.403.78Z"
        fill="#A2001D"
      />
      <path d="m12 8.521-1.13.522v1.044l1.13.695 1.13-.695V9.043L12 8.521Z" fill="#6DA544" />
      <path d="M13.13 8h-2.26v1.391h2.26V8Z" fill="#0052B4" />
    </FlagRoot>
  );
};
