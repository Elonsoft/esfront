import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{I as i}from"./InformationIcon-BwwfqYVU.js";import{u as d}from"./useBoolean-Fgx-l6SR.js";import{T as a}from"./Tooltip-JjMSGEEd.js";import{C as u}from"./ClickAwayListener-DnDjHjan.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./IconQuestionLine-lypVt2If.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./IconInformationFillW200-DauvLUv5.js";import"./useTheme-LlnDz48U.js";import"./Fade-CJiQNbBq.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useForkRef-B4JCUkpP.js";import"./useTimeout-CS-EPZZq.js";import"./useControlled-ew9sXcp7.js";import"./useId-Dx6QqNEU.js";import"./useEvent-B4f6aq-e.js";import"./useIsFocusVisible-moa6TI2l.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-B9NMWNaQ.js";import"./Popper-BXVPFJIb.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DAw-RMf5.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-Dpc6KwLu.js";import"./useEventCallback-B5h_k30D.js";const p=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",V={tags:["autodocs"],component:i,parameters:{references:["InformationIcon"]},argTypes:{variant:{options:["info","question"],control:{type:"select"}},activeIconMapping:{table:{disable:!0}}}},o={render:(t,n)=>{const[c,r]=d(!1);return e.jsxs("div",{style:{paddingTop:"40px",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{disableInteractive:!0,enterTouchDelay:0,placement:"top-start",title:p(n),children:e.jsx(i,{variant:t.variant})}),e.jsx(u,{onClickAway:()=>r(!1),children:e.jsx(a,{describeChild:!0,disableFocusListener:!0,disableHoverListener:!0,disableInteractive:!0,disableTouchListener:!0,open:c,placement:"top",title:p(n),onClose:()=>r(!1),children:e.jsx(i,{component:"button",variant:t.variant,onClick:()=>r(!0)})})})]})}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const W=["Demo"];export{o as Demo,W as __namedExportsOrder,V as default};
