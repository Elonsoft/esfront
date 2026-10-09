import{r,j as e}from"./iframe-WZaTcFld.js";import{u as p}from"./useRefState-BppT1cFh.js";import{u as m}from"./useResizeObserver-DfGkp_cm.js";import"./preload-helper-Dp1pzeXC.js";import"./useForceUpdate-Bnb30UZl.js";const w={tags:["autodocs"],title:"Hooks/useRefState",parameters:{references:["useRefState"]}},t={render:function(){const[o,n]=r.useState(!1),[l,c]=r.useState(0),[u,x]=p();return m(u,s=>{c(s[0].target.clientWidth)}),e.jsxs("div",{className:"flex flex-col gap-16",style:{alignItems:"flex-start"},children:[e.jsxs("label",{className:"body100 flex gap-8",children:[e.jsx("input",{checked:o,type:"checkbox",onChange:()=>n(s=>!s)}),"Mount the observed box"]}),o&&e.jsx("div",{ref:x,className:"body100",style:{resize:"horizontal",overflow:"auto",width:"200px",padding:"8px",border:"1px solid var(--es-mono-a-a150)",borderRadius:"4px"},children:"Drag my bottom right corner"}),e.jsxs("div",{className:"body100",children:["Observed width: ",l,"px"]})]})}};var a,d,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const [isMounted, setMounted] = useState(false);
    const [width, setWidth] = useState(0);

    // A plain \`useRef\` would not work here: the box is mounted after the first render, and writing
    // to a ref does not re-render, so \`useResizeObserver\` would never pick the node up.
    const [box, setBox] = useRefState<HTMLDivElement>();
    useResizeObserver(box, entries => {
      setWidth(entries[0].target.clientWidth);
    });
    return <div className="flex flex-col gap-16" style={{
      alignItems: 'flex-start'
    }}>
        <label className="body100 flex gap-8">
          <input checked={isMounted} type="checkbox" onChange={() => setMounted(value => !value)} />
          Mount the observed box
        </label>
        {isMounted && <div ref={setBox} className="body100" style={{
        resize: 'horizontal',
        overflow: 'auto',
        width: '200px',
        padding: '8px',
        border: '1px solid var(--es-mono-a-a150)',
        borderRadius: '4px'
      }}>
            Drag my bottom right corner
          </div>}
        <div className="body100">Observed width: {width}px</div>
      </div>;
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,w as default};
