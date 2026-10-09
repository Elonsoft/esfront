import{j as e,r as y}from"./iframe-WZaTcFld.js";import{c as g}from"./clsx.m-CH7BE6MN.js";import{u as h}from"./useDefaultProps-BZnal23W.js";import{B as N}from"./Button-DX7vCFDA.js";import{I as l}from"./IconAtLineW500-E7lAYe_C.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./SvgIcon-CImGifIE.js";const m=({ref:s,...c})=>{const{children:o,className:a,style:t}=h({props:c,name:"ESTabBar"});return e.jsx("div",{ref:s,className:g(a,"es-tab-bar"),style:t,children:o})};try{m.displayName="TabBar",m.__docgenInfo={description:"TabBar allows movement between primary destinations in an app.",displayName:"TabBar",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/TabBar/TabBar.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"}],description:"Class applied to the root element.",name:"className",parent:{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"},required:!1,tags:{},type:{name:"string"}},style:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"}],description:"Style applied to the root element.",name:"style",parent:{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"},required:!1,tags:{},type:{name:"CSSProperties"}}},tags:{}}}catch{}const r=({ref:s,...c})=>{const{className:o,icon:a,label:t,selected:n,color:j,..._}=h({props:c,name:"ESTabBarItem"});return e.jsxs(N,{ref:s,className:g(o,"es-tab-bar-item",n&&"es-tab-bar-item--selected"),color:"tertiary",..._,children:[!!a&&e.jsx("span",{className:"es-tab-bar-item__icon",children:a}),!!t&&e.jsx("span",{className:"es-tab-bar-item__label micro",children:t})]})};try{r.displayName="TabBarItem",r.__docgenInfo={description:"",displayName:"TabBarItem",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/TabBar/TabBarItem/TabBarItem.tsx",methods:[],props:{component:{defaultValue:null,declarations:[{fileName:"react/src/types/OverridableComponent.types.ts",name:"TypeLiteral"}],description:"The component used for the root node. Either a string to use an HTML element or a component.",name:"component",required:!0,tags:{},type:{name:"ElementType"}},className:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"Class applied to the root element.",name:"className",required:!1,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"The icon element.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},label:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"The label element.",name:"label",required:!1,tags:{},type:{name:"ReactNode"}},selected:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"If true, the item is selected.",name:"selected",required:!1,tags:{},type:{name:"boolean"}}},tags:{see:"`TabBar`"}}}catch{}const R={tags:["autodocs"],component:m,parameters:{references:["TabBar","TabBarItem"]}},d={render:function(c,{globals:{locale:o}}){const[a,t]=y.useState(0),n=o==="en"?"Menu":"Меню";return e.jsxs(m,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(r,{"aria-label":n,icon:e.jsx(l,{}),selected:a===0,onClick:()=>t(0)}),e.jsx(r,{"aria-label":n,icon:e.jsx(l,{}),selected:a===1,onClick:()=>t(1)}),e.jsx(r,{"aria-label":n,icon:e.jsx(l,{}),selected:a===2,onClick:()=>t(2)})]})}},i={render:function(c,{globals:{locale:o}}){const[a,t]=y.useState(0),n=o==="en"?"Menu":"Меню";return e.jsxs(m,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(r,{icon:e.jsx(l,{}),label:n,selected:a===0,onClick:()=>t(0)}),e.jsx(r,{icon:e.jsx(l,{}),label:n,selected:a===1,onClick:()=>t(1)}),e.jsx(r,{icon:e.jsx(l,{}),label:n,selected:a===2,onClick:()=>t(2)})]})}};var p,b,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var T,x,B,f,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"We can use `label` prop to add labels to `TabBarItem`.",...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.description}}};const V=["Demo","WithLabels"];export{d as Demo,i as WithLabels,V as __namedExportsOrder,R as default};
