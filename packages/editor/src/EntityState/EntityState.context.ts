import { createContext, useContext } from 'react';

export interface EntityStateContextValue {
  entities: Record<string, any>;
  set: (id: string, value: any) => void;
}

export const EntityStateContext = createContext<EntityStateContextValue | null>(null);

export const useEntityStateContext = () => {
  const value = useContext(EntityStateContext);

  if (value === null) {
    throw new Error('No provider for EntityStateContext.');
  }

  return value;
};
