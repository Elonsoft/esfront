import{j as a}from"./iframe-WZaTcFld.js";import{F as t}from"./index-D2V4kZjw.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./SvgIcon-CImGifIE.js";import"./useDefaultProps-BZnal23W.js";const f={tags:["autodocs"],title:"Flags",parameters:{references:["Flags"]}},e={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:Object.keys(t).map(r=>{const p=t[r];return a.jsx(p,{title:r.replace("Flag","")},r)})})};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
