import{r as g,j as t}from"./iframe-CewJnQGO.js";import{T as m}from"./TextField-CjgXH9i3.js";import{F as l}from"./FormFieldAdornment-DmoZ8CvB.js";import{I as a}from"./IconAtLineW500-Bq76LEbo.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BQG9LCtD.js";import"./useId-CoUWHeYF.js";import"./FormFieldHelperText-CK7smVqh.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-CBpy0Ws-.js";import"./useForkRef-PUt3GJOR.js";import"./FormFieldLabel-C3QF6Ekc.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C21djuXa.js";import"./SvgIcon-Djq_eQEN.js";const h=e=>e.globals.locale==="en"?"Label":"Заголовок",T=e=>e.globals.locale==="en"?"Helper text":"Вспомогательный текст",f=e=>e.globals.locale==="en"?"Enter":"Введите",_={tags:["autodocs"],component:m,parameters:{references:["TextField","FormField","FormFieldAdornment","FormFieldField","FormFieldHelperText","FormFieldInput","FormFieldLabel"]},argTypes:{label:{control:{type:"text"}},helperText:{control:{type:"text"}},placeholder:{control:{type:"text"}},variant:{options:["outlined","outlined-notched","filled"],control:{type:"select"}},size:{options:["400","500","600","700","800","900","1000"],control:{type:"select"}},startAdornment:{control:{type:"boolean"}},endAdornment:{control:{type:"boolean"}},id:{table:{disable:!0}},value:{table:{disable:!0}},inputRef:{table:{disable:!0}}},args:{variant:"outlined-notched",size:"700",required:!1,disabled:!1,error:!1,fullWidth:!1}},o={render:function({startAdornment:p,endAdornment:c,...r},n){const[u,x]=g.useState(""),F=p?t.jsx(l,{position:"start",children:t.jsx(a,{})}):null,A=c?t.jsx(l,{position:"end",children:t.jsx(a,{})}):null;return t.jsx(m,{...r,endAdornment:A,helperText:r.helperText||T(n),label:r.label||h(n),placeholder:r.placeholder||f(n),startAdornment:F,value:u,onChange:b=>x(b.target.value)})}};var d,s,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render({
    startAdornment,
    endAdornment,
    ...args
  }, context) {
    const [value, setValue] = useState('');
    const StartAdornment = startAdornment ? <FormFieldAdornment position="start">
        <IconAtLineW500 />
      </FormFieldAdornment> : null;
    const EndAdornment = endAdornment ? <FormFieldAdornment position="end">
        <IconAtLineW500 />
      </FormFieldAdornment> : null;
    return <TextField {...args} endAdornment={EndAdornment} helperText={args.helperText || getHelperText(context)} label={args.label || getLabelText(context)} placeholder={args.placeholder || getPlaceholderText(context)} startAdornment={StartAdornment} value={value} onChange={e => setValue(e.target.value)} />;
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const q=["Demo"];export{o as Demo,q as __namedExportsOrder,_ as default};
