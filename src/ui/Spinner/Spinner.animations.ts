/* eslint-disable prettier/prettier */
import { keyframes, css } from '@mui/system';

const DOTS_AMOUNT = 8;

const opacityKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const rotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const strokeArrayKeyframe = keyframes`
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

const spinnerOpacityDelay = (duration: number) => {
  const animationDelay: Record<string, { animationDelay: string }> = {};
  for (let i = DOTS_AMOUNT - 1; i > 0; i--) {
    animationDelay[`& > *:nth-child(${DOTS_AMOUNT - i})`] = {
      animationDelay: `${-i / DOTS_AMOUNT * duration}ms`
    };
  }

  return animationDelay;
};

export const spinnerOpacityAnimation = (animatedElement: string, duration: number, ease: string) => ({
  ...spinnerOpacityDelay(duration),
  ...{
    [animatedElement]: css`
      animation: ${opacityKeyframe} ${duration}ms ${ease} infinite;
`
  }
});

export const spinnerRotateAnimation = (animatedElement: string, duration: number, ease: string) => ({
  [animatedElement]: css`
      animation: ${rotateKeyframe} ${duration}ms ${ease} infinite;
      transform-origin: center;
`
});

// use only for <circle> element
export const spinnerDashAnimation = (duration: number, ease: string, dashEase: string) => css`
    animation:
      ${strokeArrayKeyframe} ${duration}ms ${dashEase} infinite,
      ${rotateKeyframe} ${duration}ms ${ease} infinite;
    transform-origin: center;
`;
