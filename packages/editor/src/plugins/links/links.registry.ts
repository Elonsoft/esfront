import type { LinksSchema } from './links.types';

import { createSchemaRegistry } from '../../utils';

export const { register, unregister, has, get } = createSchemaRegistry<LinksSchema>({ schema: 'Links' });
