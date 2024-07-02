## Requirements

This component relies on the date management library of your choice. Please install any of the libraries supported by
[date-io](https://github.com/dmtrKovalenko/date-io) and set up the date engine by wrapping your application with
`DateAdapterProvider`:

```tsx
import { DateAdapterProvider } from '@esfront/react';

import DateFnsAdapter from '@date-io/date-fns';
import { ru } from 'date-fns/locale';

const App = () => {
  return (
    <DateAdapterProvider adapter={DateFnsAdapter} locale={ru}>
      ...
    </DateAdapterProvider>
  );
};
```
