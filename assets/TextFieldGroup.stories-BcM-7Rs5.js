import{j as e}from"./iframe-Bc8-Q25v.js";import{T as i}from"./TextFieldGroup-PmXihSqr.js";import{T as t}from"./TextField-j8tsbYSO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";const G={tags:["autodocs"],component:i,parameters:{references:["TextFieldGroup"]}},r={render:({breakpoint:s},m)=>{const o=m.globals.locale||"en";return e.jsxs(i,{breakpoint:s,children:[e.jsx(t,{required:!0,label:o==="en"?"First name":"Имя"}),e.jsx(t,{required:!0,label:o==="en"?"Second name":"Фамилия"}),e.jsx(t,{error:!0,required:!0,label:o==="en"?"Patronymic":"Отчество"})]})}};var n,a,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const k=["Demo"];export{r as Demo,k as __namedExportsOrder,G as default};
