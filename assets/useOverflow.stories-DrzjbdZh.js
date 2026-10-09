import{r as o,j as e}from"./iframe-WZaTcFld.js";import{u as f}from"./useOverflow-sZhuIq7z.js";import"./preload-helper-Dp1pzeXC.js";import"./useEvent-PLZAS_3a.js";import"./useResizeObserver-DfGkp_cm.js";import"./useMutationObserver-CyisDU0F.js";const y={tags:["autodocs"],title:"Hooks/useOverflow",parameters:{references:["useOverflow"]},argTypes:{threshold:{control:{type:"number"}}}},s={render:function(d){const[t,n]=o.useState("A short line of text"),r=o.useRef(null),{isOverflowX:v,isOverflowY:p}=f(r,{threshold:d.threshold});return e.jsxs("div",{className:"flex flex-col gap-16",style:{alignItems:"flex-start"},children:[e.jsx("input",{className:"body100",style:{width:"300px"},value:t,onChange:x=>n(x.target.value)}),e.jsx("div",{ref:r,className:"body100",style:{resize:"both",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"200px",height:"40px",padding:"8px",border:"1px solid var(--es-mono-a-a150)",borderRadius:"4px"},children:t}),e.jsxs("div",{className:"body100",children:[e.jsxs("div",{children:["isOverflowX: ",v.toString()]}),e.jsxs("div",{children:["isOverflowY: ",p.toString()]})]})]})}};var i,l,a;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [text, setText] = useState('A short line of text');
    const ref = useRef<HTMLDivElement | null>(null);
    const {
      isOverflowX,
      isOverflowY
    } = useOverflow(ref, {
      threshold: args.threshold
    });
    return <div className="flex flex-col gap-16" style={{
      alignItems: 'flex-start'
    }}>
        <input className="body100" style={{
        width: '300px'
      }} value={text} onChange={event => setText(event.target.value)} />
        <div ref={ref} className="body100" style={{
        resize: 'both',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '200px',
        height: '40px',
        padding: '8px',
        border: '1px solid var(--es-mono-a-a150)',
        borderRadius: '4px'
      }}>
          {text}
        </div>
        <div className="body100">
          <div>isOverflowX: {isOverflowX.toString()}</div>
          <div>isOverflowY: {isOverflowY.toString()}</div>
        </div>
      </div>;
  }
}`,...(a=(l=s.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const b=["Demo"];export{s as Demo,b as __namedExportsOrder,y as default};
