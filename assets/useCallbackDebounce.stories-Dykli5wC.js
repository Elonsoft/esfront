import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{u as b}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-CBu-ct3E.js";import{T as C}from"./TextField-D_RGTig6.js";import{F as u}from"./FormControlLabel-pWucdSu6.js";import{C as d}from"./Checkbox-BrSvy4-M.js";import{T as v}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./FormControl-BHVgFtT5.js";import"./isMuiElement-DbqDAyDR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-gfZl3CJm.js";import"./Menu-CgxVvckE.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-BLlr3l9T.js";import"./useTheme-B7wNoq1D.js";import"./Grow-BwlAxJrJ.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./Modal-DZyPzB9s.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-EMyAcTYj.js";import"./MenuList-BFLSMrOv.js";import"./useControlled-BX5XFdR0.js";import"./SvgIcon-5liiqC3t.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-BjMK7FSC.js";import"./Radio.classes-Cu6Fl8Lq.js";import"./SwitchBase-CDpVtUcg.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DUjU_dba.js";import"./SvgIcon.classes-BQruNm0T.js";const T=(m,a,s={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:l=!0}=s,r=o.useRef(null),i=o.useRef(!0),c=b((...e)=>{r.current&&clearTimeout(r.current),i.current&&(i.current=!1,n&&m(...e)),r.current=setTimeout(()=>{i.current=!0,l&&m(...e)},a)});return o.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),c.current},Re={tags:["autodocs"],title:"Hooks/useCallbackDebounce",parameters:{references:["useCallbackDebounce"]}},p={render:function(){const[a,s]=o.useState(!1),[n,l]=o.useState(!0),[r,i]=o.useState(""),c=T(e=>{i(e.target.value)},1e3,{leading:a,trailing:n});return t.jsxs("div",{children:[t.jsxs(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[t.jsx(C,{fullWidth:!0,label:"Value",size:"40",onChange:c}),t.jsx(u,{control:t.jsx(d,{checked:a,onChange:e=>s(e.target.checked)}),label:"Leading"}),t.jsx(u,{control:t.jsx(d,{checked:n,onChange:e=>l(e.target.checked)}),label:"Trailing"})]}),t.jsxs(v,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",r]})]})}};var g,x,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render() {
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const [debouncedValue, setDebouncedValue] = useState('');
    const onChange = useCallbackDebounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setDebouncedValue(event.target.value);
    }, 1000, {
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
          <TextField fullWidth label="Value" size="40" onChange={onChange} />

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
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const We=["Demo"];export{p as Demo,We as __namedExportsOrder,Re as default};
