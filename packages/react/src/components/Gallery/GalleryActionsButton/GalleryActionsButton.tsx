import { styled } from '@mui/material-pigment-css';

import { Button, buttonClasses } from '../../Button';

export const GalleryActionsButton = styled(Button, {
  name: 'ESGalleryActionsButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    [`&.${buttonClasses.variantText}`]: {
      '--background': 'transparent',
      '--text': theme.vars.palette.white.A800,
      '--hovered': theme.vars.palette.white.A50,
      '--pressed': theme.vars.palette.white.A150,

      [theme.breakpoints.up('tabletXS')]: {
        '--background': theme.vars.palette.white.A200,
        '--text': theme.vars.palette.white[500],
        '--hovered': theme.vars.palette.white.A50,
        '--pressed': theme.vars.palette.white.A150,
      },
    },
  },
})) as typeof Button;
