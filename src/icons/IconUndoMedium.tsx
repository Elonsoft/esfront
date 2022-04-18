import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconUndoMedium = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" {...props} sx={{ fill: 'none' }}>
      <path
        d="M6 9H13.5C15.9853 9 18 11.0147 18 13.5V13.5C18 15.9853 15.9853 18 13.5 18H8M6 9L9.5 5.5M6 9L9.5 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
