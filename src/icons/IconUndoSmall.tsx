import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconUndoSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} sx={{ fill: 'none' }}>
      <path
        d="M7 9H12C14.2091 9 16 10.7909 16 13V13C16 15.2091 14.2091 17 12 17H9M7 9L9.5 6.5M7 9L9.5 11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
