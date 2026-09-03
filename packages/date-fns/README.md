# @esfront/date-fns

Modified [date-fns](https://date-fns.org) locales.

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/date-fns@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/date-fns
```

## Usage

```ts
import { format } from 'date-fns';
import { ru } from '@esfront/date-fns';

format(new Date(2024, 0, 1), 'd MMM yyyy', { locale: ru }); // 1 янв 2024
```

### Russian

The locale is the original `ru` locale with the abbreviated months of the `MMM` and `LLL` tokens stripped of the
trailing dot:

| Token | Locale              | Values                                                       |
| ----- | ------------------- | ------------------------------------------------------------ |
| `MMM` | `@esfront/date-fns` | янв фев мар апр мая июн июл авг сент окт нояб дек            |
| `MMM` | `date-fns`          | янв. фев. мар. апр. мая июн. июл. авг. сент. окт. нояб. дек. |
| `LLL` | `@esfront/date-fns` | янв фев март апр май июнь июль авг сент окт нояб дек         |
| `LLL` | `date-fns`          | янв. фев. март апр. май июнь июль авг. сент. окт. нояб. дек. |

Everything else, including parsing, is inherited from the original locale.
