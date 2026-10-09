import{r,j as e}from"./iframe-WZaTcFld.js";import{u as d}from"./useElementEventListener-DPPQSfuc.js";import"./preload-helper-Dp1pzeXC.js";const f={tags:["autodocs"],title:"Hooks/useElementEventListener",parameters:{references:["useElementEventListener"]}},s={render:function(){const[l,c]=r.useState(0),t=r.useRef(null);return d(t,"click",()=>{c(i=>i+1)}),e.jsxs("div",{className:"flex flex-col gap-16",style:{alignItems:"flex-start"},children:[e.jsx("div",{ref:t,className:"body100",style:{padding:"16px",border:"1px solid var(--es-mono-a-a150)",borderRadius:"4px"},children:"Click me"}),e.jsxs("div",{className:"body100",children:["Count of clicks on the box: ",e.jsx("b",{children:l}),"."]})]})}};var o,n,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render() {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    useElementEventListener(ref, 'click', () => {
      setCount(value => value + 1);
    });
    return <div className="flex flex-col gap-16" style={{
      alignItems: 'flex-start'
    }}>
        <div ref={ref} className="body100" style={{
        padding: '16px',
        border: '1px solid var(--es-mono-a-a150)',
        borderRadius: '4px'
      }}>
          Click me
        </div>
        <div className="body100">
          Count of clicks on the box: <b>{count}</b>.
        </div>
      </div>;
  }
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const v=["Demo"];export{s as Demo,v as __namedExportsOrder,f as default};
