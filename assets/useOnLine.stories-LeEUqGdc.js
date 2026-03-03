import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as c}from"./index-Wm5baAvf.js";import{u as t}from"./useWindowEventListener-qwmc7qq6.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";const m=()=>{const[s,e]=c.useState(navigator.onLine);return t("online",()=>{e(navigator.onLine)}),t("offline",()=>{e(navigator.onLine)}),s},f={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},n={render:function(){const e=m();return r.jsxs("div",{className:"body100",children:["Network status is ",r.jsx("b",{children:e?"ONLINE":"OFFLINE"}),"."]})}};var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <div className="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </div>;
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const l=["Demo"];export{n as Demo,l as __namedExportsOrder,f as default};
