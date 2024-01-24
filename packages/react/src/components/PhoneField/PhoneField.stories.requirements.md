## Requirements

This component relies on the `libphonenumber-js`. Please install the latest version of this library and pass chosen
metadata by wrapping your application with `PhoneFieldProvider`.

```tsx
import { PhoneFieldProvider } from '@esfront/react';

import metadata from 'libphonenumber-js/max/metadata';

const App = () => {
  return <PhoneFieldProvider metadata={metadata}>...</PhoneFieldProvider>;
};
```
