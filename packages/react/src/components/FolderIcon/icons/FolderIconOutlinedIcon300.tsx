import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon300 = (props: SvgIconProps) => {
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
        d="M18.67 25.67A2.33 2.33 0 0 0 21 23.33v-9.05c0-.89-.5-1.7-1.29-2.1l-.46-.22V2.33A2.33 2.33 0 0 0 16.92 0H2.33A2.33 2.33 0 0 0 0 2.33V23.7c0 1.14.82 2.11 1.95 2.3l9.33 1.56c1.26.2 2.43-.65 2.68-1.88h4.7ZM13 25.25c0 .82-.74 1.45-1.55 1.31L2.1 25A1.33 1.33 0 0 1 1 23.7V2.7c0-.81.72-1.43 1.53-1.32L13.6 3.03c.66.1 1.14.66 1.14 1.32v10.62c0 .29-.1.57-.27.8l-.81 1.1a3.33 3.33 0 0 0-.67 1.99v6.39Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M17.5 22.75c0 .64-.52 1.17-1.17 1.17H14v-5.06c0-.5.16-1 .47-1.4l.81-1.09c.3-.4.47-.9.47-1.4V4.35c0-1.16-.85-2.14-2-2.31l-1.94-.29h4.52c.65 0 1.17.52 1.17 1.17v19.83Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
