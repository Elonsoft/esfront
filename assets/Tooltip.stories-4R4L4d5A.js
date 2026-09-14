import{j as r}from"./iframe-Bc8-Q25v.js";import{T as s}from"./Tooltip-BgInsn7H.js";import{B as d}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./Popper-DYg-78L5.js";import"./useDefaultProps-lGeK2dpt.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BW-pjcFK.js";import"./useForkRef-rVwNGtGZ.js";import"./createTransition-BIZAeqwx.js";import"./utils-xjkStw31.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./Fade-Cz0N_mL7.js";import"./useTimeout-DowuL8C4.js";import"./useControlled-BKv9s01-.js";import"./useId-DYzkOzzt.js";import"./useEvent-CCPOMy0K.js";import"./SvgIcon-CMA3Mbq7.js";import"./ButtonBase-BBaKRXh4.js";const c=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",m=t=>t.globals.locale==="en"?"Button":"Кнопка",M={tags:["autodocs"],component:s,parameters:{references:["Tooltip"]},argTypes:{title:{control:{type:"text"}},children:{table:{disable:!0}},arrowIconMapping:{table:{disable:!0}},describeChild:{table:{disable:!0}},id:{table:{disable:!0}},PopperComponent:{table:{disable:!0}},PopperProps:{table:{disable:!0}},slots:{table:{disable:!0}},slotProps:{table:{disable:!0}},TransitionComponent:{table:{disable:!0}},TransitionProps:{table:{disable:!0}}}},e={render:function(o,i){const p=o.color==="mono-b"||o.color==="mono-b-a600"||o.color==="white-a600"?"var(--es-mono-a-a400)":void 0;return r.jsx("div",{style:{width:"100%",padding:"120px 40px",display:"flex",justifyContent:"center",backgroundColor:p},children:r.jsx(s,{...o,title:o.title||c(i),children:r.jsx(d,{color:"primary",variant:"contained",children:m(i)})})})}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const isLightColor = args.color === 'mono-b' || args.color === 'mono-b-a600' || args.color === 'white-a600';
    const backgroundColor = isLightColor ? 'var(--es-mono-a-a400)' : undefined;
    return <div style={{
      width: '100%',
      padding: '120px 40px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor
    }}>
        <Tooltip {...args} title={args.title || getTooltipText(context)}>
          <Button color="primary" variant="contained">
            {getButtonText(context)}
          </Button>
        </Tooltip>
      </div>;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const O=["Demo"];export{e as Demo,O as __namedExportsOrder,M as default};
