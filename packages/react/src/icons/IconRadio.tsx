// eslint-disable-next-line no-restricted-imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const IconRadio = (props: SvgIconProps) => {
  return (
    <SvgIcon height="20" sx={{ fill: 'none' }} viewBox="0 0 20 20" width="20" {...props}>
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <circle cx="10" cy="10" fill="currentColor" r="3" />
    </SvgIcon>
  );
};
