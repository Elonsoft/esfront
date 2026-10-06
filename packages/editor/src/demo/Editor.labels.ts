export interface EditorLabels {
  toolbar: string;
  paragraph: string;
  heading1: string;
  heading2: string;
  heading3: string;
  bold: string;
  italic: string;
  underline: string;
  lineThrough: string;
  unorderedList: string;
  orderedList: string;
  link: string;
  unlink: string;
  linkUrl: string;
  linkApply: string;
  linkCancel: string;
  fileAttach: string;
  fileUploading: string;
  fileDone: string;
  fileFailed: string;
  fileRetry: string;
  fileUnknown: string;
}

export const DEFAULT_LABELS: EditorLabels = {
  toolbar: 'Formatting',
  paragraph: 'Plain text',
  heading1: 'Heading 1',
  heading2: 'Heading 2',
  heading3: 'Heading 3',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  lineThrough: 'Strikethrough',
  unorderedList: 'Bulleted list',
  orderedList: 'Numbered list',
  link: 'Add link',
  unlink: 'Remove link',
  linkUrl: 'Link address',
  linkApply: 'Apply',
  linkCancel: 'Cancel',
  fileAttach: 'Attach file',
  fileUploading: 'Uploading',
  fileDone: 'Uploaded',
  fileFailed: 'Upload failed',
  fileRetry: 'Try again',
  fileUnknown: 'File',
};

export const LABELS_RU: EditorLabels = {
  toolbar: 'Форматирование',
  paragraph: 'Обычный текст',
  heading1: 'Заголовок 1 уровня',
  heading2: 'Заголовок 2 уровня',
  heading3: 'Заголовок 3 уровня',
  bold: 'Жирный текст',
  italic: 'Курсивный текст',
  underline: 'Подчеркнутый текст',
  lineThrough: 'Зачеркнутый текст',
  unorderedList: 'Маркированный список',
  orderedList: 'Нумерованный список',
  link: 'Добавить ссылку',
  unlink: 'Удалить ссылку',
  linkUrl: 'Адрес ссылки',
  linkApply: 'Применить',
  linkCancel: 'Отмена',
  fileAttach: 'Прикрепить файл',
  fileUploading: 'Загрузка',
  fileDone: 'Загружено',
  fileFailed: 'Не удалось загрузить',
  fileRetry: 'Повторить',
  fileUnknown: 'Файл',
};
