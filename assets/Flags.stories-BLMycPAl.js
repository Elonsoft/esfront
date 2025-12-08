import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{F as a}from"./index-DHCk2Hz5.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./SvgIcon-DUjU_dba.js";import"./clsx.m-C7bORDfW.js";import"./SvgIcon.classes-BQruNm0T.js";import"./DefaultPropsProvider-BgzOhfjl.js";const F={tags:["autodocs"],title:"Flags",parameters:{references:["Flags"]}},e={render:()=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:Object.keys(a).map(r=>{const n=a[r];return t.jsx(n,{title:r.replace("Flag","")},r)})})};var o,s,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        {Object.keys(Flags).map(flag => {
        const Component = Flags[flag as keyof typeof Flags];
        return <Component key={flag} title={flag.replace('Flag', '')} />;
      })}
      </div>;
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const j=["Demo"];export{e as Demo,j as __namedExportsOrder,F as default};
