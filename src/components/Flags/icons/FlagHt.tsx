import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagHt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path
        clipRule="evenodd"
        d="M0 0h24v16H0V0Zm13.391 8.348a1.391 1.391 0 1 1-2.782 0 1.391 1.391 0 0 1 2.782 0Z"
        fill="#A2001D"
        fillRule="evenodd"
      />
      <path d="M12 9.044a.696.696 0 1 0 0-1.391.696.696 0 0 0 0 1.39Z" fill="#A2001D" />
      <path d="m12 9.74 2.782.347V5.913H9.217v4.174l2.781-.348a1.391 1.391 0 1 1 .003 0Z" fill="#F0F0F0" />
      <path d="M24 8.008V0H0v8.008h9.217V5.913h5.566v2.095H24Z" fill="#0052B4" />
      <path
        clipRule="evenodd"
        d="M13.35 8.008a1.392 1.392 0 1 0-2.7.682 1.392 1.392 0 0 0 2.7-.682Zm-.654.34a.696.696 0 1 1-1.391 0 .696.696 0 0 1 1.39 0Z"
        fill="#0052B4"
        fillRule="evenodd"
      />
      <path d="M12.348 7.305h-.696v2.087h.696V7.305Z" fill="#FFDA44" />
      <path
        d="m12.347 7.305.696-.697h-2.087l.696.697h.695ZM11.652 9.183v.209h.695v-.21h.766l1.669.905H9.217l1.67-.904h.765Z"
        fill="#6DA544"
      />
    </FlagRoot>
  );
};
