import { SwiperDirection } from '../Swiper.types';
import { SwiperButtonProps } from './SwiperButton.types';

import clsx from 'clsx';
import { getSwiperButtonUtilityClass } from './SwiperButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp } from '../../../icons';
import { useSwiperContext } from '../Swiper.context';

type SwiperButtonOwnerState = {
  classes?: SwiperButtonProps['classes'];
  step: number;
  direction: SwiperDirection;
};

const useUtilityClasses = (ownerState: SwiperButtonOwnerState) => {
  const { classes, step, direction } = ownerState;

  const slots = {
    root: ['root', step < 0 && 'prev', step > 0 && 'next', direction]
  };

  return composeClasses(slots, getSwiperButtonUtilityClass, classes);
};

const SwiperButtonRoot = styled(IconButton, {
  name: 'ESSwiperButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { step, direction }
    } = props;
    return [styles.root, step < 0 && styles.prev, step > 0 && styles.next, styles[direction]];
  }
})<{ ownerState: SwiperButtonOwnerState }>(({ theme, ownerState }) => ({
  position: 'absolute',

  ...(ownerState.direction === 'horizontal' && {
    top: '50%',
    transform: 'translateY(-50%)',

    ...(ownerState.step < 0 && {
      left: '16px'
    }),

    ...(ownerState.step > 0 && {
      right: '16px'
    })
  }),

  ...(ownerState.direction === 'vertical' && {
    left: '50%',
    transform: 'translateX(-50%)',

    ...(ownerState.step < 0 && {
      top: '16px'
    }),

    ...(ownerState.step > 0 && {
      bottom: '16px'
    })
  }),

  '&.MuiIconButton-root.MuiIconButton-root': {
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

export const SwiperButton = (inProps: SwiperButtonProps) => {
  const {
    className,
    sx,
    step,
    labelPrev,
    labelNext,
    iconUp = <IconArrowUp />,
    iconDown = <IconArrowDown />,
    iconLeft = <IconArrowLeft />,
    iconRight = <IconArrowRight />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSwiperButton'
  });

  const { direction, setActiveSlideByStep } = useSwiperContext();

  const onClick = () => {
    setActiveSlideByStep(step);
  };

  const ownerState = { ...props, step, direction };
  const classes = useUtilityClasses(ownerState);

  return (
    <SwiperButtonRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      sx={sx}
      onClick={onClick}
      aria-label={step < 0 ? labelPrev : labelNext}
    >
      {direction === 'vertical' ? (step < 0 ? iconUp : iconDown) : step < 0 ? iconLeft : iconRight}
    </SwiperButtonRoot>
  );
};
