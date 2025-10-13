import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{F as a}from"./index-DJxreSNM.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./SvgIcon-DcWEUr91.js";import"./clsx.m-C7bORDfW.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./DefaultPropsProvider-BgzOhfjl.js";const y={tags:["autodocs"],title:"Flags",parameters:{references:["Flags"]}},e={render:()=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:Object.keys(a).map(r=>{const p=a[r];return t.jsx(p,{title:r.replace("Flag","")},r)})})};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const F=["Demo"];export{e as Demo,F as __namedExportsOrder,y as default};
