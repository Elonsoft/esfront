import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#0052B4" />
      <path
        d="m10.961 4.677-.977.46.52.946-1.06-.203-.135 1.072-.739-.788-.739.788-.134-1.072-1.061.203.52-.946-.977-.46.977-.46-.52-.946 1.06.203.135-1.071.74.788.738-.788.135 1.071 1.06-.203-.52.947.977.46ZM20.012 0 0 15.759v.176L23.614 0h-3.602Z"
        fill="#F0F0F0"
      />
      <path d="M24 0h-.386L0 15.935V16h.175L24 2.422V0Z" fill="#FF9811" />
    </FlagRoot>
  );
};
