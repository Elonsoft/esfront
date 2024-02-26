import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBqBo = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M0 16h24V0L0 16Z" fill="#0052B4" />
      <path d="M11.74 0H0v7.826L11.74 0Z" fill="#FFDA44" />
      <path
        d="m8.814 7.73.69-.374-.69-.373A2.436 2.436 0 0 0 6.782 4.95l-.374-.69-.373.69a2.436 2.436 0 0 0-2.033 2.033l-.69.374.69.373a2.436 2.436 0 0 0 2.033 2.033l.373.69.374-.69A2.436 2.436 0 0 0 8.814 7.73ZM6.408 8.748a1.391 1.391 0 1 1 0-2.783 1.391 1.391 0 0 1 0 2.783Z"
        fill="#000"
      />
      <path
        d="m6.41 6.313.3.522h.603l-.301.521.301.522h-.602l-.302.522-.3-.522h-.603l.301-.522-.301-.521h.602l.301-.522Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
