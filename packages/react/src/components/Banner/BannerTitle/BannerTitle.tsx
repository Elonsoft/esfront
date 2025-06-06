import { BannerTitleProps } from './BannerTitle.types';

import clsx from 'clsx';
import { getBannerTitleUtilityClass } from './BannerTitle.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

type BannerTitleOwnerState = {
  classes?: BannerTitleProps['classes'];
};

const useUtilityClasses = (ownerState: BannerTitleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getBannerTitleUtilityClass, classes);
};

const BannerTitleRoot = styled(Typography, {
  name: 'ESBannerTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({}));

export const BannerTitle = (inProps: BannerTitleProps) => {
  const { className, children, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESBannerTitle',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BannerTitleRoot className={clsx(classes.root, className)} color="inherit" sx={sx} variant="body100Bold">
      {children}
    </BannerTitleRoot>
  );
};
