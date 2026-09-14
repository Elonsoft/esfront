import{j as d}from"./iframe-Bc8-Q25v.js";import{u as t}from"./useDragOver-DrgUTL6J.js";import"./preload-helper-Dp1pzeXC.js";const u={tags:["autodocs"],title:"Hooks/useDragOver",parameters:{references:["useDragOver"]}},r={render:function(){const{isDragOver:s,...n}=t();return d.jsx("div",{className:"body100",style:{padding:"16px",border:"1px dashed var(--es-mono-a-a500)",borderRadius:"2px",backgroundColor:s?"var(--es-mono-a-a50)":"transparent"},...n,children:"Drag'n'Drop"})}};var e,a,o;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: function Render() {
    const {
      isDragOver,
      ...props
    } = useDragOver();
    return <div className="body100" style={{
      padding: '16px',
      border: '1px dashed var(--es-mono-a-a500)',
      borderRadius: '2px',
      backgroundColor: isDragOver ? 'var(--es-mono-a-a50)' : 'transparent'
    }} {...props}>
        Drag&apos;n&apos;Drop
      </div>;
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["Demo"];export{r as Demo,g as __namedExportsOrder,u as default};
