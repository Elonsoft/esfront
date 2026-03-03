import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-Wm5baAvf.js";import{c as R}from"./clsx.m-C7bORDfW.js";import{u as w}from"./DefaultPropsProvider-BaGbio7E.js";import{u as V}from"./useStuckSentinel-D9wUrkuC.js";import{u as f}from"./useResizeObserver-C6sKC9YN.js";import{u as E}from"./useIntersectionObserver-CywOKxjJ.js";import{B as g}from"./Button-BRu9apcn.js";import{I as L}from"./IconArrowLeftLineW500-DTtVFMXB.js";import{I as k}from"./IconCheckLineW500-DNdSX9_F.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const i=n=>{const{className:d,style:c,children:o,startAdornment:s,endAdornment:a,prominent:p}=w({props:n,name:"ESAppBar"}),u=r.useRef(null),m=r.useRef(null),[b,_]=r.useState(0),[j,B]=r.useState(0),[v,S]=r.useState(!1),{stuck:N,sentinel:I}=V();return f(u,t=>{_(t[0].target.clientHeight)}),f(m,t=>{const h=t[0].target;B(h.clientHeight-(parseFloat(window.getComputedStyle(h).paddingBottom)||0))}),E(m,t=>{S(t[0].intersectionRatio<1)},{threshold:[1],rootMargin:`${j-b}px 0px 0px`}),e.jsxs(e.Fragment,{children:[I,e.jsxs("div",{ref:u,className:R(d,"es-app-bar",N&&"es-app-bar--stuck","h6"),style:c,children:[s&&e.jsx("div",{className:"es-app-bar__adornment",children:s}),e.jsx("div",{className:"es-app-bar__title",children:!p||v?o:" "}),a&&e.jsx("div",{className:"es-app-bar__adornment",children:a})]}),!!p&&e.jsx("div",{ref:m,"aria-hidden":!0,className:"es-app-bar__title-prominent h3",children:o})]})};try{i.displayName="AppBar",i.__docgenInfo={description:"The AppBar displays information and actions relating to the current screen.",displayName:"AppBar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},startAdornment:{defaultValue:null,description:"Element placed before the children.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"Element placed after the children.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},prominent:{defaultValue:null,description:"If true, the children will be show below the root element.",name:"prominent",required:!1,type:{name:"boolean"}}}}}catch{}const U={tags:["autodocs"],component:i,parameters:{references:["AppBar"]},argTypes:{children:{control:{type:"text"}},startAdornment:{control:{type:"boolean"}},endAdornment:{control:{type:"boolean"}}},args:{startAdornment:!0,endAdornment:!0}},l={render:({startAdornment:n,endAdornment:d,children:c,...o},s)=>{const a=s.globals.locale||"en";return e.jsxs("div",{style:{margin:"-1rem"},children:[e.jsx(i,{...o,endAdornment:d?e.jsx(g,{color:"tertiary",size:"500",children:e.jsx(k,{})}):null,startAdornment:n?e.jsx(g,{color:"tertiary",size:"500",children:e.jsx(L,{})}):null,children:c||(a==="en"?"Schedule":"Расписание")}),e.jsx("div",{style:{height:"150vh"}})]})}};var A,y,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    startAdornment,
    endAdornment,
    children,
    ...args
  }, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    return <div style={{
      margin: '-1rem'
    }}>
        <AppBar {...args} endAdornment={endAdornment ? <Button color="tertiary" size="500">
                <IconCheckLineW500 />
              </Button> : null} startAdornment={startAdornment ? <Button color="tertiary" size="500">
                <IconArrowLeftLineW500 />
              </Button> : null}>
          {children || (locale === 'en' ? 'Schedule' : 'Расписание')}
        </AppBar>
        <div style={{
        height: '150vh'
      }} />
      </div>;
  }
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const X=["Demo"];export{l as Demo,X as __namedExportsOrder,U as default};
