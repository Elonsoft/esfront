import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { svgIconClasses } from '../../SvgIcon';

export const SFSButtonBadge = styled(Typography)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.vars.palette.secondary[300],

  [`&, & .${svgIconClasses.root}`]: {
    color: `${theme.vars.palette.black.A800} !important`
  }
})) as typeof Typography;
