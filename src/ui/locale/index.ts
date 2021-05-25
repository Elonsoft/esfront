import { ESEmptyStateProps } from '../EmptyState';

export interface Localization {
  components?: {
    ESEmptyState?: {
      defaultProps: Pick<ESEmptyStateProps, 'labelImage'>;
    };
  };
}

export const en: Localization = {
  components: {
    ESEmptyState: {
      defaultProps: {
        labelImage: 'Image'
      }
    }
  }
};

export const ru: Localization = {
  components: {
    ESEmptyState: {
      defaultProps: {
        labelImage: 'Изображение'
      }
    }
  }
};
