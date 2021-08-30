import { SwiperProps } from '../Swiper';
import { TableActionsProps } from '../TableActions';
import { FormatSizeProps } from '../FormatSize';

export interface Localization {
  components: {
    ESFormatSize: {
      defaultProps: Pick<FormatSizeProps, 'metricUnits' | 'binaryUnits'>;
    };
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
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['B', 'KB', 'MB', 'GB', 'TB'],
        binaryUnits: ['B', 'KiB', 'MiB', 'GiB', 'TiB']
      }
    },
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
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'],
        binaryUnits: ['Б', 'КиБ', 'МиБ', 'ГиБ', 'ТиБ']
      }
    },
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
