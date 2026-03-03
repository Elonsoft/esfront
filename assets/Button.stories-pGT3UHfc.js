import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{B as n}from"./Button-BRu9apcn.js";import{I as r}from"./IconChevronDownLineW400-B-Z56FUQ.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const P=s=>s.globals.locale==="en"?"Button":"Кнопка",j={tags:["autodocs"],component:n,parameters:{references:["Button","ButtonBase"]},argTypes:{variant:{control:{type:"select"}},color:{control:{type:"select"}},size:{control:{type:"select"}},rounded:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},disableTouchRipple:{control:{type:"boolean"}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},fullWidth:{table:{disable:!0}},TouchRippleProps:{table:{disable:!0}},TouchRipplePropsCenter:{table:{category:"TouchRippleProps"},name:"center",control:{type:"boolean"}},TouchRipplePropsPressGrowDuration:{table:{category:"TouchRippleProps"},name:"pressGrowDuration",control:{type:"number"}},TouchRipplePropsMinimumPressDuration:{table:{category:"TouchRippleProps"},name:"minimumPressDuration",control:{type:"number"}}},args:{variant:"contained",color:"tertiary",TouchRipplePropsPressGrowDuration:800,TouchRipplePropsMinimumPressDuration:150}},t={render:({TouchRipplePropsCenter:s,TouchRipplePropsPressGrowDuration:m,TouchRipplePropsMinimumPressDuration:d,...e},x)=>{const a=P(x),p=e.size==="100"?o.jsx(r,{size:"12px"}):e.size==="200"?o.jsx(r,{size:"16px"}):e.size==="300"?o.jsx(r,{size:"20px"}):o.jsx(r,{}),h=e.color==="mono-b"||e.color==="white"?"var(--es-mono-a-a800)":void 0,i={...e,TouchRippleProps:{center:s,pressGrowDuration:m,minimumPressDuration:d}};return o.jsxs("div",{style:{display:"grid",gap:"16px",gridAutoFlow:"column",justifyContent:"flex-start",marginBottom:"16px",padding:"10px 0px 10px 10px",backgroundColor:h},children:[o.jsx(n,{...i,children:a}),o.jsx(n,{...i,endIcon:p,startIcon:p,children:a}),o.jsx(n,{...i,children:p})]})}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    TouchRipplePropsCenter,
    TouchRipplePropsPressGrowDuration,
    TouchRipplePropsMinimumPressDuration,
    ...args
  }, context) => {
    const text = getText(context);
    const icon = args.size === '100' ? <IconChevronDownLineW400 size="12px" /> : args.size === '200' ? <IconChevronDownLineW400 size="16px" /> : args.size === '300' ? <IconChevronDownLineW400 size="20px" /> : <IconChevronDownLineW400 />;
    const backgroundColor = args.color === 'mono-b' || args.color === 'white' ? 'var(--es-mono-a-a800)' : undefined;
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const I=["Demo"];export{t as Demo,I as __namedExportsOrder,j as default};
