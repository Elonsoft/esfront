import { styled } from '@mui/material-pigment-css';

import { Tooltip, TooltipProps } from '../../Tooltip';

export const GalleryTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESGalleryTooltip',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root,
  }
)(() => ({
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0',
  },
}));
