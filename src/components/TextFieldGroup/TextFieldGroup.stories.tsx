import { Story } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { TextFieldGroup } from './TextFieldGroup';

export const Demo: Story = ({ breakpoint }, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  return (
    <>
      <TextFieldGroup breakpoint={breakpoint}>
        <TextField label={locale === 'en' ? 'First name' : 'Имя'} required />
        <TextField label={locale === 'en' ? 'Second name' : 'Фамилия'} required />
        <TextField error label={locale === 'en' ? 'Patronymic' : 'Отчество'} required />
      </TextFieldGroup>
    </>
  );
};
