import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconUndoSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon height="24" sx={{ fill: 'none' }} viewBox="0 0 24 24" width="24" {...props}>
      <path
        d="M7 9H12C14.2091 9 16 10.7909 16 13V13C16 15.2091 14.2091 17 12 17H9M7 9L9.5 6.5M7 9L9.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </SvgIcon>
  );
};
