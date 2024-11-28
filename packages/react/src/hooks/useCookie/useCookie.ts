import { useCallback, useMemo, useState } from 'react';

interface Attributes {
  expires?: string;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'None' | 'Lax' | 'Strict';
}

function getCookie(name: string, data: string, attributes?: Attributes) {
  const cookie: string[] = [];
  cookie.push(`${encodeURIComponent(name)}=${encodeURIComponent(data)}`);

  if (attributes?.expires) {
    cookie.push(`expires=${attributes.expires}`);
  }

  if (attributes?.maxAge) {
    cookie.push(`max-age=${attributes.expires}`);
  }

  if (attributes?.path) {
    cookie.push(`path=${attributes.path}`);
  }

  if (attributes?.domain) {
    cookie.push(`domain=${attributes.domain}`);
  }

  if (attributes?.secure) {
    cookie.push(`secure`);
  }

  if (attributes?.sameSite) {
    cookie.push(`samesite=${attributes.sameSite}`);
  }

  return cookie.join('; ');
}

/**
 * The hook that returns the current value of a cookie, a callback to update the cookie and a callback to remove the cookie.
 * @param name The name of the cookie.
 * @param initialValue The initial value to set, if cookie is empty.
 * @param {Object} options The options object.
 * @param {boolean} [options.writeInitialValue=false] If set true, writes the initial value to the storage when it does not exist.
 * @param {Object} [options.writeInitialValueAttributes] The cookie attribute values.
 * @returns The current value of a cookie, a callback to update the cookie and a callback to remove the cookie.
 */
export const useCookie = <T extends string | null = null>(
  name: string,
  initialValue?: T,
  options?: {
    writeInitialValue?: boolean;
    writeInitialValueAttributes?: Attributes;
  }
): [string | T, (data: string, attributes?: Attributes) => void, () => void] => {
  const initializer = useMemo(() => {
    try {
      const cookie = document.cookie.split('; ').find((c) => c.startsWith(`${encodeURIComponent(name)}=`));

      if (cookie) {
        return decodeURIComponent(cookie.slice(cookie.indexOf('=') + 1));
      }

      if (initialValue && options?.writeInitialValue) {
        document.cookie = getCookie(name, initialValue, options?.writeInitialValueAttributes);
      }

      return (initialValue ?? null) as T;
    } catch {
      return (initialValue ?? null) as T;
    }
  }, [name]);

  const [value, setValue] = useState<string | T>(initializer);

  const update = useCallback((data: string, attributes?: Attributes) => {
    document.cookie = getCookie(name, data, attributes);
    setValue(data);
  }, []);

  const remove = useCallback(() => {
    update('', { expires: new Date(0).toUTCString() });
    setValue('');
  }, []);

  return [value, update, remove];
};
