import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{u as b}from"./useLatest-sVqXUmVb.js";import{B as h}from"./Box-wRm4ebgR.js";import{T as C}from"./TextField-B-8j0Rl0.js";import{F as u}from"./FormControlLabel-BErLQFZ_.js";import{C as d}from"./Checkbox-88teVN7k.js";import{T as v}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-Di0bQe5l.js";import"./Radio.classes-xHIw2WsX.js";import"./SwitchBase-B94b24U2.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";const T=(m,a,s={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:l=!0}=s,r=o.useRef(null),i=o.useRef(!0),c=b((...e)=>{r.current&&clearTimeout(r.current),i.current&&(i.current=!1,n&&m(...e)),r.current=setTimeout(()=>{i.current=!0,l&&m(...e)},a)});return o.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),c.current},Be={tags:["autodocs"],title:"Hooks/useCallbackDebounce",parameters:{references:["useCallbackDebounce"]}},p={render:function(){const[a,s]=o.useState(!1),[n,l]=o.useState(!0),[r,i]=o.useState(""),c=T(e=>{i(e.target.value)},1e3,{leading:a,trailing:n});return t.jsxs("div",{children:[t.jsxs(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[t.jsx(C,{fullWidth:!0,label:"Value",size:"40",onChange:c}),t.jsx(u,{control:t.jsx(d,{checked:a,onChange:e=>s(e.target.checked)}),label:"Leading"}),t.jsx(u,{control:t.jsx(d,{checked:n,onChange:e=>l(e.target.checked)}),label:"Trailing"})]}),t.jsxs(v,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",r]})]})}};var g,x,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const we=["Demo"];export{p as Demo,we as __namedExportsOrder,Be as default};
