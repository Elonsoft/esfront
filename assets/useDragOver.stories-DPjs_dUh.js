import{j as n}from"./jsx-runtime-BoZ7yaty.js";import{u as m}from"./useDragOver-B_I74yYZ.js";import{T as d}from"./Typography-dCWir4IF.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DzcScnLI.js";import"./styled-QckRPC_l.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const T={tags:["autodocs"],title:"Hooks/useDragOver",parameters:{references:["useDragOver"]}},r={render:function(){const{isDragOver:p,...s}=m();return n.jsx(d,{component:"div",sx:o=>({padding:"16px",border:`1px dashed ${o.vars.palette.monoA.A500}`,borderRadius:"2px",backgroundColor:p?o.vars.palette.monoA.A50:"transparent"}),variant:"body100",...s,children:"Drag'n'Drop"})}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: function Render() {
    const {
      isDragOver,
      ...props
    } = useDragOver();
    return <Typography component="div" sx={theme => ({
      padding: '16px',
      border: \`1px dashed \${theme.vars.palette.monoA.A500}\`,
      borderRadius: '2px',
      backgroundColor: isDragOver ? theme.vars.palette.monoA.A50 : 'transparent'
    })} variant="body100" {...props}>
        Drag&apos;n&apos;Drop
      </Typography>;
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const j=["Demo"];export{r as Demo,j as __namedExportsOrder,T as default};
