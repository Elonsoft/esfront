import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{I as i}from"./InformationIcon-FNbaG4AO.js";import{u as d}from"./useBoolean-Fgx-l6SR.js";import{T as a}from"./Tooltip-BqXojrKv.js";import{C as u}from"./ClickAwayListener-fiuBl2rs.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-QckRPC_l.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./IconQuestionLine-B9ncy7MZ.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./IconInformationFillW200-LZDWv4EZ.js";import"./Fade-DWBj0t68.js";import"./useTheme-ErypeN0Y.js";import"./useTheme-Dg4q0o-B.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useForkRef-Cmn-Dh7x.js";import"./useTimeout-BgqVTnbA.js";import"./useControlled-BX5XFdR0.js";import"./useId-DHFVogFr.js";import"./useEvent-B4f6aq-e.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popper-5tNl5wyi.js";import"./index-CycuZXML.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Cdjvc33M.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./useEventCallback-B5h_k30D.js";const p=e=>e.globals.locale==="en"?"Tooltip":"Подсказка",Y={tags:["autodocs"],component:i,parameters:{references:["InformationIcon"]},argTypes:{variant:{options:["info","question"],control:{type:"select"}},activeIconMapping:{table:{disable:!0}}}},o={render:(e,n)=>{const[c,r]=d(!1);return t.jsxs("div",{style:{paddingTop:"40px",display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx(a,{disableInteractive:!0,enterTouchDelay:0,placement:"top-start",title:p(n),children:t.jsx(i,{variant:e.variant})}),t.jsx(u,{onClickAway:()=>r(!1),children:t.jsx(a,{describeChild:!0,disableFocusListener:!0,disableHoverListener:!0,disableInteractive:!0,disableTouchListener:!0,open:c,placement:"top",title:p(n),onClose:()=>r(!1),children:t.jsx(i,{component:"button",variant:e.variant,onClick:()=>r(!0)})})})]})}};var s,l,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Z=["Demo"];export{o as Demo,Z as __namedExportsOrder,Y as default};
