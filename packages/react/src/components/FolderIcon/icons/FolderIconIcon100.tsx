import { useTheme } from '@mui/material/styles';

import { SvgIcon, SvgIconProps } from '../../SvgIcon';

export const FolderIconIcon100 = (props: SvgIconProps) => {
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
        d="M13.33 18.33c.92 0 1.67-.74 1.67-1.66V10.2c0-.63-.36-1.21-.92-1.5l-.33-.16V1.67C13.75.75 13 0 12.08 0H1.67C.75 0 0 .75 0 1.67v.26C0 .9.9.13 1.91.28l7.92 1.18c.82.12 1.42.82 1.42 1.64v7.6c0 .36-.12.7-.33 1l-.59.77c-.21.3-.33.64-.33 1v4.56c0 .1 0 .2-.03.3h3.36Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M12.5 16.25c0 .46-.37.83-.83.83H10v-3.6c0-.37.12-.72.33-1l.59-.79c.21-.28.33-.63.33-1V3.1c0-.82-.6-1.52-1.42-1.64l-1.4-.21h3.24c.46 0 .83.37.83.83v14.17Z"
        fill={theme.vars.palette.white.A900}
        fillRule="evenodd"
      />
      <path
        d="M8.06 19.68A1.67 1.67 0 0 0 10 18.03v-4.56c0-.36.12-.7.33-1l.59-.78c.21-.28.33-.63.33-1V3.1c0-.82-.6-1.52-1.42-1.64L1.9.28C.91.13 0 .91 0 1.93v15c0 .8.59 1.5 1.4 1.64l6.66 1.1Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
