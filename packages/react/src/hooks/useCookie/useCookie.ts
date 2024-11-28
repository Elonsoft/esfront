'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

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
    cookie.push(`max-age=${attributes.maxAge}`);
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

function readCookie(name: string) {
  const cookie = document.cookie.split('; ').find((c) => c.startsWith(`${encodeURIComponent(name)}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.slice(cookie.indexOf('=') + 1));
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
  const { writeInitialValue, writeInitialValueAttributes } = options || {};

  const initializer = useMemo((): string | T => {
    try {
      const cookie = readCookie(name);

      if (cookie !== null) {
        return cookie;
      }

      return (initialValue ?? null) as T;
    } catch {
      return (initialValue ?? null) as T;
    }
  }, [name]);

  const [state, setState] = useState(() => ({ name, value: initializer }));

  if (state.name !== name) {
    setState({ name, value: initializer });
  }

  const value = state.name === name ? state.value : initializer;

  useEffect(() => {
    if (initialValue === null || initialValue === undefined || !writeInitialValue) {
      return;
    }

    try {
      if (readCookie(name) === null) {
        document.cookie = getCookie(name, initialValue, writeInitialValueAttributes);
      }
    } catch {
      // The cookie is not accessible, nothing to write.
    }
  }, [name]);

  const update = useCallback(
    (data: string, attributes?: Attributes) => {
      document.cookie = getCookie(name, data, attributes);
      setState({ name, value: data });
    },
    [name]
  );

  const remove = useCallback(() => {
    document.cookie = getCookie(name, '', { expires: new Date(0).toUTCString() });

    if (initialValue !== null && initialValue !== undefined && writeInitialValue) {
      document.cookie = getCookie(name, initialValue, writeInitialValueAttributes);
    }

    setState({ name, value: (initialValue ?? null) as T });
  }, [name, initialValue, writeInitialValue, writeInitialValueAttributes]);

  return [value, update, remove];
};
