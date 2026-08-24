import { EventHandler } from 'react';

export type EventHandlers = Record<string, EventHandler<any>>;

/**
 * Extracts event handlers from a given object. A prop is considered an event handler if it is a function and its name
 * starts with `on`.
 */
export const extractEventHandlers = (
  object: Record<string, unknown> | undefined,
  excludeKeys: string[] = []
): EventHandlers => {
  if (object === undefined) {
    return {};
  }

  const result: EventHandlers = {};

  Object.keys(object)
    .filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop))
    .forEach((prop) => {
      result[prop] = object[prop] as EventHandler<any>;
    });

  return result;
};
