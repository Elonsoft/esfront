import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SFSButtonRoot = styled(Button)(({ theme }) => ({
  textTransform: 'inherit',
  '&.MuiButton-root': {
    '&:hover .MuiSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .MuiSvgIcon-root, &:focus-visible .MuiTypography-root':
      {
        color: theme.palette.monoA.A600
      },

    '& .MuiTypography-root': {
      color: theme.palette.monoA.A550
    },

    '& .MuiSvgIcon-root': {
      color: theme.palette.monoA.A500
    }
  }
}));

export const SFSButton: typeof Button = ({ children, ...props }: any) => (
  <SFSButtonRoot color="tertiary" size="32" {...props}>
    {children}
  </SFSButtonRoot>
);
