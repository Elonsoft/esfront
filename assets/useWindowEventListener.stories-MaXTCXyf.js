import{r as a,d as i,j as s}from"./iframe-Bc8-Q25v.js";import"./preload-helper-Dp1pzeXC.js";const p={tags:["autodocs"],title:"Hooks/useWindowEventListener",parameters:{references:["useWindowEventListener"]}},e={render:function(){const[t,c]=a.useState(0);return i("click",()=>{c(t+1)}),s.jsxs("div",{className:"body100",children:["Count of clicks on this page: ",s.jsx("b",{children:t}),"."]})}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    useWindowEventListener('click', () => {
      setCount(count + 1);
    });
    return <div className="body100">
        Count of clicks on this page: <b>{count}</b>.
      </div>;
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const l=["Demo"];export{e as Demo,l as __namedExportsOrder,p as default};
