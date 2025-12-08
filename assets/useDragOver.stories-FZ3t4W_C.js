import{j as n}from"./jsx-runtime-BoZ7yaty.js";import{u as m}from"./useDragOver-B_I74yYZ.js";import{T as i}from"./Typography-56Df3xvc.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const j={tags:["autodocs"],title:"Hooks/useDragOver",parameters:{references:["useDragOver"]}},r={render:function(){const{isDragOver:p,...s}=m();return n.jsx(i,{component:"div",sx:o=>({padding:"16px",border:`1px dashed ${o.vars.palette.monoA.A500}`,borderRadius:"2px",backgroundColor:p?o.vars.palette.monoA.A50:"transparent"}),variant:"body100",...s,children:"Drag'n'Drop"})}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const k=["Demo"];export{r as Demo,k as __namedExportsOrder,j as default};
