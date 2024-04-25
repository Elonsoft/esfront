/**useFocusBox
 * Hook for highlighting text depending on a given search query.
 * @returns an array of objects representing text with highlighted parts, based on a given search query
 */
export const useFocusBox = (text: string, searchText: string) => {
  const words = searchText.toLowerCase().split(' ').filter(Boolean);
  const result: { text: string; highlighted: boolean }[] = [];

  while (text) {
    let start = text.length;
    let end = text.length;

    words.forEach((word) => {
      const position = text.toLowerCase().indexOf(word);

      if (~position && position < start) {
        start = position;
        end = start + word.length;
      }
    });

    result.push({ text: text.slice(0, start), highlighted: false });
    if (start < end) {
      result.push({ text: text.slice(start, end), highlighted: true });
    }

    const newText = text.slice(end);
    if (text === newText) {
      break;
    }
    text = newText;
  }

  return result;
};
