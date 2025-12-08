import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{B as h}from"./Box-CBu-ct3E.js";import{T as b}from"./TextField-D_RGTig6.js";import{T as v}from"./Typography-56Df3xvc.js";import{F as u}from"./FormControlLabel-pWucdSu6.js";import{C as d}from"./Checkbox-BrSvy4-M.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-BjMK7FSC.js";import"./Radio.classes-Cu6Fl8Lq.js";import"./SwitchBase-CDpVtUcg.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DUjU_dba.js";import"./SvgIcon.classes-BQruNm0T.js";const T=(i,a,l={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:p=!0}=l,r=o.useRef(!0),[c,s]=o.useState(i);return o.useEffect(()=>{r.current&&(r.current=!1,n&&s(i));const t=setTimeout(()=>{r.current=!0,p&&s(i)},a);return()=>{clearTimeout(t)}},[i,a,n,p]),c},Fe={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},m={render:function(){const[a,l]=o.useState(""),[n,p]=o.useState(!1),[r,c]=o.useState(!0),s=T(a,1e3,{leading:n,trailing:r});return e.jsxs("div",{children:[e.jsxs(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(b,{fullWidth:!0,label:"Value",size:"40",value:a,onChange:t=>l(t.target.value)}),e.jsx(u,{control:e.jsx(d,{checked:n,onChange:t=>p(t.target.checked)}),label:"Leading"}),e.jsx(u,{control:e.jsx(d,{checked:r,onChange:t=>c(t.target.checked)}),label:"Trailing"})]}),e.jsxs(v,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",s]})]})}};var g,x,f;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const debouncedValue = useValueDebounce(value, 1000, {
      leading,
      trailing
    });
    return <div>
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" value={value} onChange={event => setValue(event.target.value)} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </Box>

        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Debounced value: {debouncedValue}
        </Typography>
      </div>;
  }
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const We=["Demo"];export{m as Demo,We as __namedExportsOrder,Fe as default};
