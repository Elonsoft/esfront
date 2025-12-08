import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{u as n}from"./useWindowEventListener-DbdMtNlQ.js";import{T as m}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const c=()=>{const[o,r]=p.useState(navigator.onLine);return n("online",()=>{r(navigator.onLine)}),n("offline",()=>{r(navigator.onLine)}),o},I={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},e={render:function(){const r=c();return t.jsxs(m,{variant:"body100",children:["Network status is ",t.jsx("b",{children:r?"ONLINE":"OFFLINE"}),"."]})}};var i,s,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <Typography variant="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </Typography>;
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["Demo"];export{e as Demo,T as __namedExportsOrder,I as default};
