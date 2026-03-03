import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r as u}from"./index-Wm5baAvf.js";import{u as a}from"./useDocumentEventListener-D39Pm-AK.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";const x={tags:["autodocs"],title:"Hooks/useDocumentEventListener",parameters:{references:["useDocumentEventListener"]}},e={render:function(){const[t,c]=u.useState(0);return a("click",()=>{c(t+1)}),o.jsxs("div",{className:"body100",children:["Count of clicks on this page: ",o.jsx("b",{children:t}),"."]})}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useDocumentEventListener('click', () => {
      setCount(count + 1);
    });
    return <div className="body100">
        Count of clicks on this page: <b>{count}</b>.
      </div>;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const E=["Demo"];export{e as Demo,E as __namedExportsOrder,x as default};
