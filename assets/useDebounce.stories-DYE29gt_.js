import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as t}from"./index-DIDRz_s2.js";import{u as h}from"./useLatest-sVqXUmVb.js";import{B as v}from"./Box-wRm4ebgR.js";import{T}from"./TextField-B-8j0Rl0.js";import{T as C}from"./Typography-dCWir4IF.js";import{F as d}from"./FormControlLabel-BErLQFZ_.js";import{C as g}from"./Checkbox-88teVN7k.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-Di0bQe5l.js";import"./Radio.classes-xHIw2WsX.js";import"./SwitchBase-B94b24U2.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";const k=(c,r,m,a={leading:!1,trailing:!0})=>{const{leading:l=!1,trailing:n=!0}=a,o=t.useRef(!0),p=h(c);t.useEffect(()=>{o.current&&(o.current=!1,l&&p.current());const u=setTimeout(()=>{o.current=!0,n&&p.current()},r);return()=>{clearTimeout(u)}},m)},we={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},s={render:function(){const[r,m]=t.useState(""),[a,l]=t.useState(!1),[n,o]=t.useState(!0),[p,u]=t.useState("");return k(()=>{u(r)},1e3,[r],{leading:a,trailing:n}),e.jsxs("div",{children:[e.jsxs(v,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(T,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:i=>m(i.target.value)}),e.jsx(d,{control:e.jsx(g,{checked:a,onChange:i=>l(i.target.checked)}),label:"Leading"}),e.jsx(d,{control:e.jsx(g,{checked:n,onChange:i=>o(i.target.checked)}),label:"Trailing"})]}),e.jsxs(C,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",p]})]})}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ze=["Demo"];export{s as Demo,ze as __namedExportsOrder,we as default};
