import { MouseEvent, useCallback, useMemo, useRef, useState } from 'react';

/**
 * The hook that manages selection of the table rows.
 * @param data The table rows data array.
 * @param {Object} options The options object.
 * @param [options.key] The name of the field for objects comparison.
 * @param [options.initialState] The initial selection value.
 * @returns The selection state and methods.
 */
export const useTableSelection = <T extends object, K extends keyof T>(
  data: T[],
  options: { key: K; initialState?: Array<T[K]> }
) => {
  type V = T[K];

  const [selected, setSelected] = useState<Array<V>>(options.initialState || []);
  const lastValue = useRef<V | null>(null);

  const isAllSelected = useMemo(() => {
    return data.every((row) => selected.includes(row[options.key]));
  }, [data, selected, options.key]);

  const isSomeSelected = useMemo(() => {
    return data.some((row) => selected.includes(row[options.key])) && !isAllSelected;
  }, [data, selected, isAllSelected, options.key]);

  const toggle = useCallback(
    (value: V, params: { isSelected?: boolean; event?: React.ChangeEvent<HTMLInputElement> } = {}) => {
      const isSelected = params.isSelected ?? selected.indexOf(value) === -1;

      const currentIndex = data.findIndex((row) => row[options.key] === value);

      let lastIndex =
        params.event && (params.event.nativeEvent as unknown as MouseEvent).shiftKey && lastValue.current !== value
          ? data.findIndex((row) => row[options.key] === lastValue.current)
          : currentIndex;

      if (lastIndex === -1) {
        lastIndex = currentIndex;
      }

      const start = Math.min(currentIndex, lastIndex);
      const end = Math.max(currentIndex, lastIndex);

      lastValue.current = value;

      if (start > -1 && end > -1) {
        const range = data.slice(start, end + 1).map((row) => row[options.key]);
        let newSelected = selected.filter((id) => !range.includes(id));

        if (isSelected) {
          newSelected = newSelected.concat(range);
        }

        setSelected(newSelected);
      }
    },
    [data, selected, options.key]
  );

  const toggleAll = useCallback(
    (isSelected?: boolean) => {
      if (data) {
        let newSelected = selected.filter((id) => !data.find((row) => row[options.key] === id));

        if (isSelected ?? !isAllSelected) {
          newSelected = newSelected.concat(data.map((row) => row[options.key]));
        }

        setSelected(newSelected);
      }
    },
    [data, selected, isAllSelected, options.key]
  );

  return { selected, setSelected, isAllSelected, isSomeSelected, toggle, toggleAll };
};
