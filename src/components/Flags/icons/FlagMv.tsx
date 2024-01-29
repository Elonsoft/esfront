import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagMv = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M17.218 4.174H6.783v7.652h10.435V4.174Z" fill="#6DA544" />
      <path
        d="M13.289 10.26a2.26 2.26 0 1 1 1.075-4.25 2.783 2.783 0 1 0 0 3.978 2.25 2.25 0 0 1-1.075.273Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
