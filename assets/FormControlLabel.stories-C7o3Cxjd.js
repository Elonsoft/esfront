import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{F as r}from"./FormControlLabel-BSinB4vh.js";import{B as j}from"./Box-BsYG6vwI.js";import{C as a}from"./Checkbox-ITp4r2VM.js";import{F as y}from"./FormControl-7QajZyzq.js";import{R as f}from"./RadioGroup-DtPsP1ZY.js";import{R as p}from"./Radio-DCf9qxvE.js";import{F as n}from"./FormHelperText-DjxYqVYo.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./Typography-BriYb5H6.js";import"./clsx-B-dksMZM.js";import"./Checkbox.classes-D1vrHhOO.js";import"./Radio.classes-d6NcJg5p.js";import"./SwitchBase-BmL7_b1g.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-B9NMWNaQ.js";import"./clsx-KPMS8x67.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./isMuiElement-WSaQkCi4.js";import"./useControlled-ew9sXcp7.js";import"./useForkRef-B4JCUkpP.js";import"./useId-Dx6QqNEU.js";import"./FormGroup-BPkL7Q0i.js";import"./formControlState-Dq1zat_P.js";import"./createChainedFunction-BO_9K8Jh.js";const oe={tags:["autodocs"],component:r,parameters:{references:["FormControlLabel"]},argTypes:{control:{table:{disable:!0}},label:{control:{type:"text"}},labelPlacement:{control:{type:"select"},options:["bottom","end","start","top"]},size:{control:{type:"select"},options:["large","medium","small"]},disabled:{control:{type:"boolean"}}}},s={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l})]})}},t={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsx(y,{children:e.jsxs(f,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",sx:{gap:"16px"},children:[e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"1"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"2"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"3"}),...l})]})})}},i={render:o=>e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"large"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 32px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"medium"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 28px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"small"}),label:o.label||"Control",slotProps:{typography:{variant:"body100"}}}),e.jsx(n,{sx:{margin:"4px 0 0 24px"},children:"Helper text"})]})]})};var m,d,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const re=["Demo","Radio","HelperText"];export{s as Demo,i as HelperText,t as Radio,re as __namedExportsOrder,oe as default};
