import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{F as a}from"./index-Dplx3HER.js";import"./index-ChsGqxH_.js";import"./clsx.m-C7bORDfW.js";import"./SvgIcon-Bb8ef9Tm.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";const u={tags:["autodocs"],title:"Flags",parameters:{references:["Flags"]}},e={render:()=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:Object.keys(a).map(r=>{const p=a[r];return t.jsx(p,{title:r.replace("Flag","")},r)})})};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const y=["Demo"];export{e as Demo,y as __namedExportsOrder,u as default};
