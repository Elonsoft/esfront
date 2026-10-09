import{r as x,j as t}from"./iframe-WZaTcFld.js";import{u as A}from"./useScrollPosition-XLhyAfnk.js";import{B as g}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./useEvent-PLZAS_3a.js";import"./useResizeObserver-DfGkp_cm.js";import"./useMutationObserver-CyisDU0F.js";import"./useElementEventListener-DPPQSfuc.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";const C={tags:["autodocs"],title:"Hooks/useScrollPosition",parameters:{references:["useScrollPosition"]},argTypes:{threshold:{control:{type:"number"}}}},y=24,s=(l,e)=>({position:"absolute",inset:0,pointerEvents:"none",opacity:e?1:0,transition:"opacity 150ms",background:`linear-gradient(to ${l}, var(--es-mono-a-a150), transparent ${y}px)`}),o={render:function(e){const a=x.useRef(null),[b,d]=x.useState(8),{isScrollableX:i,isScrollableY:r,isAtLeft:n,isAtRight:c,isAtTop:p,isAtBottom:v}=A(a,{threshold:e.threshold});return t.jsxs("div",{className:"flex flex-col gap-16",style:{maxWidth:"400px"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("div",{ref:a,style:{height:"200px",overflow:"auto",border:"1px solid var(--es-mono-a-a150)",borderRadius:"4px"},children:Array.from({length:b},(h,m)=>t.jsxs("div",{className:"body100",style:{padding:"8px 16px",whiteSpace:"nowrap"},children:["Row ",m+1," — scroll both axes to see the flags change"]},m))}),t.jsx("div",{style:s("bottom",r&&!p)}),t.jsx("div",{style:s("top",r&&!v)}),t.jsx("div",{style:s("right",i&&!n)}),t.jsx("div",{style:s("left",i&&!c)})]}),t.jsxs("div",{className:"body100",children:[t.jsxs("div",{children:["isScrollableX: ",i.toString()]}),t.jsxs("div",{children:["isScrollableY: ",r.toString()]}),t.jsxs("div",{children:["isAtLeft: ",n.toString()]}),t.jsxs("div",{children:["isAtRight: ",c.toString()]}),t.jsxs("div",{children:["isAtTop: ",p.toString()]}),t.jsxs("div",{children:["isAtBottom: ",v.toString()]})]}),t.jsxs("div",{className:"flex gap-8",children:[t.jsx(g,{onClick:()=>d(h=>h+4),children:"Add rows"}),t.jsx(g,{variant:"outlined",onClick:()=>d(1),children:"Reset rows"})]})]})}};var S,u,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function Render(args) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [rows, setRows] = useState(8);
    const {
      isScrollableX,
      isScrollableY,
      isAtLeft,
      isAtRight,
      isAtTop,
      isAtBottom
    } = useScrollPosition(ref, {
      threshold: args.threshold
    });
    return <div className="flex flex-col gap-16" style={{
      maxWidth: '400px'
    }}>
        <div style={{
        position: 'relative'
      }}>
          <div ref={ref} style={{
          height: '200px',
          overflow: 'auto',
          border: '1px solid var(--es-mono-a-a150)',
          borderRadius: '4px'
        }}>
            {Array.from({
            length: rows
          }, (_, index) => <div key={index} className="body100" style={{
            padding: '8px 16px',
            whiteSpace: 'nowrap'
          }}>
                Row {index + 1} — scroll both axes to see the flags change
              </div>)}
          </div>
          <div style={getShadow('bottom', isScrollableY && !isAtTop)} />
          <div style={getShadow('top', isScrollableY && !isAtBottom)} />
          <div style={getShadow('right', isScrollableX && !isAtLeft)} />
          <div style={getShadow('left', isScrollableX && !isAtRight)} />
        </div>
        <div className="body100">
          <div>isScrollableX: {isScrollableX.toString()}</div>
          <div>isScrollableY: {isScrollableY.toString()}</div>
          <div>isAtLeft: {isAtLeft.toString()}</div>
          <div>isAtRight: {isAtRight.toString()}</div>
          <div>isAtTop: {isAtTop.toString()}</div>
          <div>isAtBottom: {isAtBottom.toString()}</div>
        </div>
        <div className="flex gap-8">
          <Button onClick={() => setRows(value => value + 4)}>Add rows</Button>
          <Button variant="outlined" onClick={() => setRows(1)}>
            Reset rows
          </Button>
        </div>
      </div>;
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const D=["Demo"];export{o as Demo,D as __namedExportsOrder,C as default};
