## Setup

Wrap your application with `DateInputProvider`.

`createDateInputRegistry` builds the tokens the default `format` is written in — `YYYY`, `MM`, `dd`, `HH`, `mm`, `ss`
and `SSS`.

```tsx
import { createDateInputRegistry, DATE_INPUT_PLACEHOLDERS_RU, DateInputProvider } from '@esfront/react';

const registry = createDateInputRegistry(DATE_INPUT_PLACEHOLDERS_RU);

const App = () => {
  return <DateInputProvider registry={registry}>...</DateInputProvider>;
};
```

A registry can also be built by hand. A formatter is not tied to the token it is registered under, and a token that is
not registered is rendered as it is, the way a separator is:

```tsx
import { DateInputFormatter, DateInputMonthFormatter, DateInputYearFormatter } from '@esfront/react';

const registry = new Map<string, DateInputFormatter>([
  ['YYYY', new DateInputYearFormatter({ placeholder: 'Y' })],
  ['MM', new DateInputMonthFormatter({ placeholder: 'M' })],
]);
```
