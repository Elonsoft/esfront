/** Builds a file for a drop or paste fixture. */
export const fakeFile = (name: string, type = 'text/plain', contents = 'x') => {
  return new File([contents], name, { type });
};

/**
 * Builds the slice of `DataTransfer` the plugins read: the files of a drop, and the text or markup a
 * paste carries alongside them.
 */
export const dataTransfer = (
  { files = [], text = '', html = '' } = {} as {
    files?: File[];
    text?: string;
    html?: string;
  }
): DataTransfer => {
  return {
    files,
    getData: (type: string) => {
      if (type === 'text/plain') {
        return text;
      }

      return type === 'text/html' ? html : '';
    },
  } as unknown as DataTransfer;
};
