import{r,j as e}from"./iframe-Bc8-Q25v.js";import{T as f}from"./TextField-j8tsbYSO.js";import{F as m}from"./FormControlLabel-CWzNpRDE.js";import{C as g}from"./Checkbox-B74rhBu5.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./SwitchBase-C6cffuB5.js";import"./useControlled-BKv9s01-.js";import"./ButtonBase-BBaKRXh4.js";import"./SvgIcon-CMA3Mbq7.js";const h=(n,o,u={leading:!1,trailing:!0})=>{const{leading:s=!1,trailing:i=!0}=u,a=r.useRef(!0),[d,l]=r.useState(n);return r.useEffect(()=>{a.current&&(a.current=!1,s&&l(n));const t=setTimeout(()=>{a.current=!0,i&&l(n)},o);return()=>{clearTimeout(t)}},[n,o,s,i]),d},_={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},c={render:function(){const[o,u]=r.useState(""),[s,i]=r.useState(!1),[a,d]=r.useState(!0),l=h(o,1e3,{leading:s,trailing:a});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(f,{fullWidth:!0,label:"Value",size:"500",value:o,onChange:t=>u(t.target.value)}),e.jsx(m,{control:e.jsx(g,{checked:s,onChange:t=>i(t.target.checked)}),label:"Leading"}),e.jsx(m,{control:e.jsx(g,{checked:a,onChange:t=>d(t.target.checked)}),label:"Trailing"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Debounced value: ",l]})]})}};var p,x,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const H=["Demo"];export{c as Demo,H as __namedExportsOrder,_ as default};
