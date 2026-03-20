import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as t}from"./index-Wm5baAvf.js";import{u as v}from"./useLatest-C1UtP6al.js";import{T as h}from"./TextField-BE5m1Jj6.js";import{F as d}from"./FormControlLabel-DXHUSaHo.js";import{C as g}from"./Checkbox-DnCq8MIY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./clsx.m-C7bORDfW.js";import"./SwitchBase-CeEjr7S8.js";import"./useControlled-CibYmksV.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const C=(p,r,m,a={leading:!1,trailing:!0})=>{const{leading:u=!1,trailing:n=!0}=a,o=t.useRef(!0),s=v(p);t.useEffect(()=>{o.current&&(o.current=!1,u&&s.current());const c=setTimeout(()=>{o.current=!0,n&&s.current()},r);return()=>{clearTimeout(c)}},m)},ke={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},l={render:function(){const[r,m]=t.useState(""),[a,u]=t.useState(!1),[n,o]=t.useState(!0),[s,c]=t.useState("");return C(()=>{c(r)},1e3,[r],{leading:a,trailing:n}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(h,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:i=>m(i.target.value)}),e.jsx(d,{control:e.jsx(g,{checked:a,onChange:i=>u(i.target.checked)}),label:"Leading"}),e.jsx(d,{control:e.jsx(g,{checked:n,onChange:i=>o(i.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",s]})]})}};var x,b,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="40" value={value} onChange={event => setValue(event.target.value)} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>;
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const De=["Demo"];export{l as Demo,De as __namedExportsOrder,ke as default};
