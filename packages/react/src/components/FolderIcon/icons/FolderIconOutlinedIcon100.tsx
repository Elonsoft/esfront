import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconOutlinedIcon100 = (props: SvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon fill="none" height="20" viewBox="0 0 15 20" width="15" {...props}>
      <path
        clipRule="evenodd"
        d="M13.67 18.3c-.1.02-.22.03-.34.03H9.94a1.67 1.67 0 0 1-1.28 1.33l5.01-1.36Z"
        fill={theme.vars.palette.black.A50}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M13.33 18.33c.92 0 1.67-.74 1.67-1.66V10.2c0-.63-.36-1.21-.92-1.5l-.33-.16V1.67C13.75.75 13 0 12.08 0H1.67C.75 0 0 .75 0 1.67v15.26c0 .8.59 1.5 1.4 1.64l6.66 1.1c.92.16 1.76-.46 1.91-1.34h3.36ZM1.76 1.27l7.92 1.18c.33.04.57.32.57.65v7.6c0 .14-.05.28-.13.4l-.59.77a2.67 2.67 0 0 0-.53 1.6v4.56c0 .41-.37.73-.78.66l-6.66-1.11a.67.67 0 0 1-.56-.66V1.93c0-.4.36-.72.76-.66Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M12.5 16.25c0 .46-.37.83-.83.83H10v-3.6c0-.37.12-.72.33-1l.59-.79c.21-.28.33-.63.33-1V3.1c0-.82-.6-1.52-1.42-1.64l-1.4-.21h3.24c.46 0 .83.37.83.83v14.17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
