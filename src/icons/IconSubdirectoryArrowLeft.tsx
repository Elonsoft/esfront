import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconSubdirectoryArrowLeft = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" sx={{ fill: 'none' }}>
      <path
        d="M16 9V12C16 12.5523 15.5523 13 15 13H10M10 13V11L7.5 13L10 15V13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};
