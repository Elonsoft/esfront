import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagEh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0Z" fill="#000" />
      <path d="M24 10.666H0V16h24v-5.334Z" fill="#496E2D" />
      <path
        d="M12 8 0 16V0l12 8ZM14.33 8c0-.932.656-1.711 1.53-1.902a1.948 1.948 0 1 0 0 3.805A1.948 1.948 0 0 1 14.33 8Z"
        fill="#D80027"
      />
      <path
        d="m15.943 6.748.276.85h.894l-.723.526.276.85-.723-.525-.724.525.277-.85-.724-.526h.894l.277-.85Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
