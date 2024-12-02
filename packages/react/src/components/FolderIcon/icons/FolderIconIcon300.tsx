import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon300 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="28" viewBox="0 0 21 28" width="21" {...props}>
      <path
        clipRule="evenodd"
        d="M19.14 25.62c-.15.03-.31.05-.47.05H13.9c-.17.93-.9 1.66-1.8 1.85l7.03-1.9Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M18.67 25.67A2.33 2.33 0 0 0 21 23.33v-9.05c0-.89-.5-1.7-1.29-2.1l-.46-.22V2.33A2.33 2.33 0 0 0 16.92 0H2.33A2.33 2.33 0 0 0 0 2.33v.37A2.33 2.33 0 0 1 2.68.4l11.08 1.64c1.14.17 2 1.15 2 2.3v10.63c0 .5-.17 1-.48 1.4l-.81 1.1c-.3.4-.47.89-.47 1.4v6.38c0 .14-.01.28-.04.42h4.71Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M17.5 22.75c0 .64-.52 1.17-1.17 1.17H14v-5.06c0-.5.16-1 .47-1.4l.81-1.09c.3-.4.47-.9.47-1.4V4.35c0-1.16-.85-2.14-2-2.31l-1.94-.29h4.52c.65 0 1.17.52 1.17 1.17v19.83Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M11.28 27.55a2.33 2.33 0 0 0 2.72-2.3v-6.39c0-.5.16-1 .47-1.4l.81-1.09c.3-.4.47-.9.47-1.4V4.35c0-1.16-.85-2.14-2-2.31L2.69.4C1.27.19 0 1.28 0 2.7V23.7c0 1.14.82 2.11 1.95 2.3l9.33 1.56Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
