'use client';

import { useEffect, useRef } from 'react';

import { useEvent } from '../../hooks';

export interface UseDateInputSyncParams {
  /** The timestamp the state currently describes. */
  time: number | null;
  /** The timestamp the `value` prop describes, or `undefined` while the input is uncontrolled. */
  valueTime: number | null | undefined;
  /** Called with a timestamp that arrived through `value` and has to be written into the state. */
  onReceive: (time: number | null) => void;
  /** Called with a timestamp the state has arrived at and that has to be reported through `onChange`. */
  onSend: (time: number | null) => void;
}

/**
 * @internal
 * Keeps the timestamp of the state and the timestamp of the `value` prop in step, in both directions. Both compare
 * against the last timestamp the two agreed on, so a date echoed back through the prop is seen as the one the input has
 * just sent and neither resets a partially typed date nor loops.
 */
export const useDateInputSync = ({ time, valueTime, onReceive, onSend }: UseDateInputSyncParams) => {
  const syncedTime = useRef(valueTime ?? null);

  const receive = useEvent(onReceive);
  const send = useEvent(onSend);

  useEffect(() => {
    if (valueTime !== undefined && valueTime !== syncedTime.current) {
      syncedTime.current = valueTime;
      receive(valueTime);
    }
  }, [valueTime]);

  useEffect(() => {
    if (time !== syncedTime.current) {
      syncedTime.current = time;
      send(time);
    }
  }, [time]);
};
