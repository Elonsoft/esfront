import{j as e}from"./iframe-Bc8-Q25v.js";import{I as i}from"./InformationIcon-D70AjBso.js";import{u as d}from"./useBoolean-C9CO5cqx.js";import{T as a}from"./Tooltip-BgInsn7H.js";import{C as u}from"./ClickAwayListener-BPRQJxlH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./IconQuestionLineW200-BYr54j4G.js";import"./SvgIcon-CMA3Mbq7.js";import"./IconInformationFillW200-BsysdSjF.js";import"./Popper-DYg-78L5.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BW-pjcFK.js";import"./useForkRef-rVwNGtGZ.js";import"./createTransition-BIZAeqwx.js";import"./utils-xjkStw31.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./Fade-Cz0N_mL7.js";import"./useTimeout-DowuL8C4.js";import"./useControlled-BKv9s01-.js";import"./useId-DYzkOzzt.js";import"./useEvent-CCPOMy0K.js";const s=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",M={tags:["autodocs"],component:i,parameters:{references:["InformationIcon"]},argTypes:{variant:{options:["info","question"],control:{type:"select"}},activeIconMapping:{table:{disable:!0}}}},o={render:(t,n)=>{const[m,r]=d(!1);return e.jsxs("div",{style:{paddingTop:"40px",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{disableInteractive:!0,enterTouchDelay:0,placement:"top-start",title:s(n),children:e.jsx(i,{variant:t.variant})}),e.jsx(u,{onClickAway:()=>r(!1),children:e.jsx(a,{describeChild:!0,disableFocusListener:!0,disableHoverListener:!0,disableInteractive:!0,disableTouchListener:!0,open:m,placement:"top",title:s(n),onClose:()=>r(!1),children:e.jsx(i,{component:"button",variant:t.variant,onClick:()=>r(!0)})})})]})}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const R=["Demo"];export{o as Demo,R as __namedExportsOrder,M as default};
