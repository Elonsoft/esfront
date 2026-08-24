import { lockScroll } from '../../utils';
import { useEnhancedEffect } from '../useEnhancedEffect';

export const useScrollLock = (lock: boolean, container: HTMLElement) => {
  useEnhancedEffect(() => {
    if (lock) {
      return lockScroll(container);
    }
  }, [lock]);
};
