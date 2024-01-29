import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSv = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path d="M24 0H0v5.333h24V0ZM24 10.667H0V16h24v-5.333Z" fill="#0052B4" />
      <path d="M13.67 9.013 12 9.848l-1.67-.835V7.9h3.34v1.113Z" fill="#6DA544" />
      <path d="M10.933 7.9h2.133L12 6.052 10.933 7.9Z" fill="#FFDA44" />
      <path d="m13.573 6.148-.59.59a1.391 1.391 0 1 1-1.967 0l-.59-.59a2.226 2.226 0 1 0 3.148 0Z" fill="#FFDA44" />
    </FlagRoot>
  );
};
