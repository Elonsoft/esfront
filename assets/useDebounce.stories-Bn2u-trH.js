import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as t}from"./index-DIDRz_s2.js";import{u as h}from"./useLatest-sVqXUmVb.js";import{B as v}from"./Box-BsYG6vwI.js";import{T}from"./TextField-BNsw1mhy.js";import{T as C}from"./Typography-BriYb5H6.js";import{F as d}from"./FormControlLabel-BSinB4vh.js";import{C as g}from"./Checkbox-ITp4r2VM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./useId-Dx6QqNEU.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./FormControl-7QajZyzq.js";import"./isMuiElement-WSaQkCi4.js";import"./useForkRef-B4JCUkpP.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./appendOwnerState-B9NMWNaQ.js";import"./GlobalStyles-7TZ7H8GY.js";import"./Menu-BU22523T.js";import"./index-CbLA2MxP.js";import"./useSlotProps-Dpc6KwLu.js";import"./Popover-DMugHk6X.js";import"./getOverlayAlpha-VE_eitC7.js";import"./Grow-E4hGvhFy.js";import"./useTheme-LlnDz48U.js";import"./utils-Cq59Lonh.js";import"./TransitionGroupContext-DaV7NuBA.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-CS-EPZZq.js";import"./Modal-RUXrZPLp.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./useEventCallback-B5h_k30D.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DAw-RMf5.js";import"./FocusTrap-D5YxnQCr.js";import"./Fade-CJiQNbBq.js";import"./MenuList-Ccyljjh3.js";import"./useControlled-ew9sXcp7.js";import"./createSvgIcon-DaHYJ09t.js";import"./SvgIcon-DeOyXKlF.js";import"./FormHelperText-DjxYqVYo.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-D1vrHhOO.js";import"./Radio.classes-d6NcJg5p.js";import"./SwitchBase-BmL7_b1g.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";const k=(c,r,l,i={leading:!1,trailing:!0})=>{const{leading:m=!1,trailing:n=!0}=i,o=t.useRef(!0),s=h(c);t.useEffect(()=>{o.current&&(o.current=!1,m&&s.current());const u=setTimeout(()=>{o.current=!0,n&&s.current()},r);return()=>{clearTimeout(u)}},l)},Le={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},p={render:function(){const[r,l]=t.useState(""),[i,m]=t.useState(!1),[n,o]=t.useState(!0),[s,u]=t.useState("");return k(()=>{u(r)},1e3,[r],{leading:i,trailing:n}),e.jsxs("div",{children:[e.jsxs(v,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(T,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:a=>l(a.target.value)}),e.jsx(d,{control:e.jsx(g,{checked:i,onChange:a=>m(a.target.checked)}),label:"Leading"}),e.jsx(d,{control:e.jsx(g,{checked:n,onChange:a=>o(a.target.checked)}),label:"Trailing"})]}),e.jsxs(C,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",s]})]})}};var x,f,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Se=["Demo"];export{p as Demo,Se as __namedExportsOrder,Le as default};
