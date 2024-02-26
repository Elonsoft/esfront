import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagEsPv = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="M14.121 8 24 1.414V0h-2.121L12 6.586 2.121 0H0v1.414L9.879 8 0 14.586V16h2.121L12 9.414 21.879 16H24v-1.414L14.121 8Z"
        fill="#496E2D"
      />
      <path d="M13.043 6.956V0h-2.086v6.956H0v2.087h10.956V16h2.088V9.044H24V6.956H13.044Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
