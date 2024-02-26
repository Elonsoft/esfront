import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMn = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path d="M24 0h-8.521v16H24V0ZM8.522 0H0v16h8.522V0Z" fill="#A2001D" />
      <path
        d="M6 8.521h-.696v2.783H6V8.52ZM3.217 8.521h-.696v2.783h.696V8.52ZM4.261 10.26a.696.696 0 1 0 0-1.39.696.696 0 0 0 0 1.39ZM4.261 7.478a.348.348 0 1 0 0-.696.348.348 0 0 0 0 .696ZM4.956 10.608H3.565v.696h1.391v-.696ZM4.956 7.826H3.565v.695h1.391v-.695ZM4.26 4.695l.247.758h.797l-.645.469.247.758-.645-.468-.645.468.246-.758-.645-.469h.797l.247-.758Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
