import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{u as n}from"./useWindowEventListener-DbdMtNlQ.js";import{T as m}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-CJcpijc4.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./useTheme-B2nYkSwK.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";const c=()=>{const[o,r]=p.useState(navigator.onLine);return n("online",()=>{r(navigator.onLine)}),n("offline",()=>{r(navigator.onLine)}),o},F={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},e={render:function(){const r=c();return t.jsxs(m,{variant:"body100",children:["Network status is ",t.jsx("b",{children:r?"ONLINE":"OFFLINE"}),"."]})}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <Typography variant="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </Typography>;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const I=["Demo"];export{e as Demo,I as __namedExportsOrder,F as default};
