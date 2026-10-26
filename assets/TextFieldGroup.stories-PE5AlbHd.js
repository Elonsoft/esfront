import{j as e}from"./iframe-D3HjMCd-.js";import{T as i}from"./TextFieldGroup-Or3zB1jU.js";import{T as t}from"./TextField-DT-FTa2W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-21R-WjRB.js";import"./useId-DNcBXqE4.js";import"./FormFieldHelperText-d3-TP2cu.js";import"./FormField.context-Ba4OjAmF.js";import"./useForkRef-GwhPXW4N.js";import"./FormFieldLabel-DOLpuC-H.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-CLniivOv.js";const k={tags:["autodocs"],component:i,parameters:{references:["TextFieldGroup"]}},r={render:({breakpoint:s},m)=>{const o=m.globals.locale||"en";return e.jsxs(i,{breakpoint:s,children:[e.jsx(t,{required:!0,label:o==="en"?"First name":"Имя"}),e.jsx(t,{required:!0,label:o==="en"?"Second name":"Фамилия"}),e.jsx(t,{error:!0,required:!0,label:o==="en"?"Patronymic":"Отчество"})]})}};var n,a,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: ({
    breakpoint
  }, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    return <TextFieldGroup breakpoint={breakpoint}>
        <TextField required label={locale === 'en' ? 'First name' : 'Имя'} />
        <TextField required label={locale === 'en' ? 'Second name' : 'Фамилия'} />
        <TextField error required label={locale === 'en' ? 'Patronymic' : 'Отчество'} />
      </TextFieldGroup>;
  }
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const S=["Demo"];export{r as Demo,S as __namedExportsOrder,k as default};
