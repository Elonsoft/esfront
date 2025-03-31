import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon500 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="36" viewBox="0 0 27 36" width="27" {...props}>
      <path
        clipRule="evenodd"
        d="M24.61 32.94c-.2.04-.4.06-.61.06h-6.11a3 3 0 0 1-2.3 2.39l9.02-2.45Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M27 30a3 3 0 0 1-3 3h-6.05a3.03 3.03 0 0 1-3.44 2.42l-12-2A3 3 0 0 1 0 30.46V3a3 3 0 0 1 3-3h18.75a3 3 0 0 1 3 3v12.37l.6.3A3 3 0 0 1 27 18.35V30ZM3.3 1.5l14.24 2.1a2 2 0 0 1 1.71 1.99v13.66a2 2 0 0 1-.4 1.2l-1.05 1.4a4 4 0 0 0-.8 2.4v8.2a2 2 0 0 1-2.33 1.98l-12-2A2 2 0 0 1 1 30.46V3.48A2 2 0 0 1 3.3 1.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M22.5 29.25c0 .83-.67 1.5-1.5 1.5h-3v-6.5a3 3 0 0 1 .6-1.8l1.05-1.4a3 3 0 0 0 .6-1.8V5.59a3 3 0 0 0-2.56-2.97l-2.5-.37H21c.83 0 1.5.67 1.5 1.5v25.5Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
