import type { ListsSchema } from './lists.types';

import { createSchemaRegistry } from '../../utils';

export const { register, unregister, has, get } = createSchemaRegistry<ListsSchema>({ schema: 'Lists' });
