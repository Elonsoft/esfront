import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{B as n}from"./Button-Kloa1MkC.js";import{I as t}from"./IconChevronDownW400-QXFu20i-.js";import{u as g}from"./useTheme-LlnDz48U.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./SvgIcon-DnRBQAn1.js";const b=s=>s.globals.locale==="en"?"Button":"Кнопка",A={tags:["autodocs"],component:n,parameters:{references:["Button","ButtonBase"]},argTypes:{variant:{control:{type:"select"}},color:{control:{type:"select"}},size:{control:{type:"select"}},rounded:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},disableTouchRipple:{control:{type:"boolean"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},fullWidth:{table:{disable:!0}},TouchRippleProps:{table:{disable:!0}},TouchRipplePropsCenter:{table:{category:"TouchRippleProps"},name:"center",control:{type:"boolean"}},TouchRipplePropsPressGrowDuration:{table:{category:"TouchRippleProps"},name:"pressGrowDuration",control:{type:"number"}},TouchRipplePropsMinimumPressDuration:{table:{category:"TouchRippleProps"},name:"minimumPressDuration",control:{type:"number"}}},args:{variant:"contained",color:"tertiary",TouchRipplePropsPressGrowDuration:800,TouchRipplePropsMinimumPressDuration:150}},r={render:({TouchRipplePropsCenter:s,TouchRipplePropsPressGrowDuration:m,TouchRipplePropsMinimumPressDuration:d,...e},x)=>{const c=b(x),p=e.size==="100"?o.jsx(t,{size:"12px"}):e.size==="200"?o.jsx(t,{size:"16px"}):e.size==="300"?o.jsx(t,{size:"20px"}):o.jsx(t,{}),h=g(),P=e.color==="monoB"||e.color==="white"?h.vars.palette.monoA.A800:void 0,i={...e,TouchRippleProps:{center:s,pressGrowDuration:m,minimumPressDuration:d}};return o.jsxs("div",{style:{display:"grid",gap:"16px",gridAutoFlow:"column",justifyContent:"flex-start",marginBottom:"16px",padding:"10px 0px 10px 10px",backgroundColor:P},children:[o.jsx(n,{...i,children:c}),o.jsx(n,{...i,endIcon:p,startIcon:p,children:c}),o.jsx(n,{...i,children:p})]})}};var a,l,u;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    TouchRipplePropsCenter,
    TouchRipplePropsPressGrowDuration,
    TouchRipplePropsMinimumPressDuration,
    ...args
  }, context) => {
    const text = getText(context);
    const icon = args.size === '100' ? <IconChevronDownW400 size="12px" /> : args.size === '200' ? <IconChevronDownW400 size="16px" /> : args.size === '300' ? <IconChevronDownW400 size="20px" /> : <IconChevronDownW400 />;
    const theme = useTheme();
    const backgroundColor = args.color === 'monoB' || args.color === 'white' ? theme.vars.palette.monoA.A800 : undefined;
    const props = {
      ...args,
      TouchRippleProps: {
        center: TouchRipplePropsCenter,
        pressGrowDuration: TouchRipplePropsPressGrowDuration,
        minimumPressDuration: TouchRipplePropsMinimumPressDuration
      }
    };
    return <div style={{
      display: 'grid',
      gap: '16px',
      gridAutoFlow: 'column',
      justifyContent: 'flex-start',
      marginBottom: '16px',
      padding: '10px 0px 10px 10px',
      backgroundColor
    }}>
        <Button {...props}>{text}</Button>
        <Button {...props} endIcon={icon} startIcon={icon}>
          {text}
        </Button>
        <Button {...props}>{icon}</Button>
      </div>;
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const W=["Demo"];export{r as Demo,W as __namedExportsOrder,A as default};
