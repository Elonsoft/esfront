import type { BaseSchema } from './base.types';

import { createSchemaRegistry } from '../../utils';

export const { register, unregister, has, get } = createSchemaRegistry<BaseSchema>({ schema: 'Base' });
