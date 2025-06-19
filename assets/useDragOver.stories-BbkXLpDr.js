import{j as n}from"./jsx-runtime-BoZ7yaty.js";import{u as m}from"./useDragOver-B_I74yYZ.js";import{T as d}from"./Typography-CtYhM0r3.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-CJcpijc4.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./useTheme-B2nYkSwK.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";const T={tags:["autodocs"],title:"Hooks/useDragOver",parameters:{references:["useDragOver"]}},r={render:function(){const{isDragOver:p,...s}=m();return n.jsx(d,{component:"div",sx:o=>({padding:"16px",border:`1px dashed ${o.vars.palette.monoA.A500}`,borderRadius:"2px",backgroundColor:p?o.vars.palette.monoA.A50:"transparent"}),variant:"body100",...s,children:"Drag'n'Drop"})}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
