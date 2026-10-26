import{j as r}from"./iframe-D3HjMCd-.js";import{T as s}from"./Tooltip-D9TtGqQ4.js";import{B as d}from"./Button-D_kL-LjM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./Popper-DF_DllmW.js";import"./useDefaultProps-21R-WjRB.js";import"./ownerDocument-By9UUC6B.js";import"./Portal-0j9kOChL.js";import"./useForkRef-GwhPXW4N.js";import"./getReactElementRef-B5iA01R4.js";import"./useEnhancedEffect-CLniivOv.js";import"./setRef-B4em79P6.js";import"./Fade-0_oz4Mfm.js";import"./utils-DukZKYgr.js";import"./createTransition-BOjDIFAa.js";import"./useTimeout-C5VTQpkg.js";import"./useControlled-e9NyoJZq.js";import"./useId-DNcBXqE4.js";import"./useEvent-BEzyp1Bz.js";import"./SvgIcon-D3b7riVA.js";import"./ButtonBase-ZB4rAPke.js";const c=t=>t.globals.locale==="en"?"Tooltip":"Подсказка",m=t=>t.globals.locale==="en"?"Button":"Кнопка",S={tags:["autodocs"],component:s,parameters:{references:["Tooltip"]},argTypes:{title:{control:{type:"text"}},children:{table:{disable:!0}},arrowIconMapping:{table:{disable:!0}},describeChild:{table:{disable:!0}},id:{table:{disable:!0}},PopperComponent:{table:{disable:!0}},PopperProps:{table:{disable:!0}},slots:{table:{disable:!0}},slotProps:{table:{disable:!0}},TransitionComponent:{table:{disable:!0}},TransitionProps:{table:{disable:!0}}}},e={render:function(o,i){const p=o.color==="mono-b"||o.color==="mono-b-a600"||o.color==="white-a600"?"var(--es-mono-a-a400)":void 0;return r.jsx("div",{style:{width:"100%",padding:"120px 40px",display:"flex",justifyContent:"center",backgroundColor:p},children:r.jsx(s,{...o,title:o.title||c(i),children:r.jsx(d,{color:"primary",variant:"contained",children:m(i)})})})}};var n,a,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
