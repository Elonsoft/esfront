import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagGi = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M24 10.666H0V16h24v-5.333ZM15.13 6.608V5.565h.348v-.696h-.695v.348h-.696V4.87h-.696v.696h.348v1.043h-.696V4.174h.348v-.696h-.695v.348h-.348v-.348h-.696v.348h-.348v-.348h-.695v.696h.348v2.434h-.696V5.565h.348v-.696h-.696v.348h-.696V4.87h-.695v.696h.348v1.043h-.696v2.783h7.652V6.608h-.696Z"
        fill="#D80027"
      />
      <path
        d="M12 9.043a1.043 1.043 0 0 0-.347 2.027v1.451h-1.044v1.391h1.74V11.07A1.044 1.044 0 0 0 12 9.043Zm0 1.391a.348.348 0 1 1 0-.695.348.348 0 0 1 0 .695Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
