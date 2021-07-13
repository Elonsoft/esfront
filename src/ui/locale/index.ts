import { SwiperProps } from '../Swiper';
import { TableActionsProps } from '../TableActions';

export interface Localization {
  components: {
    ESSwiper: {
      defaultProps: Pick<SwiperProps<any>, 'buttonPrevLabel' | 'buttonNextLabel'>;
    };
    ESTableActions: {
      defaultProps: Pick<TableActionsProps, 'label'>;
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
    },
    ESTableActions: {
      defaultProps: {
        label: 'Selected'
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
    },
    ESTableActions: {
      defaultProps: {
        label: 'Выбрано'
      }
    }
  }
};
