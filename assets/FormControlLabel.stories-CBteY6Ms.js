import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{F as r}from"./FormControlLabel-BxbG9eR3.js";import{B as j}from"./Box-Og3xCN3M.js";import{C as a}from"./Checkbox-aa69jvGb.js";import{F as y}from"./FormControl-CYKlpDDs.js";import{R as f}from"./RadioGroup-BFTrsSrJ.js";import{R as p}from"./Radio-DrHuIEuh.js";import{F as n}from"./FormHelperText-Cdrn0csy.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./appendOwnerState-BTP2NS_9.js";import"./Typography-CtYhM0r3.js";import"./memoTheme-CJcpijc4.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./Checkbox.classes-DCGgaf0R.js";import"./Radio.classes-C1T3F-i7.js";import"./SwitchBase-CfIwweoD.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-BU7TD1_e.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./isMuiElement-DbqDAyDR.js";import"./useControlled-BX5XFdR0.js";import"./useForkRef-Cmn-Dh7x.js";import"./useId-DHFVogFr.js";import"./FormGroup-CGRE8RbL.js";import"./formControlState-Dq1zat_P.js";import"./createChainedFunction-BO_9K8Jh.js";const ie={tags:["autodocs"],component:r,parameters:{references:["FormControlLabel"]},argTypes:{control:{table:{disable:!0}},label:{control:{type:"text"}},labelPlacement:{control:{type:"select"},options:["bottom","end","start","top"]},size:{control:{type:"select"},options:["large","medium","small"]},disabled:{control:{type:"boolean"}}}},t={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l}),e.jsx(r,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...l})]})}},s={render:o=>{const l={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{variant:o.size==="small"?"body100":"subtitle1"}}};return e.jsx(y,{children:e.jsxs(f,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",sx:{gap:"16px"},children:[e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"1"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"2"}),...l}),e.jsx(r,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"3"}),...l})]})})}},i={render:o=>e.jsxs(j,{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px",children:[e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"large"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 32px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"medium"}),label:o.label||"Control"}),e.jsx(n,{sx:{margin:"2px 0 0 28px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(r,{control:e.jsx(a,{size:"small"}),label:o.label||"Control",slotProps:{typography:{variant:"body100"}}}),e.jsx(n,{sx:{margin:"4px 0 0 24px"},children:"Helper text"})]})]})};var m,d,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var b,c,u;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,z,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const pe=["Demo","Radio","HelperText"];export{t as Demo,i as HelperText,s as Radio,pe as __namedExportsOrder,ie as default};
