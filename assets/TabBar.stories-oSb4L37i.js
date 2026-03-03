import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as _}from"./index-Wm5baAvf.js";import{c as B}from"./clsx.m-C7bORDfW.js";import{u as h}from"./DefaultPropsProvider-BaGbio7E.js";import{B as j}from"./Button-BRu9apcn.js";import{I as l}from"./IconAtLineW500-BIDdAVQY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const d=o=>{const{children:i,className:t,style:n}=h({props:o,name:"ESTabBar"});return e.jsx("div",{className:B(t,"es-tab-bar"),style:n,children:i})};try{d.displayName="TabBar",d.__docgenInfo={description:"TabBar allows movement between primary destinations in an app.",displayName:"TabBar",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const r=o=>{const{className:i,icon:t,label:n,selected:a,color:s,...g}=h({props:o,name:"ESTabBarItem"});return e.jsxs(j,{className:B(i,"es-tab-bar-item",a&&"es-tab-bar-item--selected"),color:"tertiary",...g,children:[!!t&&e.jsx("span",{className:"es-tab-bar-item__icon",children:t}),!!n&&e.jsx("span",{className:"es-tab-bar-item__label micro",children:n})]})};try{r.displayName="TabBarItem",r.__docgenInfo={description:"",displayName:"TabBarItem",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The icon element.",name:"icon",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"ReactNode"}},selected:{defaultValue:null,description:"If true, the item is selected.",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const M={tags:["autodocs"],component:d,parameters:{references:["TabBar","TabBarItem"]}},m={render:function(i,{globals:{locale:t}}){const[n,a]=_.useState(0),s=t==="en"?"Menu":"Меню";return e.jsxs(d,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(r,{"aria-label":s,icon:e.jsx(l,{}),selected:n===0,onClick:()=>a(0)}),e.jsx(r,{"aria-label":s,icon:e.jsx(l,{}),selected:n===1,onClick:()=>a(1)}),e.jsx(r,{"aria-label":s,icon:e.jsx(l,{}),selected:n===2,onClick:()=>a(2)})]})}},c={render:function(i,{globals:{locale:t}}){const[n,a]=_.useState(0),s=t==="en"?"Menu":"Меню";return e.jsxs(d,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(r,{icon:e.jsx(l,{}),label:s,selected:n===0,onClick:()=>a(0)}),e.jsx(r,{icon:e.jsx(l,{}),label:s,selected:n===1,onClick:()=>a(1)}),e.jsx(r,{icon:e.jsx(l,{}),label:s,selected:n===2,onClick:()=>a(2)})]})}};var p,b,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(_args, {
    globals: {
      locale
    }
  }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';
    return <TabBar style={{
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
}`,...(u=(b=m.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var x,f,I,y,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render(_args, {
    globals: {
      locale
    }
  }) {
    const [index, setIndex] = useState(0);
    const label = locale === 'en' ? 'Menu' : 'Меню';
    return <TabBar style={{
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
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source},description:{story:"We can use `label` prop to add labels to `TabBarItem`.",...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};const z=["Demo","WithLabels"];export{m as Demo,c as WithLabels,z as __namedExportsOrder,M as default};
