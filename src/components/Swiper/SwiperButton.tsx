import { SwiperButtonProps } from './Swiper.types';

import clsx from 'clsx';
import { getSwiperButtonUtilityClass } from './SwiperButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp } from '../../icons';

const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSwiperButtonUtilityClass, {});
};

const SwiperButtonRoot = styled(IconButton, {
  name: 'ESSwiperButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '&.MuiIconButton-root': {
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.palette.black.A600,
    borderRadius: 4,
    color: theme.palette.white[500],
    padding: 8,
    '& .MuiTouchRipple-root': {
      color: theme.palette.white.A150
    },
    '&:hover': {
      backgroundColor: theme.palette.black.A600,
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.white.A50
      }
    },
    '&:focus-visible': {
      '& .MuiTouchRipple-root': {
        color: theme.palette.white.A200
      }
    }
  }
}));

const createSwiperButtonComponent = (Icon: React.ComponentType) => {
  const Button: React.FC<SwiperButtonProps> = ({ className, label, onClick }) => {
    const classes = useUtilityClasses();

    return (
      <SwiperButtonRoot className={clsx(classes.root, className)} onClick={onClick} aria-label={label}>
        <Icon />
      </SwiperButtonRoot>
    );
  };

  return Button;
};

export const SwiperButtonDown = createSwiperButtonComponent(IconArrowDown);
export const SwiperButtonLeft = createSwiperButtonComponent(IconArrowLeft);
export const SwiperButtonRight = createSwiperButtonComponent(IconArrowRight);
export const SwiperButtonUp = createSwiperButtonComponent(IconArrowUp);
