declare module 'react' {
  /**
   * Caches the result of a function for the duration of a single server request. Only available in the react-server
   * build of React, which is the only place this library imports it from.
   */
  export function cache<Args extends unknown[], Result>(fn: (...args: Args) => Result): (...args: Args) => Result;
}

export {};
