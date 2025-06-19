import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as t}from"./index-DIDRz_s2.js";import{u as h}from"./useLatest-sVqXUmVb.js";import{B as v}from"./Box-Og3xCN3M.js";import{T}from"./TextField-Cv87NqMI.js";import{T as C}from"./Typography-CtYhM0r3.js";import{F as d}from"./FormControlLabel-BxbG9eR3.js";import{C as g}from"./Checkbox-aa69jvGb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./identifier-DA8c-tJk.js";import"./styled-B0X8gopH.js";import"./useTheme-B2nYkSwK.js";import"./extendSxProp-ftMfNaJf.js";import"./memoTheme-CJcpijc4.js";import"./useSlot-CFc0_OMk.js";import"./mergeSlotProps-fp1W1fei.js";import"./useForkRef-Cmn-Dh7x.js";import"./appendOwnerState-BTP2NS_9.js";import"./DefaultPropsProvider-Di_N6kFi.js";import"./useId-DHFVogFr.js";import"./useFormControl-Crkhef2u.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BubGiXqi.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./FormControl-CYKlpDDs.js";import"./isMuiElement-DbqDAyDR.js";import"./useEnhancedEffect-BGNjlb7u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-B5h_k30D.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-Cdrn0csy.js";import"./Menu-DtX3jm--.js";import"./index-CycuZXML.js";import"./useSlotProps-CexWkmt_.js";import"./Popover-C64DOLfh.js";import"./useTheme-D4EsW5Cf.js";import"./Grow-xlv4EofS.js";import"./getReactElementRef-BCGM00pR.js";import"./TransitionGroupContext-8frXp1f-.js";import"./index-BqLR6Ykc.js";import"./index-B9nU-LZm.js";import"./useTimeout-BgqVTnbA.js";import"./mergeSlotProps-D4lRB2Fy.js";import"./Modal-CpL86C22.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-Cdjvc33M.js";import"./FocusTrap-vTo9pgoY.js";import"./Fade-D0jgUazQ.js";import"./MenuList-qnTf9CO-.js";import"./useControlled-BX5XFdR0.js";import"./createSvgIcon-CW64547e.js";import"./SvgIcon-U0LES8Ux.js";import"./clsx.m-C7bORDfW.js";import"./useThemeProps-DTzdApbH.js";import"./Checkbox.classes-DCGgaf0R.js";import"./Radio.classes-C1T3F-i7.js";import"./SwitchBase-CfIwweoD.js";import"./useControlled-DdQm0pQX.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-BU7TD1_e.js";import"./SvgIcon.classes-C7Fm2IhD.js";const k=(c,r,m,a={leading:!1,trailing:!0})=>{const{leading:l=!1,trailing:n=!0}=a,o=t.useRef(!0),p=h(c);t.useEffect(()=>{o.current&&(o.current=!1,l&&p.current());const u=setTimeout(()=>{o.current=!0,n&&p.current()},r);return()=>{clearTimeout(u)}},m)},ze={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},s={render:function(){const[r,m]=t.useState(""),[a,l]=t.useState(!1),[n,o]=t.useState(!0),[p,u]=t.useState("");return k(()=>{u(r)},1e3,[r],{leading:a,trailing:n}),e.jsxs("div",{children:[e.jsxs(v,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(T,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:i=>m(i.target.value)}),e.jsx(d,{control:e.jsx(g,{checked:a,onChange:i=>l(i.target.checked)}),label:"Leading"}),e.jsx(d,{control:e.jsx(g,{checked:n,onChange:i=>o(i.target.checked)}),label:"Trailing"})]}),e.jsxs(C,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",p]})]})}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _e=["Demo"];export{s as Demo,_e as __namedExportsOrder,ze as default};
