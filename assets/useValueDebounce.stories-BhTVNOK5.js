import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{B as h}from"./Box-wRm4ebgR.js";import{T as b}from"./TextField-B-8j0Rl0.js";import{T as v}from"./Typography-dCWir4IF.js";import{F as u}from"./FormControlLabel-BErLQFZ_.js";import{C as d}from"./Checkbox-88teVN7k.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./FormControl-DlxfVnjv.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-BEN161lL.js";import"./Menu-_nfAmUNL.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-DEEcjM6r.js";import"./useTheme-ErypeN0Y.js";import"./Grow-Dt_8BulK.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-CDvdv1-t.js";import"./Modal-B7qrzaAx.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-DWBj0t68.js";import"./MenuList-hBx3FRLR.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-3eNI6DIc.js";import"./SvgIcon-B3E_vWSd.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-Di0bQe5l.js";import"./Radio.classes-xHIw2WsX.js";import"./SwitchBase-B94b24U2.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";const T=(i,a,l={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:p=!0}=l,r=o.useRef(!0),[c,m]=o.useState(i);return o.useEffect(()=>{r.current&&(r.current=!1,n&&m(i));const t=setTimeout(()=>{r.current=!0,p&&m(i)},a);return()=>{clearTimeout(t)}},[i,a,n,p]),c},Be={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},s={render:function(){const[a,l]=o.useState(""),[n,p]=o.useState(!1),[r,c]=o.useState(!0),m=T(a,1e3,{leading:n,trailing:r});return e.jsxs("div",{children:[e.jsxs(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(b,{fullWidth:!0,label:"Value",size:"40",value:a,onChange:t=>l(t.target.value)}),e.jsx(u,{control:e.jsx(d,{checked:n,onChange:t=>p(t.target.checked)}),label:"Leading"}),e.jsx(u,{control:e.jsx(d,{checked:r,onChange:t=>c(t.target.checked)}),label:"Trailing"})]}),e.jsxs(v,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",m]})]})}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const Ee=["Demo"];export{s as Demo,Ee as __namedExportsOrder,Be as default};
