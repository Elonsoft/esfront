import { useMemo, useState } from 'react';

import { EntityStateProviderProps } from './EntityStateProvider.types';

import { EntityStateContext } from './EntityState.context';

export const EntityStateProvider = ({ children }: EntityStateProviderProps) => {
  const [entities, setEntities] = useState<Record<string, any>>({});

  const value = useMemo(() => {
    return {
      entities,
      setEntities,
      set: (id: string, value: any) => {
        setEntities((prev) => ({ ...prev, [id]: value }));

        // setTimeout(() => {
        //   onEditorChange(latestEditor.current.children, true);
        // });
      }
    };
  }, [entities]);

  return <EntityStateContext.Provider value={value}>{children}</EntityStateContext.Provider>;
};
