import{r as a,b as x,j as t}from"./iframe-DIMiXZkL.js";import{T as h}from"./TextField-NZ9SeiFp.js";import{F as m}from"./FormControlLabel-01u4D355.js";import{C as g}from"./Checkbox-ClX4fQpK.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-CQ2vN7PH.js";import"./useId-CXM3-UVf.js";import"./FormFieldHelperText-C1PbgRgg.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BGx9jYzc.js";import"./useForkRef-AZ5KJT18.js";import"./FormFieldLabel-dEzWh-bq.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-DDywECfU.js";import"./SwitchBase-B-qGAv_Q.js";import"./useControlled-V-CCDtrK.js";import"./ButtonBase-GQvGf2x8.js";import"./SvgIcon-DijRRPMl.js";const C=(i,o,c={leading:!1,trailing:!0})=>{const{leading:s=!1,trailing:u=!0}=c,r=a.useRef(null),n=a.useRef(!0),d=x((...e)=>{r.current&&clearTimeout(r.current),n.current&&(n.current=!1,s&&i(...e)),r.current=setTimeout(()=>{n.current=!0,u&&i(...e)},o)});return a.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),d.current},I={tags:["autodocs"],title:"Hooks/useCallbackDebounce",parameters:{references:["useCallbackDebounce"]}},l={render:function(){const[o,c]=a.useState(!1),[s,u]=a.useState(!0),[r,n]=a.useState(""),d=C(e=>{n(e.target.value)},1e3,{leading:o,trailing:s});return t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[t.jsx(h,{fullWidth:!0,label:"Value",size:"500",onChange:d}),t.jsx(m,{control:t.jsx(g,{checked:o,onChange:e=>c(e.target.checked)}),label:"Leading"}),t.jsx(m,{control:t.jsx(g,{checked:s,onChange:e=>u(e.target.checked)}),label:"Trailing"})]}),t.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",r]})]})}};var p,b,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="500" onChange={onChange} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>;
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const M=["Demo"];export{l as Demo,M as __namedExportsOrder,I as default};
