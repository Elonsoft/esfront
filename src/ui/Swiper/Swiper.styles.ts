import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    ...(theme.components?.ESSwiper?.styleOverrides?.root as any)
  },
  horizontal: {
    flexDirection: 'column',
    '& $container': {
      gridAutoFlow: 'column'
    },
    '& $button.MuiIconButton-root': {
      top: '50%',
      transform: 'translateY(-50%)'
    },
    '& $buttonPrev': {
      left: 16
    },
    '& $buttonNext': {
      right: 16
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.horizontal as any)
  },
  vertical: {
    flexDirection: 'row',
    height: '100%',
    width: 'max-content',
    '& $container': {
      gridAutoFlow: 'row',
      height: '100%'
    },
    '& $button.MuiIconButton-root': {
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '& $buttonPrev': {
      top: 16
    },
    '& $buttonNext': {
      bottom: 16
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.vertical as any)
  },
  wrapper: {
    position: 'relative',
    ...(theme.components?.ESSwiper?.styleOverrides?.wrapper as any)
  },
  container: {
    display: 'grid',
    justifyContent: 'flex-start',
    overflow: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.container as any)
  },
  containerSnapAlignCenter: {
    '& > *': {
      scrollSnapAlign: 'center'
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.containerSnapAlignCenter as any)
  },
  containerSnapAlignStart: {
    '& > *': {
      scrollSnapAlign: 'start'
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.containerSnapAlignStart as any)
  },
  containerSnap: {
    scrollSnapType: 'x mandatory',
    '& > *': {
      '&:first-child': {
        scrollSnapAlign: 'start'
      },
      '&:last-child': {
        scrollSnapAlign: 'end'
      }
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.containerSnap as any)
  },
  button: {
    '&.MuiIconButton-root': {
      position: 'absolute'
    },
    ...(theme.components?.ESSwiper?.styleOverrides?.button as any)
  },
  buttonPrev: {
    ...(theme.components?.ESSwiper?.styleOverrides?.buttonPrev as any)
  },
  buttonNext: {
    ...(theme.components?.ESSwiper?.styleOverrides?.buttonNext as any)
  }
}));

export type SwiperClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element if direction='horizontal'. */
  horizontal: string;
  /** Styles applied to the button element if direction='vertical'. */
  vertical: string;
  /** Styles applied to the wrapper element. */
  wrapper: string;
  /** Styles applied to the container element. */
  container: string;
  /** Styles applied to the container element if snap='true'. */
  containerSnap: string;
  /** Styles applied to the container element if snap=true and align='center'. */
  containerSnapAlignCenter: string;
  /** Styles applied to the container element if snap=true and align='start'. */
  containerSnapAlignStart: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the prev button element. */
  buttonPrev: string;
  /** Styles applied to the next button element. */
  buttonNext: string;
};
export type SwiperClassKey = keyof SwiperClasses;
