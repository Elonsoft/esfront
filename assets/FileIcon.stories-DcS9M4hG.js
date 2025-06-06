import{j as i}from"./jsx-runtime-BoZ7yaty.js";import{F as o,a as n}from"./FileIconBadge-DhQKNQhZ.js";import{e as j}from"./index-DIDRz_s2.js";import{u as R}from"./useTheme-LlnDz48U.js";import{S as C}from"./SvgIcon-DeOyXKlF.js";import{c as z}from"./clsx.m-C7bORDfW.js";import{a as T,g as B,s as b,c as v}from"./generateUtilityClasses-D4qQEpRV.js";import{b as S}from"./useThemeProps-DJft-tfL.js";import{T as V}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";const t=j.forwardRef((e,l)=>{const r=R();return i.jsxs(C,{height:e.height,style:{width:`${e.width}px`,height:`${e.height}px`,fill:"none",overflow:"visible"},viewBox:"0 0 36 48",width:e.width,...e,children:[i.jsx("path",{d:"M35.5 12V41.5C35.5 44.8137 32.8137 47.5 29.5 47.5H6.5C3.18629 47.5 0.5 44.8137 0.5 41.5V6.5C0.5 3.18629 3.18629 0.5 6.5 0.5H24",stroke:r.vars.palette.monoA.A150,style:{vectorEffect:"non-scaling-stroke"}}),i.jsx("path",{ref:l,clipRule:"evenodd",d:"M24.5 0H24V8.45455C24 10.4126 25.5874 12 27.5455 12L36 12V11.5L24.5 0Z",fill:r.vars.palette.monoA.A150,fillRule:"evenodd"})]})});try{t.displayName="FileIconIconVariant",t.__docgenInfo={description:"",displayName:"FileIconIconVariant",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}function _(e){return T("ESFileIconText",e)}B("ESFileIconText",["root"]);const A=e=>{const{classes:l}=e;return v({root:["root"]},_,l)},E=b(V,{name:"ESFileIconText",slot:"Root",overridesResolver:(e,l)=>l.root})(()=>({position:"relative",top:"-2px"})),d=e=>{const{className:l,children:r,sx:u,...w}=S({props:e,name:"ESFileIconText"}),y={...w},f=A(y);return i.jsx(E,{className:z(f.root,l),component:"div",sx:u,variant:"mini100",children:r})};try{d.displayName="FileIconText",d.__docgenInfo={description:"",displayName:"FileIconText",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FileIconTextClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const $={tags:["autodocs"],component:o,parameters:{references:["FileIcon","FileIconBadge","FileIconText"]},argTypes:{textChildren:{description:"Text in text component.",name:"FileIconText.children",control:{type:"text"}},badgeChildren:{description:"Text in badge component.",name:"FileIconBadge.children",control:{type:"text"}},badgeColor:{name:"FileIconBadge.color",control:{type:"color"},description:"The badge component background color."},badgeSize:{name:"FileIconBadge.size",control:{type:"select"},options:["md","sm"],description:"The badge component size."}},args:{textChildren:"DOCX",badgeChildren:"RAR",badgeColor:"#ff0000",badgeSize:"md"}},c={render:e=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx(o,{height:e.height,icon:t,width:e.width}),i.jsx(o,{height:e.height,icon:t,width:e.width,children:i.jsx(d,{children:e.textChildren})}),i.jsx(o,{height:e.height,width:e.width}),i.jsx(o,{height:e.height,width:e.width,children:i.jsx(d,{children:e.textChildren})}),i.jsx(o,{height:e.height,icon:t,width:e.width,children:i.jsx(n,{color:e.badgeColor,size:e.badgeSize,children:e.badgeChildren})}),i.jsx(o,{height:e.height,width:e.width,children:i.jsx(n,{color:e.badgeColor,size:e.badgeSize,children:e.badgeChildren})})]})},s={render:()=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx(o,{children:i.jsx(n,{color:"red",size:"md",children:"ZIP"})}),i.jsx(o,{height:44,width:33,children:i.jsx(n,{color:"purple",size:"sm",children:"RAR"})}),i.jsx(o,{height:40,width:30,children:i.jsx(n,{color:"#9672FF",size:"sm",children:"RAR"})}),i.jsx(o,{height:36,width:27,children:i.jsx(n,{color:"#9672FF",size:"sm",children:"RAR"})}),i.jsx(o,{icon:t,children:i.jsx(n,{color:"red",size:"md",children:"ZIP"})}),i.jsx(o,{height:44,icon:t,width:33,children:i.jsx(n,{color:"purple",size:"sm",children:"RAR"})}),i.jsx(o,{height:40,icon:t,width:30,children:i.jsx(n,{color:"#9672FF",size:"sm",children:"RAR"})}),i.jsx(o,{height:36,icon:t,width:27,children:i.jsx(n,{color:"#9672FF",size:"sm",children:"RAR"})})]})};var a,h,g;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width} />
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>
          <FileIconText>{args.textChildren}</FileIconText>
        </FileIcon>
        <FileIcon height={args.height} width={args.width} />
        <FileIcon height={args.height} width={args.width}>
          <FileIconText>{args.textChildren}</FileIconText>
        </FileIcon>
        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>
          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>
            {args.badgeChildren}
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={args.height} width={args.width}>
          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>
            {args.badgeChildren}
          </FileIconBadge>
        </FileIcon>
      </div>;
  }
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,m,I,F,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <FileIcon>
          <FileIconBadge color="red" size="md">
            ZIP
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={44} width={33}>
          <FileIconBadge color="purple" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={40} width={30}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={36} width={27}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon icon={FileIconIconVariant}>
          <FileIconBadge color="red" size="md">
            ZIP
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={44} icon={FileIconIconVariant} width={33}>
          <FileIconBadge color="purple" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={40} icon={FileIconIconVariant} width={30}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
        <FileIcon height={36} icon={FileIconIconVariant} width={27}>
          <FileIconBadge color="#9672FF" size="sm">
            RAR
          </FileIconBadge>
        </FileIcon>
      </div>;
  }
}`,...(I=(m=s.parameters)==null?void 0:m.docs)==null?void 0:I.source},description:{story:"Children element automatically positioned in visual center depending on component size.",...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.description}}};const X=["Demo","Sizes"];export{c as Demo,s as Sizes,X as __namedExportsOrder,$ as default};
