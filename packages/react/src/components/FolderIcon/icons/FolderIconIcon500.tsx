import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon500 = (props: SvgIconProps) => {
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
        d="M24 33a3 3 0 0 0 3-3V18.35a3 3 0 0 0-1.66-2.68l-.59-.3V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v.47A3 3 0 0 1 3.44.51l14.25 2.11a3 3 0 0 1 2.56 2.97v13.66a3 3 0 0 1-.6 1.8l-1.05 1.4a3 3 0 0 0-.6 1.8v8.2c0 .2-.02.37-.05.55H24Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M22.5 29.25c0 .83-.67 1.5-1.5 1.5h-3v-6.5a3 3 0 0 1 .6-1.8l1.05-1.4a3 3 0 0 0 .6-1.8V5.59a3 3 0 0 0-2.56-2.97l-2.5-.37H21c.83 0 1.5.67 1.5 1.5v25.5Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M14.5 35.42a3 3 0 0 0 3.5-2.96v-8.21a3 3 0 0 1 .6-1.8l1.05-1.4a3 3 0 0 0 .6-1.8V5.59a3 3 0 0 0-2.56-2.97L3.44.51A3 3 0 0 0 0 3.48v26.98a3 3 0 0 0 2.5 2.96l12 2Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
