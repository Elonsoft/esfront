import{r as c,d as r,j as t}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";const d=()=>{const[s,e]=c.useState(navigator.onLine);return r("online",()=>{e(navigator.onLine)}),r("offline",()=>{e(navigator.onLine)}),s},m={tags:["autodocs"],title:"Hooks/useOnLine",parameters:{references:["useOnLine"]}},n={render:function(){const e=d();return t.jsxs("div",{className:"body100",children:["Network status is ",t.jsx("b",{children:e?"ONLINE":"OFFLINE"}),"."]})}};var o,i,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const isOnLine = useOnLine();
    return <div className="body100">
        Network status is <b>{isOnLine ? 'ONLINE' : 'OFFLINE'}</b>.
      </div>;
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const O=["Demo"];export{n as Demo,O as __namedExportsOrder,m as default};
