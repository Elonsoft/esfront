import { styled } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';

export const GalleryActionsButton = styled(Button, {
  name: 'ESGalleryActionsButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.white.A800,
      hover: theme.palette.white.A50,
      focus: theme.palette.white.A200,
      active: theme.palette.white.A150
    }),

    [theme.breakpoints.up('tabletXS')]: {
      ...theme.mixins.button({
        background: theme.palette.white.A200,
        color: theme.palette.white[500],
        hover: theme.palette.white.A50,
        focus: theme.palette.white.A200,
        active: theme.palette.white.A150
      })
    }
  }
})) as typeof Button;
