import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{useMDXComponents as a}from"./index-EQ2lhxnn.js";import{M as p,S as r}from"./index-C050cs3j.js";import{T as i,P as s,a as m}from"./theming.stories-D_oQRzTL.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-DKsiGs7M.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./index-CXQShRbs.js";import"./index-DzUv_9kz.js";import"./useTheme-B7wNoq1D.js";import"./identifier-haEvzVNA.js";import"./useTheme-Bas6BIKa.js";import"./styled-CkBBDypc.js";import"./Typography-56Df3xvc.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./TableRow-Dms1kNed.js";function o(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(t.h2,{id:"palette",children:"Palette"}),`
`,e.jsxs(t.p,{children:["Our design system build upon MUI palette and introduces new colors and hues. Palette can be customized via ",e.jsx(t.code,{children:"theme"}),` prop
in `,e.jsx(t.code,{children:"ThemeProvider"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { createTheme, palettes } from '@esfront/react';

const theme = createTheme({
  paletteDark: {
    ...palettes.common,
    ...palettes.dark,
  },
  paletteLight: {
    ...palettes.common,
    ...palettes.light,
  },
});

<ThemeProvider theme={theme}>...</ThemeProvider>;
`})}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(t.h2,{id:"typography",children:"Typography"}),`
`,e.jsxs(t.p,{children:[`Typography is based on the guidelines from the Material Design spec and is arranged into typography levels. Each level
has a font-size, line-height, font-weight and letter-spacing. Typography can be customized via `,e.jsx(t.code,{children:"typography"}),` key in
`,e.jsx(t.code,{children:"createTheme"})," options."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Default typography
import { createTypography } from '@esfront/react';

const theme = createTheme({
  paletteDark: {
    ...palettes.common,
    ...palettes.dark,
  },
  paletteLight: {
    ...palettes.common,
    ...palettes.light,
  },
  typography: createTypography,
});

<ThemeProvider theme={theme}>...</ThemeProvider>;
`})}),`
`,e.jsx(r,{of:m})]})}function N(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{N as default};
