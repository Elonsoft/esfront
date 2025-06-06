import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{T as l}from"./Tooltip-JjMSGEEd.js";import{u as c}from"./useTheme-LlnDz48U.js";import{B as d}from"./Box-BsYG6vwI.js";import{B as u}from"./Button-Kloa1MkC.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./Fade-CJiQNbBq.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useForkRef-B4JCUkpP.js";import"./useTimeout-CS-EPZZq.js";import"./useControlled-ew9sXcp7.js";import"./useId-Dx6QqNEU.js";import"./useEvent-B4f6aq-e.js";import"./useIsFocusVisible-moa6TI2l.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-B9NMWNaQ.js";import"./Popper-BXVPFJIb.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-DAw-RMf5.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./useSlotProps-Dpc6KwLu.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-KPMS8x67.js";import"./ButtonBase-B9dD5NpA.js";const b=o=>o.globals.locale==="en"?"Tooltip":"Подсказка",x=o=>o.globals.locale==="en"?"Button":"Кнопка",W={tags:["autodocs"],component:l,parameters:{references:["Tooltip"]},argTypes:{title:{control:{type:"text"}},children:{table:{disable:!0}},arrowIconMapping:{table:{disable:!0}},describeChild:{table:{disable:!0}},disableInteractive:{table:{disable:!0}},id:{table:{disable:!0}},PopperComponent:{table:{disable:!0}},PopperProps:{table:{disable:!0}},slots:{table:{disable:!0}},slotProps:{table:{disable:!0}},TransitionComponent:{table:{disable:!0}},TransitionProps:{table:{disable:!0}}}},e={render:function(t,i){const p=c(),m=t.color==="monoB"||t.color==="monoBA600"||t.color==="whiteA600"?p.vars.palette.monoA.A400:void 0;return r.jsx(d,{sx:{width:"100%",padding:"120px 40px",display:"flex",justifyContent:"center",backgroundColor:m},children:r.jsx(l,{...t,title:t.title||b(i),children:r.jsx(u,{color:"primary",variant:"contained",children:x(i)})})})}};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const X=["Demo"];export{e as Demo,X as __namedExportsOrder,W as default};
