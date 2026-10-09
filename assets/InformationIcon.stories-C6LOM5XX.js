import{j as e}from"./iframe-WZaTcFld.js";import{I as i}from"./InformationIcon-CPOhB_jL.js";import{u as d}from"./useBoolean-DNZWKI4h.js";import{T as a}from"./Tooltip-Cf9elEFD.js";import{C as u}from"./ClickAwayListener-Dl_I8vsc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./IconQuestionLineW200-DSd_tTI5.js";import"./SvgIcon-CImGifIE.js";import"./IconInformationFillW200-BVvbDCnO.js";import"./Popper-Di5muT-r.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BYj3FDWN.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./createTransition-B0gmdMvU.js";import"./useTimeout-BCL6eOzm.js";import"./useControlled-BkzgZrqK.js";import"./useId-Cowwq5kl.js";import"./useEvent-PLZAS_3a.js";const s=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",S={tags:["autodocs"],component:i,parameters:{references:["InformationIcon"]},argTypes:{variant:{options:["info","question"],control:{type:"select"}},activeIconMapping:{table:{disable:!0}}}},o={render:(t,n)=>{const[m,r]=d(!1);return e.jsxs("div",{style:{paddingTop:"40px",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{disableInteractive:!0,enterTouchDelay:0,placement:"top-start",title:s(n),children:e.jsx(i,{variant:t.variant})}),e.jsx(u,{onClickAway:()=>r(!1),children:e.jsx(a,{describeChild:!0,disableFocusListener:!0,disableHoverListener:!0,disableInteractive:!0,disableTouchListener:!0,open:m,placement:"top",title:s(n),onClose:()=>r(!1),children:e.jsx(i,{component:"button",variant:t.variant,onClick:()=>r(!0)})})})]})}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const [open, toggleOpen] = useBoolean(false);
    return <div style={{
      paddingTop: '40px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <Tooltip disableInteractive enterTouchDelay={0} placement="top-start" title={getTooltipText(context)}>
          <InformationIcon variant={args.variant} />
        </Tooltip>

        <ClickAwayListener onClickAway={() => toggleOpen(false)}>
          <Tooltip describeChild disableFocusListener disableHoverListener disableInteractive disableTouchListener open={open} placement="top" title={getTooltipText(context)} onClose={() => toggleOpen(false)}>
            <InformationIcon component="button" variant={args.variant} onClick={() => toggleOpen(true)} />
          </Tooltip>
        </ClickAwayListener>
      </div>;
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const z=["Demo"];export{o as Demo,z as __namedExportsOrder,S as default};
