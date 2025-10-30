import { useCallback } from 'react';

/**
 * The hook that wraps a Clipboard API and exposes read and write methods.
 * @returns The methods for reading from and writing to clipboard.
 */
export const useClipboard = () => {
  const writeText = useCallback((data: string) => {
    return window.navigator.clipboard.writeText(data);
  }, []);

  const write = useCallback((data: ClipboardItems) => {
    return window.navigator.clipboard.write(data);
  }, []);

  const readText = useCallback(() => {
    return window.navigator.clipboard.readText();
  }, []);

  const read = useCallback(() => {
    return window.navigator.clipboard.read();
  }, []);

  return {
    writeText,
    write,
    readText,
    read,
    isReadSupported: typeof window !== 'undefined' && !!window?.navigator?.clipboard?.readText,
  };
};
