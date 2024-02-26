import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagCh = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M16.696 6.435h-3.13v-3.13h-3.13v3.13H7.304v3.13h3.13v3.13h3.13v-3.13h3.131v-3.13Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
