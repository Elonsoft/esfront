import{j as e}from"./iframe-WZaTcFld.js";import{F as o}from"./FormControlLabel-DTzHH_lg.js";import{C as a}from"./Checkbox-BTlkciZl.js";import{F as d,a as p}from"./FormFieldHelperText-DZMLTBde.js";import{R as j}from"./RadioGroup-0ZGtTBbm.js";import{R as n}from"./Radio-Bfv7qhOS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./SwitchBase-lGQAPUZq.js";import"./useControlled-BkzgZrqK.js";import"./FormField.context-xKPgMKao.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./SvgIcon-CImGifIE.js";import"./useId-Cowwq5kl.js";import"./createChainedFunction-Cp_t5fpS.js";const O={tags:["autodocs"],component:o,parameters:{references:["FormControlLabel"]},argTypes:{control:{table:{disable:!0}},label:{control:{type:"text"}},labelPlacement:{control:{type:"select"},options:["bottom","end","start","top"]},size:{control:{type:"select"},options:["large","medium","small"]},disabled:{control:{type:"boolean"}}}},s={render:l=>{const r={label:l.label||"Control",labelPlacement:l.labelPlacement,slotProps:{typography:{className:l.size==="small"?"body100":"subtitle1"}}};return e.jsxs("div",{className:"flex flex-col align-items-start gap-16",children:[e.jsx(o,{control:e.jsx(a,{disabled:l.disabled,size:l.size}),...r}),e.jsx(o,{control:e.jsx(a,{disabled:l.disabled,size:l.size}),...r}),e.jsx(o,{control:e.jsx(a,{disabled:l.disabled,size:l.size}),...r})]})}},t={render:l=>{const r={label:l.label||"Control",labelPlacement:l.labelPlacement,slotProps:{typography:{className:l.size==="small"?"body100":"subtitle1"}}};return e.jsxs(j,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",style:{gap:"16px"},children:[e.jsx(o,{control:e.jsx(n,{disabled:l.disabled,name:"radio",size:l.size,value:"1"}),...r}),e.jsx(o,{control:e.jsx(n,{disabled:l.disabled,name:"radio",size:l.size,value:"2"}),...r}),e.jsx(o,{control:e.jsx(n,{disabled:l.disabled,name:"radio",size:l.size,value:"3"}),...r})]})}},i={render:l=>e.jsxs("div",{className:"flex flex-col align-items-start gap-16",children:[e.jsxs(d,{children:[e.jsx(o,{control:e.jsx(a,{size:"large"}),label:l.label||"Control"}),e.jsx(p,{style:{margin:"2px 0 0 32px",padding:0},children:"Helper text"})]}),e.jsxs(d,{children:[e.jsx(o,{control:e.jsx(a,{size:"medium"}),label:l.label||"Control"}),e.jsx(p,{style:{margin:"2px 0 0 28px",padding:0},children:"Helper text"})]}),e.jsxs(d,{children:[e.jsx(o,{control:e.jsx(a,{size:"small"}),label:l.label||"Control",slotProps:{typography:{className:"body100"}}}),e.jsx(p,{style:{margin:"4px 0 0 24px",padding:0},children:"Helper text"})]})]})};var m,b,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          className: args.size === 'small' ? 'body100' : 'subtitle1'
        }
      }
    };
    return <div className="flex flex-col align-items-start gap-16">
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
      </div>;
  }
}`,...(c=(b=s.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var x,u,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          className: args.size === 'small' ? 'body100' : 'subtitle1'
        }
      }
    };
    return <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" style={{
      gap: '16px'
    }}>
        <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="1" />} {...props} />
        <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="2" />} {...props} />
        <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="3" />} {...props} />
      </RadioGroup>;
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var F,z,y;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col align-items-start gap-16">
        <FormField>
          <FormControlLabel control={<Checkbox size="large" />} label={args.label || 'Control'} />
          <FormFieldHelperText style={{
          margin: '2px 0 0 32px',
          padding: 0
        }}>Helper text</FormFieldHelperText>
        </FormField>
        <FormField>
          <FormControlLabel control={<Checkbox size="medium" />} label={args.label || 'Control'} />
          <FormFieldHelperText style={{
          margin: '2px 0 0 28px',
          padding: 0
        }}>Helper text</FormFieldHelperText>
        </FormField>
        <FormField>
          <FormControlLabel control={<Checkbox size="small" />} label={args.label || 'Control'} slotProps={{
          typography: {
            className: 'body100'
          }
        }} />
          <FormFieldHelperText style={{
          margin: '4px 0 0 24px',
          padding: 0
        }}>Helper text</FormFieldHelperText>
        </FormField>
      </div>;
  }
}`,...(y=(z=i.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const $=["Demo","Radio","HelperText"];export{s as Demo,i as HelperText,t as Radio,$ as __namedExportsOrder,O as default};
