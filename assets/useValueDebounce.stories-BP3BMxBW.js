import{r,j as e}from"./iframe-WZaTcFld.js";import{T as f}from"./TextField-DC1lqpSU.js";import{F as m}from"./FormControlLabel-DTzHH_lg.js";import{C as g}from"./Checkbox-BTlkciZl.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";import"./SwitchBase-lGQAPUZq.js";import"./useControlled-BkzgZrqK.js";import"./ButtonBase-A8DfStIe.js";import"./SvgIcon-CImGifIE.js";const h=(o,n,u={leading:!1,trailing:!0})=>{const{leading:s=!1,trailing:i=!0}=u,a=r.useRef(!0),[d,l]=r.useState(o);return r.useEffect(()=>{a.current&&(a.current=!1,s&&l(o));const t=setTimeout(()=>{a.current=!0,i&&l(o)},n);return()=>{clearTimeout(t)}},[o,n,s,i]),d},H={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},c={render:function(){const[n,u]=r.useState(""),[s,i]=r.useState(!1),[a,d]=r.useState(!0),l=h(n,1e3,{leading:s,trailing:a});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(f,{fullWidth:!0,label:"Value",size:"500",value:n,onChange:t=>u(t.target.value)}),e.jsx(m,{control:e.jsx(g,{checked:s,onChange:t=>i(t.target.checked)}),label:"Leading"}),e.jsx(m,{control:e.jsx(g,{checked:a,onChange:t=>d(t.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var p,x,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [leading, setLeading] = useState(false);
    const [trailing, setTrailing] = useState(true);
    const debouncedValue = useValueDebounce(value, 1000, {
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
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const O=["Demo"];export{c as Demo,O as __namedExportsOrder,H as default};
