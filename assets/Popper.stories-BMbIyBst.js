import{r as o,j as n}from"./iframe-Bc8-Q25v.js";import{P as a,o as p,f as k,s as B}from"./Popper-DYg-78L5.js";import{B as m}from"./Button-BCRxDX6B.js";import{G as O}from"./Grow-s7Bol92u.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BW-pjcFK.js";import"./useForkRef-rVwNGtGZ.js";import"./createTransition-BIZAeqwx.js";import"./utils-xjkStw31.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./ButtonBase-BBaKRXh4.js";import"./useTimeout-DowuL8C4.js";import"./getAutoHeightDuration-Bbk0NHdI.js";const N={tags:["autodocs"],component:a,parameters:{references:["Popper"]},argTypes:{anchorEl:{table:{disable:!0}},children:{table:{disable:!0}},open:{table:{disable:!0}}}},f=n.jsx("div",{style:{background:"var(--es-surface-100)",borderRadius:"4px",boxShadow:"var(--es-shadow-100)",padding:"8px 12px"},children:"Popper content"}),c={render:function(r){const[t,e]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"80px"},children:[n.jsx(m,{color:"primary",variant:"contained",onClick:s=>e(t?null:s.currentTarget),children:"Toggle"}),n.jsx(a,{...r,anchorEl:t,middleware:[p(8),k(),B({padding:8})],open:!!t,children:f})]})}},l={render:function(){const[r,t]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"120px"},children:[n.jsx(m,{ref:t,variant:"outlined",children:"Anchor"}),["top","right","bottom","left","top-start","bottom-end"].map(e=>n.jsx(a,{anchorEl:r,middleware:[p(8)],open:!!r,placement:e,children:n.jsx("div",{style:{background:"var(--es-surface-100)",border:"1px solid var(--es-mono-a-300)",padding:"2px 6px"},children:e})},e))]})}},i={render:function(){const[r,t]=o.useState(null);return n.jsxs("div",{style:{display:"flex",justifyContent:"center",padding:"80px"},children:[n.jsx(m,{color:"primary",variant:"contained",onClick:e=>t(r?null:e.currentTarget),children:"Toggle"}),n.jsx(a,{transition:!0,anchorEl:r,middleware:[p(8),k()],open:!!r,children:({TransitionProps:e})=>n.jsx(O,{in:e==null?void 0:e.in,timeout:200,onEnter:e==null?void 0:e.onEnter,onExited:e==null?void 0:e.onExited,children:f})})]})}},d={render:function(){const r=o.useRef({x:0,y:0}),t=o.useRef(null),[e,s]=o.useState(!1);return n.jsxs("div",{style:{background:"var(--es-surface-200)",height:"240px"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onMouseMove:h=>{var x;r.current={x:h.clientX,y:h.clientY},(x=t.current)==null||x.update()},children:["Move the cursor here",n.jsx(a,{anchorEl:{getBoundingClientRect:()=>new DOMRect(r.current.x,r.current.y,0,0)},middleware:[p(12)],open:e,popperRef:t,children:f})]})}};var E,g,v;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var A,S,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Q=["Demo","Placements","Transition","VirtualAnchor"];export{c as Demo,l as Placements,i as Transition,d as VirtualAnchor,Q as __namedExportsOrder,N as default};
