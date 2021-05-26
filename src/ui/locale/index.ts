import { ESEmptyStateProps } from '../EmptyState';

export interface Localization {
  components?: {
    ESEmptyState?: {
      defaultProps: Pick<ESEmptyStateProps, 'iconText'>;
    };
  };
}

export const en: Localization = {
  components: {
    ESEmptyState: {
      defaultProps: {
        iconText: 'Image'
      }
    }
  }
};

export const ru: Localization = {
  components: {
    ESEmptyState: {
      defaultProps: {
        iconText: 'Изображение'
      }
    }
  }
};
