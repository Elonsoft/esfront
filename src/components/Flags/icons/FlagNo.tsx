import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagNo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#D80027" />
      <path d="M24 9.87H9.478V16H5.739V9.87H0V6.13h5.74V0h3.738v6.13H24v3.74Z" fill="#F0F0F0" />
      <path d="M24 7v2H8.609v7h-2V9H0V7h6.608V0h2v7H24Z" fill="#2E52B2" />
    </FlagRoot>
  );
};
