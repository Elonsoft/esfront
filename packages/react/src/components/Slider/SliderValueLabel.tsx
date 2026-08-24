import { cloneElement, Fragment } from 'react';

import { SliderValueLabelProps } from './Slider.types';

/**
 * The label showing the value of a slider thumb. It clones the thumb to render itself inside of it, so that it is
 * positioned relatively to the thumb.
 */
export const SliderValueLabel = ({ children, className, value }: SliderValueLabelProps) => {
  if (!children) {
    return null;
  }

  return cloneElement(
    children,
    { className: children.props.className },
    <>
      {children.props.children}
      <span aria-hidden className={className}>
        {value}
      </span>
    </>
  );
};
