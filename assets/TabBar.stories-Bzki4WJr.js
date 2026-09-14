import{j as e,r as y}from"./iframe-Bc8-Q25v.js";import{c as g}from"./clsx.m-CH7BE6MN.js";import{u as h}from"./useDefaultProps-lGeK2dpt.js";import{B as N}from"./Button-BCRxDX6B.js";import{I as l}from"./IconAtLineW500-CfSnc5n_.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";import"./SvgIcon-CMA3Mbq7.js";const m=o=>{const{children:c,className:n,style:a}=h({props:o,name:"ESTabBar"});return e.jsx("div",{className:g(n,"es-tab-bar"),style:a,children:c})};try{m.displayName="TabBar",m.__docgenInfo={description:"TabBar allows movement between primary destinations in an app.",displayName:"TabBar",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/TabBar/TabBar.tsx",methods:[],props:{className:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"}],description:"Class applied to the root element.",name:"className",parent:{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"},required:!1,tags:{},type:{name:"string"}},style:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"}],description:"Style applied to the root element.",name:"style",parent:{fileName:"react/src/components/TabBar/TabBar.types.ts",name:"TabBarProps"},required:!1,tags:{},type:{name:"CSSProperties"}}},tags:{}}}catch{}const s=o=>{const{className:c,icon:n,label:a,selected:t,color:r,..._}=h({props:o,name:"ESTabBarItem"});return e.jsxs(N,{className:g(c,"es-tab-bar-item",t&&"es-tab-bar-item--selected"),color:"tertiary",..._,children:[!!n&&e.jsx("span",{className:"es-tab-bar-item__icon",children:n}),!!a&&e.jsx("span",{className:"es-tab-bar-item__label micro",children:a})]})};try{s.displayName="TabBarItem",s.__docgenInfo={description:"",displayName:"TabBarItem",filePath:"/home/runner/work/esfront/esfront/packages/react/src/components/TabBar/TabBarItem/TabBarItem.tsx",methods:[],props:{component:{defaultValue:null,declarations:[{fileName:"react/src/types/OverridableComponent.types.ts",name:"TypeLiteral"}],description:"The component used for the root node. Either a string to use an HTML element or a component.",name:"component",required:!0,tags:{},type:{name:"ElementType"}},className:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"Class applied to the root element.",name:"className",required:!1,tags:{},type:{name:"string"}},icon:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"The icon element.",name:"icon",required:!1,tags:{},type:{name:"ReactNode"}},label:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"The label element.",name:"label",required:!1,tags:{},type:{name:"ReactNode"}},selected:{defaultValue:null,declarations:[{fileName:"react/src/components/TabBar/TabBarItem/TabBarItem.types.ts",name:"TypeLiteral"}],description:"If true, the item is selected.",name:"selected",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const E={tags:["autodocs"],component:m,parameters:{references:["TabBar","TabBarItem"]}},d={render:function(c,{globals:{locale:n}}){const[a,t]=y.useState(0),r=n==="en"?"Menu":"Меню";return e.jsxs(m,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(s,{"aria-label":r,icon:e.jsx(l,{}),selected:a===0,onClick:()=>t(0)}),e.jsx(s,{"aria-label":r,icon:e.jsx(l,{}),selected:a===1,onClick:()=>t(1)}),e.jsx(s,{"aria-label":r,icon:e.jsx(l,{}),selected:a===2,onClick:()=>t(2)})]})}},i={render:function(c,{globals:{locale:n}}){const[a,t]=y.useState(0),r=n==="en"?"Menu":"Меню";return e.jsxs(m,{style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:[e.jsx(s,{icon:e.jsx(l,{}),label:r,selected:a===0,onClick:()=>t(0)}),e.jsx(s,{icon:e.jsx(l,{}),label:r,selected:a===1,onClick:()=>t(1)}),e.jsx(s,{icon:e.jsx(l,{}),label:r,selected:a===2,onClick:()=>t(2)})]})}};var p,b,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"We can use `label` prop to add labels to `TabBarItem`.",...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.description}}};const R=["Demo","WithLabels"];export{d as Demo,i as WithLabels,R as __namedExportsOrder,E as default};
