import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIl = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        d="M15 6.268h-2l-1-1.732-1 1.732H9L10 8 9 9.732h2l1 1.732 1-1.732h2L14 8l1-1.732ZM13.229 8l-.615 1.064h-1.228L10.772 8l.614-1.064h1.228L13.228 8ZM12 5.872l.229.396h-.458L12 5.872Zm-1.843 1.064h.457l-.228.396-.229-.396Zm0 2.128.229-.396.228.396h-.457ZM12 10.128l-.229-.396h.458l-.229.396Zm1.843-1.064h-.457l.228-.396.229.396Zm-.457-2.128h.457l-.229.396-.228-.396ZM24 1H0v2h24V1ZM24 13H0v2h24v-2Z"
        fill="#2E52B2"
      />
    </FlagRoot>
  );
};
