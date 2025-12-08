import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as t}from"./index-DIDRz_s2.js";import{u as h}from"./useLatest-sVqXUmVb.js";import{B as v}from"./Box-CBu-ct3E.js";import{T}from"./TextField-D_RGTig6.js";import{T as C}from"./Typography-56Df3xvc.js";import{F as d}from"./FormControlLabel-pWucdSu6.js";import{C as g}from"./Checkbox-BrSvy4-M.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-BjMK7FSC.js";import"./Radio.classes-Cu6Fl8Lq.js";import"./SwitchBase-CDpVtUcg.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DUjU_dba.js";import"./SvgIcon.classes-BQruNm0T.js";const k=(c,r,m,a={leading:!1,trailing:!0})=>{const{leading:l=!1,trailing:n=!0}=a,o=t.useRef(!0),s=h(c);t.useEffect(()=>{o.current&&(o.current=!1,l&&s.current());const u=setTimeout(()=>{o.current=!0,n&&s.current()},r);return()=>{clearTimeout(u)}},m)},Ee={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},p={render:function(){const[r,m]=t.useState(""),[a,l]=t.useState(!1),[n,o]=t.useState(!0),[s,u]=t.useState("");return k(()=>{u(r)},1e3,[r],{leading:a,trailing:n}),e.jsxs("div",{children:[e.jsxs(v,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(T,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:i=>m(i.target.value)}),e.jsx(d,{control:e.jsx(g,{checked:a,onChange:i=>l(i.target.checked)}),label:"Leading"}),e.jsx(d,{control:e.jsx(g,{checked:n,onChange:i=>o(i.target.checked)}),label:"Trailing"})]}),e.jsxs(C,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",s]})]})}};var x,f,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const [debouncedValue, setDebouncedValue] = useState('');
    useDebounce(() => {
      setDebouncedValue(value);
    }, 1000, [value], {
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
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Re=["Demo"];export{p as Demo,Re as __namedExportsOrder,Ee as default};
