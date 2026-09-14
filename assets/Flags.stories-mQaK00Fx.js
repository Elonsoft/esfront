import{j as a}from"./iframe-Bc8-Q25v.js";import{F as t}from"./index-DoVG8rdL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./SvgIcon-CMA3Mbq7.js";import"./useDefaultProps-lGeK2dpt.js";const f={tags:["autodocs"],title:"Flags",parameters:{references:["Flags"]}},e={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:Object.keys(t).map(r=>{const p=t[r];return a.jsx(p,{title:r.replace("Flag","")},r)})})};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const x=["Demo"];export{e as Demo,x as __namedExportsOrder,f as default};
