import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{u as n}from"./useWindowEventListener-DbdMtNlQ.js";import{T as m}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./memoTheme-DzcScnLI.js";import"./styled-QckRPC_l.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const c=()=>{const[o,r]=p.useState(navigator.onLine);return n("online",()=>{r(navigator.onLine)}),n("offline",()=>{r(navigator.onLine)}),o},F={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},e={render:function(){const r=c();return t.jsxs(m,{variant:"body100",children:["Network status is ",t.jsx("b",{children:r?"ONLINE":"OFFLINE"}),"."]})}};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <Typography variant="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </Typography>;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const I=["Demo"];export{e as Demo,I as __namedExportsOrder,F as default};
