import { Story } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { TextFieldGroup } from './TextFieldGroup';

export const Demo: Story = ({ breakpoint }, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  return (
    <>
      <TextFieldGroup breakpoint={breakpoint}>
        <TextField required label={locale === 'en' ? 'First name' : 'Имя'} />
        <TextField required label={locale === 'en' ? 'Second name' : 'Фамилия'} />
        <TextField error required label={locale === 'en' ? 'Patronymic' : 'Отчество'} />
      </TextFieldGroup>
    </>
  );
};
