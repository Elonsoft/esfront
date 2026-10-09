import{r as o,j as n}from"./iframe-WZaTcFld.js";import{P as a,o as d,f as k,s as B}from"./Popper-Di5muT-r.js";import{B as m}from"./Button-DX7vCFDA.js";import{G as O}from"./Grow-D1yaFj-8.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BYj3FDWN.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./ButtonBase-A8DfStIe.js";import"./utils-B5irXgth.js";import"./useTimeout-BCL6eOzm.js";import"./useEvent-PLZAS_3a.js";import"./getAutoHeightDuration-Bbk0NHdI.js";import"./createTransition-B0gmdMvU.js";const W={tags:["autodocs"],component:a,parameters:{references:["Popper"]},argTypes:{anchorEl:{table:{disable:!0}},children:{table:{disable:!0}},open:{table:{disable:!0}}}},f=n.jsx("div",{style:{background:"var(--es-surface-100)",borderRadius:"4px",boxShadow:"var(--es-shadow-100)",padding:"8px 12px"},children:"Popper content"}),c={render:function(r){const[t,e]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"80px"},children:[n.jsx(m,{color:"primary",variant:"contained",onClick:s=>e(t?null:s.currentTarget),children:"Toggle"}),n.jsx(a,{...r,anchorEl:t,middleware:[d(8),k(),B({padding:8})],open:!!t,children:f})]})}},l={render:function(){const[r,t]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"120px"},children:[n.jsx(m,{ref:t,variant:"outlined",children:"Anchor"}),["top","right","bottom","left","top-start","bottom-end"].map(e=>n.jsx(a,{anchorEl:r,middleware:[d(8)],open:!!r,placement:e,children:n.jsx("div",{style:{background:"var(--es-surface-100)",border:"1px solid var(--es-mono-a-300)",padding:"2px 6px"},children:e})},e))]})}},i={render:function(){const[r,t]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"80px"},children:[n.jsx(m,{color:"primary",variant:"contained",onClick:e=>t(r?null:e.currentTarget),children:"Toggle"}),n.jsx(a,{transition:!0,anchorEl:r,middleware:[d(8),k()],open:!!r,children:({TransitionProps:e})=>n.jsx(O,{in:e==null?void 0:e.in,timeout:200,onEnter:e==null?void 0:e.onEnter,onExited:e==null?void 0:e.onExited,children:f})})]})}},p={render:function(){const r=o.useRef({x:0,y:0}),t=o.useRef(null),[e,s]=o.useState(!1);return n.jsxs("div",{style:{background:"var(--es-surface-200)",height:"240px"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onMouseMove:h=>{var x;r.current={x:h.clientX,y:h.clientY},(x=t.current)==null||x.update()},children:["Move the cursor here",n.jsx(a,{anchorEl:{getBoundingClientRect:()=>new DOMRect(r.current.x,r.current.y,0,0)},middleware:[d(12)],open:e,popperRef:t,children:f})]})}};var E,g,v;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function Render(args) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '80px'
    }}>
        <Button color="primary" variant="contained" onClick={event => setAnchorEl(anchorEl ? null : event.currentTarget)}>
          Toggle
        </Button>
        <Popper {...args} anchorEl={anchorEl} middleware={[offset(8), flip(), shift({
        padding: 8
      })]} open={!!anchorEl}>
          {content}
        </Popper>
      </div>;
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,R,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '120px'
    }}>
        <Button ref={setAnchorEl} variant="outlined">
          Anchor
        </Button>
        {(['top', 'right', 'bottom', 'left', 'top-start', 'bottom-end'] as const).map(placement => <Popper key={placement} anchorEl={anchorEl} middleware={[offset(8)]} open={!!anchorEl} placement={placement}>
            <div style={{
          background: 'var(--es-surface-100)',
          border: '1px solid var(--es-mono-a-300)',
          padding: '2px 6px'
        }}>
              {placement}
            </div>
          </Popper>)}
      </div>;
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var b,w,M;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function Render() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '80px'
    }}>
        <Button color="primary" variant="contained" onClick={event => setAnchorEl(anchorEl ? null : event.currentTarget)}>
          Toggle
        </Button>
        <Popper transition anchorEl={anchorEl} middleware={[offset(8), flip()]} open={!!anchorEl}>
          {({
          TransitionProps
        }) => <Grow in={TransitionProps?.in} timeout={200} onEnter={TransitionProps?.onEnter} onExited={TransitionProps?.onExited}>
              {content}
            </Grow>}
        </Popper>
      </div>;
  }
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var A,S,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render() {
    const positionRef = useRef({
      x: 0,
      y: 0
    });
    const popperRef = useRef<{
      update: () => void;
    } | null>(null);
    const [open, setOpen] = useState(false);
    return <div style={{
      background: 'var(--es-surface-200)',
      height: '240px'
    }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onMouseMove={event => {
      positionRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      popperRef.current?.update();
    }}>
        Move the cursor here
        <Popper anchorEl={{
        getBoundingClientRect: () => new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0)
      }} middleware={[offset(12)]} open={open} popperRef={popperRef}>
          {content}
        </Popper>
      </div>;
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Z=["Demo","Placements","Transition","VirtualAnchor"];export{c as Demo,l as Placements,i as Transition,p as VirtualAnchor,Z as __namedExportsOrder,W as default};
