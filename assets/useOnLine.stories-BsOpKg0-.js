import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as p}from"./index-DIDRz_s2.js";import{u as t}from"./useWindowEventListener-DbdMtNlQ.js";import{T as m}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const c=()=>{const[n,e]=p.useState(navigator.onLine);return t("online",()=>{e(navigator.onLine)}),t("offline",()=>{e(navigator.onLine)}),n},l={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},r={render:function(){const e=c();return o.jsxs(m,{variant:"body100",children:["Network status is ",o.jsx("b",{children:e?"ONLINE":"OFFLINE"}),"."]})}};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <Typography variant="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </Typography>;
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const x=["Demo"];export{r as Demo,x as __namedExportsOrder,l as default};
