import { useMemo } from 'react';

import { SwiperDirection } from './Swiper.types';

export const usePropertiesMapping = (direction: SwiperDirection) => {
  return useMemo(() => {
    return direction === 'horizontal'
      ? ({
          scrollSize: 'scrollWidth',
          clientSize: 'clientWidth',
          scrollPosition: 'scrollLeft',
          offset: 'offsetLeft',
          start: 'left',
          end: 'right',
          movement: 'movementX',
        } as const)
      : ({
          scrollSize: 'scrollHeight',
          clientSize: 'clientHeight',
          scrollPosition: 'scrollTop',
          offset: 'offsetTop',
          start: 'top',
          end: 'bottom',
          movement: 'movementY',
        } as const);
  }, [direction]);
};
