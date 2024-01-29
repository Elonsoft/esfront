import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagOm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path
        d="m8.895 3.52-.738-.737-.492.492-.492-.492-.737.738.492.491-.492.492.737.738.492-.492.492.492.738-.738-.492-.492.492-.491ZM24 0H9.915v5.218H24V0Z"
        fill="#F0F0F0"
      />
      <path d="M24.001 10.783H9.914V16h14.087v-5.217Z" fill="#6DA544" />
    </FlagRoot>
  );
};
