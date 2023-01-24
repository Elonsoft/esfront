import { Story } from '@storybook/react';

import Box from '@mui/material/Box';

import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import { Breadcrumbs } from './Breadcrumbs';

const BREADCRUMBS = {
  en: [{ name: 'Home' }, { name: 'Catalog' }, { name: 'Electronics' }, { name: 'Tablets' }, { name: 'Apple' }],
  ru: [
    { name: 'Главная страница' },
    { name: 'Каталог' },
    { name: 'Электроника' },
    { name: 'Планшеты' },
    { name: 'Apple' }
  ]
};

export const Demo: Story = (args, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  return (
    <Box sx={{ padding: '25px 0' }}>
      <Breadcrumbs>
        {BREADCRUMBS[locale].map((item) => (
          <Breadcrumb key={item.name} component="button" onClick={() => console.log(item.name)}>
            {item.name}
          </Breadcrumb>
        ))}

        <Breadcrumb disabled>iPad Pro</Breadcrumb>
      </Breadcrumbs>
    </Box>
  );
};
