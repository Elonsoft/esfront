import { CSSObject, keyframes, Theme } from '@mui/material/styles';

const DOTS_NUMBER = 8;

export const opacityKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const rotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const strokeArrayKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -110px;
  }
`;

export const generateStyleColorVariants = (theme: Theme) => [
  {
    props: {
      color: 'inherit',
    },
    style: {
      color: 'currentColor',
    },
  },
  {
    props: {
      color: 'monoA',
    },
    style: {
      color: theme.vars.palette.monoA[500],
    },
  },
  {
    props: {
      color: 'primary',
    },
    style: {
      color: theme.vars.palette.primary[300],
    },
  },
  {
    props: {
      color: 'secondary',
    },
    style: {
      color: theme.vars.palette.secondary[300],
    },
  },
];

export const generateDelayedOpacityAnimationStyles = () =>
  Array.from({ length: DOTS_NUMBER }).reduce<Record<string, CSSObject>>((prev, _, i) => {
    prev[`&:nth-of-type(${DOTS_NUMBER - i})`] = {
      animationDelay: `${(-i / DOTS_NUMBER) * 1000}ms`,
    };

    return prev;
  }, {});
