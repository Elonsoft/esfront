import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagFj = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#2E52B2" />
      <path
        d="M12 0v1.193l-2.16 1.62H12v3.374H9.84L12 7.807V9h-1.06L7.5 6.42V9h-3V6.42L1.06 9H0V7.807l2.16-1.62H0V2.812h2.16L0 1.192V0h1.06L4.5 2.58V0h3v2.58L10.94 0H12ZM16 5.706v2.823C16 10.421 18 11 18 11s2-.58 2-2.47V5.705L18 5l-2 .706Z"
        fill="#F3F3F3"
      />
      <path d="M6.75 0h-1.5v3.656H0v1.688h5.25V9h1.5V5.344H12V3.656H6.75V0Z" fill="#D80027" />
      <path d="M0 0v.795l2.69 2.018h1.06L0 0ZM12 0v.795L9.31 2.813H8.25L12 0Z" fill="#D80027" />
      <path
        d="M0 0v.795l2.69 2.018h1.06L0 0ZM12 0v.795L9.31 2.813H8.25L12 0ZM0 9v-.796l2.69-2.017h1.06L0 9ZM12 9v-.796L9.31 6.187H8.25L12 9ZM20 6V5h-4v1h1.714v2H16v.667h1.714v2.23c.173.072.286.103.286.103s.113-.031.286-.102V8.667H20V8h-1.714V6H20Z"
        fill="#D80027"
      />
    </FlagRoot>
  );
};
