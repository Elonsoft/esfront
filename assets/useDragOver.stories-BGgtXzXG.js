import{j as n}from"./jsx-runtime-BoZ7yaty.js";import{u as d}from"./useDragOver-B_I74yYZ.js";import{T as m}from"./Typography-BriYb5H6.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const h={tags:["autodocs"],title:"Hooks/useDragOver",parameters:{references:["useDragOver"]}},r={render:function(){const{isDragOver:t,...p}=d();return n.jsx(m,{component:"div",sx:e=>({padding:"16px",border:`1px dashed ${e.vars.palette.monoA.A500}`,borderRadius:"2px",backgroundColor:t?e.vars.palette.monoA.A50:"transparent"}),variant:"body100",...p,children:"Drag'n'Drop"})}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Demo"];export{r as Demo,y as __namedExportsOrder,h as default};
