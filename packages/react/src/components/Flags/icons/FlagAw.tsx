import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagAw = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#338AF3" />
      <path
        d="m2.274 3.829-1.563-.69 1.563-.69.69-1.563.69 1.563 1.563.69-1.563.69-.69 1.562-.69-1.562Z"
        fill="#F0F0F0"
      />
      <path d="m2.965 1.747.426.965.966.426-.966.426-.426.966-.425-.966-.966-.426.966-.426.425-.965Z" fill="#D80027" />
      <path d="M24 10.087H0v1.044h24v-1.044ZM24 12.174H0v1.043h24v-1.043Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
