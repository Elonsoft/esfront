# @esfront/react

[![npm package](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://elonsoft.github.io/esfront)
[![npm package](https://img.shields.io/npm/v/@esfront/react)](https://www.npmjs.com/package/@esfront/react)
[![npm downloads](https://img.shields.io/npm/dm/@esfront/react)](https://www.npmjs.com/package/@esfront/react)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/elonsoft/esfront.svg)](https://isitmaintained.com/project/elonsoft/esfront 'Average time to resolve an issue')

For a full list of components and usage examples check out our
[documentation website](https://elonsoft.github.io/esfront).

## Server Components

`DefaultPropsProvider` works in both a server and a client tree, with two differences on the server.

Nested providers do not nest. Server components read the value from a store scoped to the request rather than to the
subtree, so a nested provider overwrites the outer one for every server component rendered after it. Client components
below the nested provider still see the nested value.

Code that runs outside the render tree — `generateMetadata`, route handlers, server actions — never passes through a
provider, so components rendered there fall back to the props they are given.

The provider value reaches client components through context, so it has to be serializable. Keep `slots` and `slotProps`
overrides at the call site rather than in the provider value.

Two rules come out of the conversion work and are worth stating explicitly, because neither produces an obvious error
message:

- A server component cannot pass a function to a component that is still a client component. That includes event
  handlers, render props, and a function passed as `children`. The fix is the ordinary one: move that call site into a
  client component.
- A server component cannot render `Context.Provider` for a context this library creates, because the imported value is
  a client reference rather than the context object.

Not every component renders on the server — some still depend on client-only APIs (hooks, browser APIs), `forwardRef`,
or inline event handlers, and keep the `'use client'` directive. Rather than list them here, where the list would drift
from the code, derive it yourself:

```bash
cd packages/react && npm run check:rsc
```

## Contributing

Read our [contributing guide](/CONTRIBUTING.md) to learn about our development process and how to propose bugfixes and
improvements.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
