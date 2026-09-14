import{r as x,j as e}from"./iframe-Bc8-Q25v.js";import{M as d}from"./Modal-Cqh-UVFo.js";import{B as f}from"./Button-BCRxDX6B.js";import{F as g}from"./Fade-Cz0N_mL7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./lockScroll-qqOLVCfx.js";import"./getScrollbarSize-Bz_XAsBO.js";import"./ownerDocument-By9UUC6B.js";import"./ownerWindow-DZnlFwEW.js";import"./useForkRef-rVwNGtGZ.js";import"./useEvent-CCPOMy0K.js";import"./createChainedFunction-Cp_t5fpS.js";import"./extractEventHandlers-DC_lrI0t.js";import"./useDefaultProps-lGeK2dpt.js";import"./Backdrop-BIFNHrHU.js";import"./Portal-BW-pjcFK.js";import"./createTransition-BIZAeqwx.js";import"./utils-xjkStw31.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./FocusTrap-cBv2YN9d.js";import"./ButtonBase-BBaKRXh4.js";const i=(s,t,o)=>s.globals.locale==="en"?t:o,z={tags:["autodocs"],component:d,parameters:{references:["Modal"]},argTypes:{children:{table:{disable:!0}},open:{table:{disable:!0}}}},r={render:function(t,o){const[a,n]=x.useState(!1),m=()=>{n(!0)},u=()=>{n(!1)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(f,{color:"primary",variant:"contained",onClick:m,children:i(o,"Open","Открыть")}),e.jsx(d,{...t,closeAfterTransition:!0,open:a,onClose:u,children:e.jsx(g,{appear:!0,in:a,children:e.jsx("div",{style:{backgroundColor:"var(--es-surface-600)",borderRadius:"8px",boxShadow:"var(--es-shadow-down-900)",color:"var(--es-mono-a-a900)",left:"50%",padding:"24px",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},children:i(o,"Press escape or click the backdrop to close.","Нажмите escape или на подложку чтобы закрыть.")})})})]})}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isOpen, setOpen] = useState(false);
    const onOpen = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return <div style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button color="primary" variant="contained" onClick={onOpen}>
          {getText(context, 'Open', 'Открыть')}
        </Button>
        <Modal {...args} closeAfterTransition open={isOpen} onClose={onClose}>
          <Fade appear in={isOpen}>
            <div style={{
            backgroundColor: 'var(--es-surface-600)',
            borderRadius: '8px',
            boxShadow: 'var(--es-shadow-down-900)',
            color: 'var(--es-mono-a-a900)',
            left: '50%',
            padding: '24px',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
              {getText(context, 'Press escape or click the backdrop to close.', 'Нажмите escape или на подложку чтобы закрыть.')}
            </div>
          </Fade>
        </Modal>
      </div>;
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["Demo"];export{r as Demo,G as __namedExportsOrder,z as default};
