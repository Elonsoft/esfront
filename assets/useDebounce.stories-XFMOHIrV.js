import{r as t,b as v,j as e}from"./iframe-WZaTcFld.js";import{T as h}from"./TextField-DC1lqpSU.js";import{F as g}from"./FormControlLabel-DTzHH_lg.js";import{C as p}from"./Checkbox-BTlkciZl.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";import"./SwitchBase-lGQAPUZq.js";import"./useControlled-BkzgZrqK.js";import"./ButtonBase-A8DfStIe.js";import"./SvgIcon-CImGifIE.js";const C=(m,a,c,o={leading:!1,trailing:!0})=>{const{leading:u=!1,trailing:s=!0}=o,r=t.useRef(!0),l=v(m);t.useEffect(()=>{r.current&&(r.current=!1,u&&l.current());const d=setTimeout(()=>{r.current=!0,s&&l.current()},a);return()=>{clearTimeout(d)}},c)},q={tags:["autodocs"],title:"Hooks/useDebounce",parameters:{references:["useDebounce"]}},i={render:function(){const[a,c]=t.useState(""),[o,u]=t.useState(!1),[s,r]=t.useState(!0),[l,d]=t.useState("");return C(()=>{d(a)},1e3,[a],{leading:o,trailing:s}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(h,{fullWidth:!0,label:"Value",size:"500",value:a,onChange:n=>c(n.target.value)}),e.jsx(g,{control:e.jsx(p,{checked:o,onChange:n=>u(n.target.checked)}),label:"Leading"}),e.jsx(g,{control:e.jsx(p,{checked:s,onChange:n=>r(n.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var b,x,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <TextField fullWidth label="Value" size="500" value={value} onChange={event => setValue(event.target.value)} />

          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label="Leading" />

          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label="Trailing" />
        </div>

        <div className="body200 mt-8">Debounced value: {debouncedValue}</div>
      </div>;
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const A=["Demo"];export{i as Demo,A as __namedExportsOrder,q as default};
