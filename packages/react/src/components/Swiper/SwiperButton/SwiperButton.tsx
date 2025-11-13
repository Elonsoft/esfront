import { SwiperDirection } from '../Swiper.types';
import { SwiperButtonProps } from './SwiperButton.types';

import clsx from 'clsx';
import { getSwiperButtonUtilityClass } from './SwiperButton.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import {
  IconArrowDownLineW500,
  IconArrowLeftLineW500,
  IconArrowRightLineW500,
  IconArrowUpLineW500,
} from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { useSwiperContext } from '../Swiper.context';

type SwiperButtonOwnerState = {
  classes?: SwiperButtonProps['classes'];
  prev: boolean;
  next: boolean;
  direction: SwiperDirection;
};

const useUtilityClasses = (ownerState: SwiperButtonOwnerState) => {
  const { classes, prev, next, direction } = ownerState;

  const slots = {
    root: ['root', prev && 'prev', next && 'next', direction],
  };

  return composeClasses(slots, getSwiperButtonUtilityClass, classes);
};

const SwiperButtonRoot = styled(Button, {
  name: 'ESSwiperButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { step, direction },
    } = props;
    return [styles.root, step < 0 && styles.prev, step > 0 && styles.next, styles[direction]];
  },
})<{ ownerState: SwiperButtonOwnerState }>(({ theme }) => ({
  position: 'absolute',
  backdropFilter: 'blur(10px)',
  borderRadius: 4,

  [`&.${buttonClasses.root}.${buttonClasses.variantText}.${buttonClasses.colorWhite}`]: {
    '--background': theme.vars.palette.black.A600,
  },

  variants: [
    {
      props: {
        direction: 'horizontal',
      },
      style: {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    {
      props: {
        direction: 'horizontal',
        prev: true,
      },
      style: {
        left: '16px',
      },
    },
    {
      props: {
        direction: 'horizontal',
        next: true,
      },
      style: {
        right: '16px',
      },
    },
    {
      props: {
        direction: 'vertical',
      },
      style: {
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
    {
      props: {
        direction: 'vertical',
        prev: true,
      },
      style: {
        top: '16px',
      },
    },
    {
      props: {
        direction: 'vertical',
        next: true,
      },
      style: {
        bottom: '16px',
      },
    },
  ],
}));

export const SwiperButton = (inProps: SwiperButtonProps) => {
  const {
    className,
    sx,
    step,
    labelPrev,
    labelNext,
    iconUp = <IconArrowUpLineW500 />,
    iconDown = <IconArrowDownLineW500 />,
    iconLeft = <IconArrowLeftLineW500 />,
    iconRight = <IconArrowRightLineW500 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSwiperButton',
  });

  const { direction, setActiveSlideByStep } = useSwiperContext();

  const onClick = () => {
    setActiveSlideByStep(step);
  };

  const ownerState = { ...props, prev: step < 0, next: step > 0, direction };
  const classes = useUtilityClasses(ownerState);

  return (
    <SwiperButtonRoot
      aria-label={step < 0 ? labelPrev : labelNext}
      className={clsx(classes.root, className)}
      color="white"
      ownerState={ownerState}
      sx={sx}
      onClick={onClick}
    >
      {direction === 'vertical' ? (step < 0 ? iconUp : iconDown) : step < 0 ? iconLeft : iconRight}
    </SwiperButtonRoot>
  );
};
