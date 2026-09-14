import{r as u,j as s}from"./iframe-Bc8-Q25v.js";import{u as a}from"./useDocumentEventListener-DgpvYq_r.js";import"./preload-helper-Dp1pzeXC.js";const l={tags:["autodocs"],title:"Hooks/useDocumentEventListener",parameters:{references:["useDocumentEventListener"]}},e={render:function(){const[t,c]=u.useState(0);return a("click",()=>{c(t+1)}),s.jsxs("div",{className:"body100",children:["Count of clicks on this page: ",s.jsx("b",{children:t}),"."]})}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });
    return <div className="body100">
        Count of clicks on this page: <b>{count}</b>.
      </div>;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const f=["Demo"];export{e as Demo,f as __namedExportsOrder,l as default};
