import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{F as l}from"./FormControlLabel-DXHUSaHo.js";import{C as a}from"./Checkbox-_4kod7v1.js";import{F as C}from"./FormControl-C3d8ZCOJ.js";import{R as j}from"./RadioGroup-Cp6enhuz.js";import{R as p}from"./Radio-DWyIOsEr.js";import{F as m}from"./FormHelperText-DKtzwqKg.js";import"./index-ChsGqxH_.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SwitchBase-CCu_Ebw1.js";import"./useControlled-CibYmksV.js";import"./useFormControl-B4OjCVsv.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./composeClasses-CAXbtk_0.js";import"./useControlled-uYOZv1Nc.js";import"./useForkRef-EzStQRfh.js";import"./useId-BsPUOvOw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./memoTheme-Khho5aaB.js";const Y={tags:["autodocs"],component:l,parameters:{references:["FormControlLabel"]},argTypes:{control:{table:{disable:!0}},label:{control:{type:"text"}},labelPlacement:{control:{type:"select"},options:["bottom","end","start","top"]},size:{control:{type:"select"},options:["large","medium","small"]},disabled:{control:{type:"boolean"}}}},s={render:o=>{const r={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{className:o.size==="small"?"body100":"subtitle1"}}};return e.jsxs("div",{className:"flex flex-col align-items-start gap-16",children:[e.jsx(l,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...r}),e.jsx(l,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...r}),e.jsx(l,{control:e.jsx(a,{disabled:o.disabled,size:o.size}),...r})]})}},t={render:o=>{const r={label:o.label||"Control",labelPlacement:o.labelPlacement,slotProps:{typography:{className:o.size==="small"?"body100":"subtitle1"}}};return e.jsx(C,{children:e.jsxs(j,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",style:{gap:"16px"},children:[e.jsx(l,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"1"}),...r}),e.jsx(l,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"2"}),...r}),e.jsx(l,{control:e.jsx(p,{disabled:o.disabled,name:"radio",size:o.size,value:"3"}),...r})]})})}},i={render:o=>e.jsxs("div",{className:"flex flex-col align-items-start gap-16",children:[e.jsxs("div",{children:[e.jsx(l,{control:e.jsx(a,{size:"large"}),label:o.label||"Control"}),e.jsx(m,{style:{margin:"2px 0 0 32px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(l,{control:e.jsx(a,{size:"medium"}),label:o.label||"Control"}),e.jsx(m,{style:{margin:"2px 0 0 28px"},children:"Helper text"})]}),e.jsxs("div",{children:[e.jsx(l,{control:e.jsx(a,{size:"small"}),label:o.label||"Control",slotProps:{typography:{className:"body100"}}}),e.jsx(m,{style:{margin:"4px 0 0 24px"},children:"Helper text"})]})]})};var d,n,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(n=s.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};var c,x,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    return <FormControl>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" style={{
        gap: '16px'
      }}>
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="1" />} {...props} />
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="2" />} {...props} />
          <FormControlLabel control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="3" />} {...props} />
        </RadioGroup>
      </FormControl>;
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,z,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col align-items-start gap-16">
        <div>
          <FormControlLabel control={<Checkbox size="large" />} label={args.label || 'Control'} />
          <FormHelperText style={{
          margin: '2px 0 0 32px'
        }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel control={<Checkbox size="medium" />} label={args.label || 'Control'} />
          <FormHelperText style={{
          margin: '2px 0 0 28px'
        }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel control={<Checkbox size="small" />} label={args.label || 'Control'} slotProps={{
          typography: {
            className: 'body100'
          }
        }} />
          <FormHelperText style={{
          margin: '4px 0 0 24px'
        }}>Helper text</FormHelperText>
        </div>
      </div>;
  }
}`,...(y=(z=i.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const Z=["Demo","Radio","HelperText"];export{s as Demo,i as HelperText,t as Radio,Z as __namedExportsOrder,Y as default};
