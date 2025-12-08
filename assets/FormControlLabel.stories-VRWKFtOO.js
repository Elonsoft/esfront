import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{F as r}from"./FormControlLabel-pWucdSu6.js";import{B as j}from"./Box-CBu-ct3E.js";import{C as a}from"./Checkbox-BrSvy4-M.js";import{F as y}from"./FormControl-BHVgFtT5.js";import{R as f}from"./RadioGroup-BM2XhH70.js";import{R as p}from"./Radio-CJBpfpag.js";import{F as n}from"./FormHelperText-gfZl3CJm.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./appendOwnerState-BTP2NS_9.js";import"./styled-CkBBDypc.js";import"./Typography-56Df3xvc.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./Checkbox.classes-BjMK7FSC.js";import"./Radio.classes-Cu6Fl8Lq.js";import"./SwitchBase-CDpVtUcg.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DUjU_dba.js";import"./SvgIcon.classes-BQruNm0T.js";import"./isMuiElement-DbqDAyDR.js";import"./useControlled-BX5XFdR0.js";import"./useForkRef-Cmn-Dh7x.js";import"./useId-DHFVogFr.js";import"./createChainedFunction-BO_9K8Jh.js";const se={tags:["autodocs"],component:r,parameters:{references:["FormControlLabel"]},argTypes:{control:{table:{disable:!0}},label:{control:{type:"text"}},labelPlacement:{control:{type:"select"},options:["bottom","end","start","top"]},size:{control:{type:"select"},options:["large","medium","small"]},disabled:{control:{type:"boolean"}}}},s={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l})]})}},t={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsx(y,{children:e.jsxs(f,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",sx:{gap:"16px"},children:[e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"1"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"2"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"3"}),...l})]})})}},i={render:o=>e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"large"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 32px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"medium"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 28px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"small"}),label:o.label||"Control",slotProps:{typography:{variant:"body100"}}}),e.jsx(n,{sx:{margin:"4px 0 0 24px"},children:"Helper text"})]})]})};var m,d,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          variant: args.size === 'small' ? 'body100' as const : 'subtitle1' as const
        }
      }
    };
    return <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
      </Box>;
  }
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var b,c,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          variant: args.size === 'small' ? 'body100' as const : 'subtitle1' as const
        }
      }
    };
    return <FormControl>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" sx={{
        gap: '16px'
      }}>
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="1" />} {...props} />
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="2" />} {...props} />
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="3" />} {...props} />
        </RadioGroup>
      </FormControl>;
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,z,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <div>
          <FormControlLabel control={<Checkbox size="large" />} label={args.label || 'Control'} />
          <FormHelperText sx={{
          margin: '2px 0 0 32px'
        }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel control={<Checkbox size="medium" />} label={args.label || 'Control'} />
          <FormHelperText sx={{
          margin: '2px 0 0 28px'
        }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel control={<Checkbox size="small" />} label={args.label || 'Control'} slotProps={{
          typography: {
            variant: 'body100'
          }
        }} />
          <FormHelperText sx={{
          margin: '4px 0 0 24px'
        }}>Helper text</FormHelperText>
        </div>
      </Box>;
  }
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const te=["Demo","Radio","HelperText"];export{s as Demo,i as HelperText,t as Radio,te as __namedExportsOrder,se as default};
