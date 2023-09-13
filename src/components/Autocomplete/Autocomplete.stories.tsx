import { useEffect, useRef, useState } from 'react';

import { Args, Story } from '@storybook/react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { Autocomplete, AutocompleteProps } from '.';

import { useBoolean } from '../../hooks';

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
  const [open, toggleOpen] = useBoolean(false);

  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const onChange = (user: User | null) => {
    toggleOpen();
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
    toggleOpen(false);
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
    AutocompleteProps<any>,
    | 'getOptionValue'
    | 'getOptionLabel'
    | 'options'
    | 'loading'
    | 'footer'
    | 'open'
    | 'onOpen'
    | 'onClose'
    | 'SearchProps'
  > = {
    getOptionValue: getUserValue,
    getOptionLabel: getUserLabel,
    options,
    loading,
    footer: args.footer,
    open,
    onOpen: toggleOpen,
    onClose: toggleOpen,
    SearchProps: {
      value: search,
      onChange: (e) => setSearch(e.target.value)
    }
  };

  return (
    <Box sx={{ maxWidth: '500px' }}>
      {args.multiple ? (
        <FormControl fullWidth focused={open || undefined}>
          <InputLabel htmlFor="component-helper">{locale === 'en' ? 'Users' : 'Пользователи'}</InputLabel>
          <Autocomplete
            multiple
            label={locale === 'en' ? 'Users' : 'Пользователи'}
            value={users}
            onChange={onChangeUsers}
            {...props}
          />
        </FormControl>
      ) : (
        <FormControl fullWidth focused={open || undefined}>
          <InputLabel htmlFor="component-helper">{locale === 'en' ? 'User' : 'Пользователь'}</InputLabel>
          <Autocomplete label={locale === 'en' ? 'User' : 'Пользователь'} value={user} onChange={onChange} {...props} />
        </FormControl>
      )}
    </Box>
  );
};
