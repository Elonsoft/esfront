import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagFo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 9.85H9.478v6.119H5.739V9.85H0V6.118h5.74V0h3.738v6.118H24V9.85Z" fill="#0052B4" />
      <path d="M24 6.987v1.995H8.609v6.987h-2V8.982H0V6.987h6.608V0h2v6.987H24Z" fill="#D80027" />
    </FlagRoot>
  );
};
