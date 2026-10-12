import{j as e}from"./iframe-BYc7QBr5.js";import{I as i}from"./InformationIcon-BZ_mW-SZ.js";import{u as d}from"./useBoolean-9ZuPhLjb.js";import{T as a}from"./Tooltip-BhKiqPTC.js";import{C as u}from"./ClickAwayListener-UFVK8YNX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-DBegVBAf.js";import"./IconQuestionLineW200-Czl64pww.js";import"./SvgIcon-Wn3RlfDb.js";import"./IconInformationFillW200-C78OyC71.js";import"./Popper-BcC2SVuu.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BchVpaqy.js";import"./useForkRef-DB7gLYYj.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-CKw70sL4.js";import"./setRef-B4em79P6.js";import"./Fade-DZUkkklo.js";import"./utils-CaOz1aTQ.js";import"./createTransition-ksOFfcKC.js";import"./useTimeout-DvcTotH6.js";import"./useControlled-CcB3PY7K.js";import"./useId-DFpf6LO_.js";import"./useEvent-sFMfcM9R.js";const s=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",S={tags:["autodocs"],component:i,parameters:{references:["InformationIcon"]},argTypes:{variant:{options:["info","question"],control:{type:"select"}},activeIconMapping:{table:{disable:!0}}}},o={render:(t,n)=>{const[m,r]=d(!1);return e.jsxs("div",{style:{paddingTop:"40px",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{disableInteractive:!0,enterTouchDelay:0,placement:"top-start",title:s(n),children:e.jsx(i,{variant:t.variant})}),e.jsx(u,{onClickAway:()=>r(!1),children:e.jsx(a,{describeChild:!0,disableFocusListener:!0,disableHoverListener:!0,disableInteractive:!0,disableTouchListener:!0,open:m,placement:"top",title:s(n),onClose:()=>r(!1),children:e.jsx(i,{component:"button",variant:t.variant,onClick:()=>r(!0)})})})]})}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
