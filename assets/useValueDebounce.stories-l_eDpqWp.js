import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as o}from"./index-DIDRz_s2.js";import{B as h}from"./Box-BsYG6vwI.js";import{T as b}from"./TextField-BNsw1mhy.js";import{T as v}from"./Typography-BriYb5H6.js";import{F as u}from"./FormControlLabel-BSinB4vh.js";import{C as d}from"./Checkbox-ITp4r2VM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-D1vrHhOO.js";import"./Radio.classes-d6NcJg5p.js";import"./SwitchBase-BmL7_b1g.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";const T=(i,a,l={leading:!1,trailing:!0})=>{const{leading:n=!1,trailing:s=!0}=l,r=o.useRef(!0),[c,p]=o.useState(i);return o.useEffect(()=>{r.current&&(r.current=!1,n&&p(i));const t=setTimeout(()=>{r.current=!0,s&&p(i)},a);return()=>{clearTimeout(t)}},[i,a,n,s]),c},je={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},m={render:function(){const[a,l]=o.useState(""),[n,s]=o.useState(!1),[r,c]=o.useState(!0),p=T(a,1e3,{leading:n,trailing:r});return e.jsxs("div",{children:[e.jsxs(h,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(b,{fullWidth:!0,label:"Value",size:"40",value:a,onChange:t=>l(t.target.value)}),e.jsx(u,{control:e.jsx(d,{checked:n,onChange:t=>s(t.target.checked)}),label:"Leading"}),e.jsx(u,{control:e.jsx(d,{checked:r,onChange:t=>c(t.target.checked)}),label:"Trailing"})]}),e.jsxs(v,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",p]})]})}};var g,x,f;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const ye=["Demo"];export{m as Demo,ye as __namedExportsOrder,je as default};
