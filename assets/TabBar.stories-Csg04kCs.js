import{j as a}from"./jsx-runtime-BoZ7yaty.js";import{r as S}from"./index-DIDRz_s2.js";import{c as _}from"./clsx.m-C7bORDfW.js";import{a as v,g as j}from"./identifier-haEvzVNA.js";import{u as N}from"./DefaultPropsProvider-BgzOhfjl.js";import{s as p,c as E}from"./styled-CkBBDypc.js";import{B as A,b as k}from"./Button-DhPfczDk.js";import{b as w}from"./ButtonBase-CDV15rsf.js";import{I as i}from"./IconAtLineW500-Bpv2V7h8.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SvgIcon.classes-BQruNm0T.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DUjU_dba.js";function L(e){return v("ESTabBar",e)}j("ESTabBar",["root"]);const q=e=>{const{classes:s}=e;return E({root:["root"]},L,s)},V=p("div",{name:"ESTabBar",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({display:"flex",height:"56px",padding:"0px 8px",backgroundColor:e.vars.palette.surface[100],boxShadow:e.vars.palette.shadow.up[50]})),d=e=>{const{children:s,className:r,sx:t,...n}=N({props:e,name:"ESTabBar"}),o={...n},b=q(o);return a.jsx(V,{className:_(b.root,r),sx:t,children:s})};try{d.displayName="TabBar",d.__docgenInfo={description:"TabBar allows movement between primary destinations in an app.",displayName:"TabBar",props:{sx:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},classes:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"classes",required:!1,type:{name:"Partial<TabBarClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}function W(e){return v("ESTabBarItem",e)}const x=j("ESTabBarItem",["root","selected","icon","label"]),M=e=>{const{classes:s,selected:r}=e;return E({root:["root",r&&"selected"],icon:["icon"],label:["label"]},W,s)},P=p(A,{name:"ESTabBarItem",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({"--icon":e.vars.palette.monoA.A500,[`&.${k.root}`]:{borderRadius:0,flex:1,height:"100%"},[`& .${w.wrapper}`]:{flexDirection:"column"},[`&.${x.selected}`]:{"--icon":e.vars.palette.monoA.A900,[`& .${x.label}`]:{color:e.vars.palette.monoA.A800}}})),U=p("span",{name:"ESTabBarItem",slot:"Icon",overridesResolver:(e,s)=>s.icon})(()=>({display:"flex"})),$=p("span",{name:"ESTabBarItem",slot:"Label",overridesResolver:(e,s)=>s.label})(({theme:e})=>({...e.typography.micro,textTransform:"none",color:e.vars.palette.monoA.A700})),l=e=>{const{className:s,classes:r,sx:t,icon:n,label:o,selected:b,color:z,...R}=N({props:e,name:"ESTabBarItem"}),u=M({classes:r,selected:b});return a.jsxs(P,{className:_(u.root,s),color:"tertiary",sx:t,...R,children:[!!n&&a.jsx(U,{className:u.icon,children:n}),!!o&&a.jsx($,{className:u.label,children:o})]})};try{l.displayName="TabBarItem",l.__docgenInfo={description:"",displayName:"TabBarItem",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<TabBarItemClasses> & Partial<ClassNameMap<never>>)"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The icon element.",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"If true, the item is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const te={tags:["autodocs"],component:d,parameters:{references:["TabBar","TabBarItem"]}},m={render:function(s,{globals:{locale:r}}){const[t,n]=S.useState(0),o=r==="en"?"Menu":"Меню";return a.jsxs(d,{sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[a.jsx(l,{"aria-label":o,icon:a.jsx(i,{}),selected:t===0,onClick:()=>n(0)}),a.jsx(l,{"aria-label":o,icon:a.jsx(i,{}),selected:t===1,onClick:()=>n(1)}),a.jsx(l,{"aria-label":o,icon:a.jsx(i,{}),selected:t===2,onClick:()=>n(2)})]})}},c={render:function(s,{globals:{locale:r}}){const[t,n]=S.useState(0),o=r==="en"?"Menu":"Меню";return a.jsxs(d,{sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[a.jsx(l,{icon:a.jsx(i,{}),label:o,selected:t===0,onClick:()=>n(0)}),a.jsx(l,{icon:a.jsx(i,{}),label:o,selected:t===1,onClick:()=>n(1)}),a.jsx(l,{icon:a.jsx(i,{}),label:o,selected:t===2,onClick:()=>n(2)})]})}};var f,I,T;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render(_args, {
    globals: {
      locale
    }
  }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';
    return <TabBar sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1
    }}>
        <TabBarItem aria-label={label} icon={<IconAtLineW500 />} selected={index === 0} onClick={() => setIndex(0)} />
        <TabBarItem aria-label={label} icon={<IconAtLineW500 />} selected={index === 1} onClick={() => setIndex(1)} />
        <TabBarItem aria-label={label} icon={<IconAtLineW500 />} selected={index === 2} onClick={() => setIndex(2)} />
      </TabBar>;
  }
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var y,B,h,g,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function Render(_args, {
    globals: {
      locale
    }
  }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';
    return <TabBar sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1
    }}>
        <TabBarItem icon={<IconAtLineW500 />} label={label} selected={index === 0} onClick={() => setIndex(0)} />
        <TabBarItem icon={<IconAtLineW500 />} label={label} selected={index === 1} onClick={() => setIndex(1)} />
        <TabBarItem icon={<IconAtLineW500 />} label={label} selected={index === 2} onClick={() => setIndex(2)} />
      </TabBar>;
  }
}`,...(h=(B=c.parameters)==null?void 0:B.docs)==null?void 0:h.source},description:{story:"We can use `label` prop to add labels to `TabBarItem`.",...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.description}}};const ne=["Demo","WithLabels"];export{m as Demo,c as WithLabels,ne as __namedExportsOrder,te as default};
