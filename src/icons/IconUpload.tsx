import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconUpload = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" sx={{ fontSize: 24 }}>
      <path d="M9 15.999v-6H5l7-7 7 7h-4v6H9zm-4 4v-2h14v2H5z" fill="currentColor" />
    </SvgIcon>
  );
};
