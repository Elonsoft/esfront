import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconAlert = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5829 3.37127C13.4217 1.40619 10.5786 1.40619 9.41737 3.37128L1.67472 16.4742C0.492994 18.4741 1.9346 21.0004 4.2575 21.0004H19.7428C22.0657 21.0004 23.5073 18.4741 22.3256 16.4742L14.5829 3.37127ZM11.0002 9.00041H13.0002V13.0004H11.0002V9.00041ZM11.0002 15.0004H13.0002V17.0004H11.0002V15.0004Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
