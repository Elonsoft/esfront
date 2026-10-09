import{r as v,j as e}from"./iframe-WZaTcFld.js";import{D as d}from"./Drawer-fcvGFRfR.js";import{B as O}from"./Button-DX7vCFDA.js";import{D,a as b}from"./DialogTitle-BMkcDQYq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./utils-B5irXgth.js";import"./Modal-SHCfJQEm.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./useForkRef-B9g_LZ2g.js";import"./useEvent-PLZAS_3a.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./Backdrop-CeeqQCtd.js";import"./Fade-xqmouTxf.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-B0gmdMvU.js";import"./Portal-BYj3FDWN.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./FocusTrap-1Ul32FaH.js";import"./Slide-qvpPLlUE.js";import"./debounce-mYveAr4B.js";import"./ButtonBase-A8DfStIe.js";import"./useStuckSentinel-BbTyB3Nk.js";import"./useIntersectionObserver-oQpH1Yfa.js";const w=t=>t.globals.locale==="en"?"Open":"Открыть",C=t=>t.globals.locale==="en"?"Toggle":"Переключить",j=t=>t.globals.locale==="en"?"Heading":"Заголовок",c=`Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`,ne={tags:["autodocs"],component:d,parameters:{references:["Drawer"]},argTypes:{anchor:{options:["left","top","right","bottom"],control:{type:"select"}},variant:{options:["temporary","persistent"],control:{type:"select"}},hideBackdrop:{defaultValue:!1,control:{type:"boolean"}}},args:{anchor:"right",variant:"temporary",hideBackdrop:!1}},s={render:function(i,o){const[a,r]=v.useState(!1),p=()=>{r(!0)},l=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{color:"primary",variant:"contained",onClick:p,children:w(o)}),e.jsxs(d,{...i,open:a,slotProps:{paper:{style:{width:320}}},onClose:l,children:[e.jsx(D,{sticky:!0,children:j(o)}),e.jsx(b,{children:e.jsx("div",{className:"body200",children:c})})]})]})}},n={args:{variant:"persistent"},render:function(i,o){const[a,r]=v.useState(!0),p=()=>{r(l=>!l)};return e.jsxs("div",{style:{display:"flex",height:400,margin:"-16px",overflowX:"hidden"},children:[e.jsxs("div",{style:{flexGrow:1,padding:16},children:[e.jsx(O,{className:"mb-16",color:"primary",variant:"contained",onClick:p,children:C(o)}),e.jsx("div",{className:"body200",children:c})]}),e.jsxs(d,{...i,open:a,slotProps:{paper:{style:{width:320}}},children:[e.jsx(D,{sticky:!0,children:j(o)}),e.jsx(b,{children:e.jsx("div",{className:"body200",children:c})})]})]})}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return <>
        <Button color="primary" variant="contained" onClick={onOpen}>
          {getOpenButtonText(context)}
        </Button>
        <Drawer {...args} open={isOpen} slotProps={{
        paper: {
          style: {
            width: 320
          }
        }
      }} onClose={onClose}>
          <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
          <DialogContent>
            <div className="body200">{TEXT}</div>
          </DialogContent>
        </Drawer>
      </>;
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,y,f,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'persistent'
  },
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(true);
    const onToggle = () => {
      setOpen(isOpen => !isOpen);
    };
    return <div style={{
      display: 'flex',
      height: 400,
      margin: '-16px',
      overflowX: 'hidden'
    }}>
        <div style={{
        flexGrow: 1,
        padding: 16
      }}>
          <Button className="mb-16" color="primary" variant="contained" onClick={onToggle}>
            {getToggleButtonText(context)}
          </Button>
          <div className="body200">{TEXT}</div>
        </div>
        <Drawer {...args} open={isOpen} slotProps={{
        paper: {
          style: {
            width: 320
          }
        }
      }}>
          <DialogTitle sticky>{getHeadingText(context)}</DialogTitle>
          <DialogContent>
            <div className="body200">{TEXT}</div>
          </DialogContent>
        </Drawer>
      </div>;
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"A `persistent` drawer stays in the document flow, so it can be laid out next to the page content without any\nadditional positioning.",...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.description}}};const re=["Demo","Persistent"];export{s as Demo,n as Persistent,re as __namedExportsOrder,ne as default};
