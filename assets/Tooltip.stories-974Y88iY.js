import{j as r}from"./iframe-WZaTcFld.js";import{T as s}from"./Tooltip-Cf9elEFD.js";import{B as d}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./Popper-Di5muT-r.js";import"./useDefaultProps-BZnal23W.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-BYj3FDWN.js";import"./useForkRef-B9g_LZ2g.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-C777XXBU.js";import"./setRef-B4em79P6.js";import"./Fade-xqmouTxf.js";import"./utils-B5irXgth.js";import"./createTransition-B0gmdMvU.js";import"./useTimeout-BCL6eOzm.js";import"./useControlled-BkzgZrqK.js";import"./useId-Cowwq5kl.js";import"./useEvent-PLZAS_3a.js";import"./SvgIcon-CImGifIE.js";import"./ButtonBase-A8DfStIe.js";const c=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",m=t=>t.globals.locale==="en"?"Button":"Кнопка",S={tags:["autodocs"],component:s,parameters:{references:["Tooltip"]},argTypes:{title:{control:{type:"text"}},children:{table:{disable:!0}},arrowIconMapping:{table:{disable:!0}},describeChild:{table:{disable:!0}},id:{table:{disable:!0}},PopperComponent:{table:{disable:!0}},PopperProps:{table:{disable:!0}},slots:{table:{disable:!0}},slotProps:{table:{disable:!0}},TransitionComponent:{table:{disable:!0}},TransitionProps:{table:{disable:!0}}}},e={render:function(o,i){const p=o.color==="mono-b"||o.color==="mono-b-a600"||o.color==="white-a600"?"var(--es-mono-a-a400)":void 0;return r.jsx("div",{style:{width:"100%",padding:"120px 40px",display:"flex",justifyContent:"center",backgroundColor:p},children:r.jsx(s,{...o,title:o.title||c(i),children:r.jsx(d,{color:"primary",variant:"contained",children:m(i)})})})}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const q=["Demo"];export{e as Demo,q as __namedExportsOrder,S as default};
