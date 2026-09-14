import{u as o,j as e,M as r}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Usage",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page."}),`
`,e.jsx(n.h2,{id:"quick-start",children:"Quick start"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '@esfront/theme/settings';

@use '@esfront/theme/baseline';
@use '@esfront/theme/components';
@use '@esfront/theme/utilities';

@use '@esfront/theme/presets/colors' as colorsPresets;
@use '@esfront/theme/presets/shadows' as shadowsPresets;

@include settings.include;

@include baseline.include;
@include components.include;
@include utilities.include;

html {
  @include colorsPresets.common;

  @include colorsPresets.light;
  @include shadowsPresets.light;
}
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"baseline"}),` layer is an opt-in set of global element styles. It does not set a font family, so declare the one your
theme uses yourself:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`body {
  font-family: 'Nunito Sans', sans-serif;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ReactDOM from 'react-dom';

import { DefaultPropsProvider, en, EmptyState } from '@esfront/react';

import './theme.scss';

const Application = () => {
  return (
    <DefaultPropsProvider value={en.components}>
      <EmptyState heading="There are no entities yet" subheading="Do you want to create the first entity?" />
    </DefaultPropsProvider>
  );
};

ReactDOM.render(<Application />, document.querySelector('#root'));
`})}),`
`,e.jsx(n.h2,{id:"default-props",children:"Default props"}),`
`,e.jsxs(n.p,{children:["Every component falls back to the default props supplied by the closest ",e.jsx(n.code,{children:"DefaultPropsProvider"}),`, keyed by the component
name. Props passed to a component always win over the ones coming from the provider.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<DefaultPropsProvider
  value={{
    ...en.components,
    ESDrawer: { defaultProps: { anchor: 'right' } },
  }}
>
  <Application />
</DefaultPropsProvider>
`})}),`
`,e.jsx(n.p,{children:`A nested provider replaces the value of the outer one rather than merging with it, so a subtree has to restate every
default it needs. The value is passed to the context as is, therefore it should be memoized.`}),`
`,e.jsxs(n.p,{children:["The localization objects, ",e.jsx(n.code,{children:"en"})," and ",e.jsx(n.code,{children:"ru"}),`, are ordinary provider values. Spread the one you need before your own defaults,
as shown above.`]}),`
`,e.jsx(n.h2,{id:"typescript",children:"Typescript"}),`
`,e.jsxs(n.p,{children:["The default props of every component are typed through the ",e.jsx(n.code,{children:"ComponentsPropsList"}),` interface, which is loaded for you when
you import from `,e.jsx(n.code,{children:"@esfront/react"}),". To register a component of your own, augment the module that declares the interface:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { MyButtonProps } from './MyButton';

declare module '@esfront/react/lib/theming/DefaultPropsProvider/DefaultPropsProvider.types' {
  interface ComponentsPropsList {
    MyButton: MyButtonProps;
  }
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MyButton"})," then becomes a valid key of the ",e.jsx(n.code,{children:"DefaultPropsProvider"})," value, and ",e.jsx(n.code,{children:"useDefaultProps"}),` accepts it as a name. The
augmentation only needs to appear once, anywhere in the project.`]})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default};
