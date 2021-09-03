import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/core';
import { getSwiperButtonUtilityClass } from './SwiperButton.classes';

import { SwiperButtonProps } from './Swiper.types';

import IconButton from '@mui/material/IconButton';

import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from '../icons';

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

export const SwiperButtonDown = createSwiperButtonComponent(ArrowDownIcon);
export const SwiperButtonLeft = createSwiperButtonComponent(ArrowLeftIcon);
export const SwiperButtonRight = createSwiperButtonComponent(ArrowRightIcon);
export const SwiperButtonUp = createSwiperButtonComponent(ArrowUpIcon);
