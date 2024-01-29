import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagJm = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path d="M10.119 8 0 14.745V1.254L10.119 8ZM24 1.254v13.491L13.881 8 24 1.254Z" fill="#000" />
      <path
        d="M24 1.254 13.881 8 24 14.746V16h-1.88L12 9.254 1.88 16H0v-1.254L10.119 8 0 1.254V0h1.88L12 6.746 22.12 0H24v1.254Z"
        fill="#FFDA44"
      />
    </FlagRoot>
  );
};
