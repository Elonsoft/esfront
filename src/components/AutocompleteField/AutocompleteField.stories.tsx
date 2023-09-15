import { useEffect, useRef, useState } from 'react';

import { Args, Story } from '@storybook/react';

import Box from '@mui/material/Box';

import { AutocompleteField, AutocompleteFieldProps } from '.';

import { AutocompleteFooter, AutocompleteHeader } from '../Autocomplete';

interface User {
  id: number;
  name: string;
}

const USERS: { en: User[]; ru: User[] } = {
  en: [],
  ru: []
};

for (let i = 0; i < 20; i++) {
  USERS.en.push({
    id: i + 1,
    name: `John Doe ${i + 1}`
  });

  USERS.ru.push({
    id: i + 1,
    name: `Иванов Иван ${i + 1}`
  });
}

const getUserValue = (user: User) => user.id;
const getUserLabel = (user: User) => user.name;

export const Demo: Story<Args> = (args, { globals: { locale } }) => {
  const [options, setOptions] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const onChange = (user: User | null) => {
    setUser(user);
  };

  const onChangeUsers = (users: User[]) => {
    setUsers(users);
  };

  const [search, setSearch] = useState('');

  useEffect(() => {
    setOptions(USERS[locale as 'en' | 'ru']);
    setSearch('');
    setLoading(false);
  }, [locale]);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setLoading(true);

    timeout.current = setTimeout(() => {
      setOptions(USERS[locale as 'en' | 'ru'].filter((e) => e.name.toLowerCase().includes(search.toLowerCase())));
      setLoading(false);
    }, 1000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };
  }, [search]);

  const props: Pick<
    AutocompleteFieldProps<any>,
    | 'closeAfterSelect'
    | 'disabled'
    | 'error'
    | 'header'
    | 'footer'
    | 'fullWidth'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'helperText'
    | 'loading'
    | 'options'
    | 'placeholder'
    | 'required'
    | 'size'
    | 'InputProps'
    | 'onBlur'
  > = {
    closeAfterSelect: args.closeAfterSelect,
    disabled: args.disabled,
    error: args.error,
    header: args.header && <AutocompleteHeader>{args.header}</AutocompleteHeader>,
    footer: args.footer && <AutocompleteFooter>{args.footer}</AutocompleteFooter>,
    fullWidth: true,
    getOptionLabel: getUserLabel,
    getOptionValue: getUserValue,
    helperText: args.helperText,
    loading,
    options,
    placeholder: args.placeholder,
    required: args.required,
    size: args.size,
    InputProps: {
      onLoadMore: args.onLoadMore,
      SearchProps: {
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    },
    onBlur: args.onBlur
  };

  return (
    <Box sx={{ maxWidth: '500px' }}>
      {args.multiple ? (
        <AutocompleteField
          multiple
          label={locale === 'en' ? 'Users' : 'Пользователи'}
          value={users}
          onChange={onChangeUsers}
          {...props}
        />
      ) : (
        <AutocompleteField
          label={locale === 'en' ? 'Users' : 'Пользователи'}
          value={user}
          onChange={onChange}
          {...props}
        />
      )}
    </Box>
  );
};
