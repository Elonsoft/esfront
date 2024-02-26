import { useCallback, useMemo, useState } from 'react';

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

  const isAllSelected = useMemo(() => {
    return data.every((row) => selected.includes(row[options.key]));
  }, [data, selected, options.key]);

  const isSomeSelected = useMemo(() => {
    return data.some((row) => selected.includes(row[options.key])) && !isAllSelected;
  }, [data, selected, isAllSelected, options.key]);

  const toggle = useCallback(
    (value: V, isSelected?: boolean) => {
      const index = selected.indexOf(value);
      if (isSelected ?? index === -1) {
        setSelected(selected.concat(value));
      } else {
        const newSelected = selected.slice();
        newSelected.splice(index, 1);
        setSelected(newSelected);
      }
    },
    [selected]
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
