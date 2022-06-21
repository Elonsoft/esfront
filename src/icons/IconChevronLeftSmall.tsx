import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconChevronLeftSmall = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" sx={{ fontSize: 16 }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.46978 7.47067L9.46978 3.47067L10.5304 4.53133L7.06077 8.001L10.5304 11.4707L9.46978 12.5313L5.46978 8.53133L4.93945 8.001L5.46978 7.47067Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
