import { DialogArrowProps, DialogCloseProps } from '../Dialog';
import { FileInfoNameProps } from '../FileInfo';
import { FormatSizeProps } from '../FormatSize';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps } from '../TableActions';

export interface Localization {
  components: {
    ESDialogArrow: {
      defaultProps: Pick<DialogArrowProps, 'labelPrev' | 'labelNext'>;
    };
    ESDialogClose: {
      defaultProps: Pick<DialogCloseProps, 'label'>;
    };
    ESFileInfoName: {
      defaultProps: Pick<FileInfoNameProps, 'labelDelete'>;
    };
    ESPaginationPages: {
      defaultProps: Pick<PaginationPagesProps, 'labelPrevPage' | 'labelNextPage' | 'labelPage'>;
    };
    ESPaginationRange: {
      defaultProps: Pick<PaginationRangeProps, 'labelItemsPerPage' | 'labelOf'>;
    };
    ESFormatSize: {
      defaultProps: Pick<FormatSizeProps, 'metricUnits' | 'binaryUnits'>;
    };
    ESSwiperButton: {
      defaultProps: Pick<SwiperButtonProps, 'labelPrev' | 'labelNext'>;
    };
    ESTableActions: {
      defaultProps: Pick<TableActionsProps, 'label'>;
    };
  };
}

export const en: Localization = {
  components: {
    ESDialogArrow: {
      defaultProps: {
        labelPrev: 'Previous',
        labelNext: 'Next'
      }
    },
    ESDialogClose: {
      defaultProps: {
        label: 'Close'
      }
    },
    ESFileInfoName: {
      defaultProps: {
        labelDelete: 'Delete'
      }
    },
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['B', 'KB', 'MB', 'GB', 'TB'],
        binaryUnits: ['B', 'KiB', 'MiB', 'GiB', 'TiB']
      }
    },
    ESPaginationPages: {
      defaultProps: {
        labelPrevPage: 'Go to previous page',
        labelNextPage: 'Go to next page',
        labelPage: 'page'
      }
    },
    ESPaginationRange: {
      defaultProps: {
        labelItemsPerPage: 'Per:',
        labelOf: 'of'
      }
    },
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Previous slide',
        labelNext: 'Next slide'
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
    ESDialogArrow: {
      defaultProps: {
        labelPrev: 'Назад',
        labelNext: 'Вперёд'
      }
    },
    ESDialogClose: {
      defaultProps: {
        label: 'Закрыть'
      }
    },
    ESFileInfoName: {
      defaultProps: {
        labelDelete: 'Удалить'
      }
    },
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'],
        binaryUnits: ['Б', 'КиБ', 'МиБ', 'ГиБ', 'ТиБ']
      }
    },
    ESPaginationPages: {
      defaultProps: {
        labelPrevPage: 'Предыдущая страница',
        labelNextPage: 'Следующая страница',
        labelPage: 'стр.'
      }
    },
    ESPaginationRange: {
      defaultProps: {
        labelItemsPerPage: 'По:',
        labelOf: 'из'
      }
    },
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Предыдущий слайд',
        labelNext: 'Следующий слайд'
      }
    },
    ESTableActions: {
      defaultProps: {
        label: 'Выбрано'
      }
    }
  }
};
