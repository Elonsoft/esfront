import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{T as s}from"./Tooltip-CQ-Pr0yE.js";import{u as c}from"./useTheme-D4EsW5Cf.js";import{B as d}from"./Box-Og3xCN3M.js";import{B as u}from"./Button-Bw7cy9Im.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./Fade-D0jgUazQ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useForkRef-Cmn-Dh7x.js";import"./useTimeout-BgqVTnbA.js";import"./useControlled-BX5XFdR0.js";import"./useId-DHFVogFr.js";import"./useEvent-B4f6aq-e.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-BTP2NS_9.js";import"./Popper-CJR-SmXy.js";import"./index-CycuZXML.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Cdjvc33M.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-CexWkmt_.js";import"./mergeSlotProps-fp1W1fei.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./SvgIcon-BU7TD1_e.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./extendSxProp-ftMfNaJf.js";import"./ButtonBase-C33Z4or-.js";const b=o=>o.globals.locale==="en"?"Tooltip":"Подсказка",x=o=>o.globals.locale==="en"?"Button":"Кнопка",$={tags:["autodocs"],component:s,parameters:{references:["Tooltip"]},argTypes:{title:{control:{type:"text"}},children:{table:{disable:!0}},arrowIconMapping:{table:{disable:!0}},describeChild:{table:{disable:!0}},disableInteractive:{table:{disable:!0}},id:{table:{disable:!0}},PopperComponent:{table:{disable:!0}},PopperProps:{table:{disable:!0}},slots:{table:{disable:!0}},slotProps:{table:{disable:!0}},TransitionComponent:{table:{disable:!0}},TransitionProps:{table:{disable:!0}}}},e={render:function(t,i){const l=c(),m=t.color==="monoB"||t.color==="monoBA600"||t.color==="whiteA600"?l.vars.palette.monoA.A400:void 0;return r.jsx(d,{sx:{width:"100%",padding:"120px 40px",display:"flex",justifyContent:"center",backgroundColor:m},children:r.jsx(s,{...t,title:t.title||b(i),children:r.jsx(u,{color:"primary",variant:"contained",children:x(i)})})})}};var n,p,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const theme = useTheme();
    const isLightColor = args.color === 'monoB' || args.color === 'monoBA600' || args.color === 'whiteA600';
    const backgroundColor = isLightColor ? theme.vars.palette.monoA.A400 : undefined;
    return <Box sx={{
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
      </Box>;
  }
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const tt=["Demo"];export{e as Demo,tt as __namedExportsOrder,$ as default};
