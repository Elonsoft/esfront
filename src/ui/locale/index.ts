import { SwiperProps } from '../Swiper';

export interface Localization {
  components?: {
    ESSwiper?: {
      defaultProps: Pick<SwiperProps<any>, 'buttonPrevLabel' | 'buttonNextLabel'>;
    };
  };
}

export const en: Localization = {
  components: {
    ESSwiper: {
      defaultProps: {
        buttonPrevLabel: 'Previous slide',
        buttonNextLabel: 'Next slide'
      }
    }
  }
};

export const ru: Localization = {
  components: {
    ESSwiper: {
      defaultProps: {
        buttonPrevLabel: 'Предыдущий слайд',
        buttonNextLabel: 'Следующий слайд'
      }
    }
  }
};
