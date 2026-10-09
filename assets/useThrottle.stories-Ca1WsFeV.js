import{r as o,b as p,j as r}from"./iframe-WZaTcFld.js";import{T as v}from"./TextField-DC1lqpSU.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";const h=(i,e,u)=>{const t=o.useRef(Date.now()),a=p(i);o.useEffect(()=>{const s=Date.now()-t.current;if(s>=e)t.current=Date.now(),a.current();else{const m=setTimeout(()=>{t.current=Date.now(),a.current()},e-s);return()=>clearTimeout(m)}},u)},S={tags:["autodocs"],title:"Hooks/useThrottle",parameters:{references:["useThrottle"]}},l={render:function(){const[e,u]=o.useState(""),[t,a]=o.useState("");return h(()=>{a(e)},1e3,[e]),r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:r.jsx(v,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:s=>u(s.target.value)})}),r.jsxs("div",{className:"body200 mt-8",children:["Value: ",e]}),r.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",t]})]})}};var d,n,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');
    useThrottle(() => {
      setThrottledValue(value);
    }, 1000, [value]);
    return <div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <TextField fullWidth label="Value" size="500" value={value} onChange={event => setValue(event.target.value)} />
        </div>

        <div className="body200 mt-8">Value: {value}</div>

        <div className="body200 mt-8">Throttled value: {throttledValue}</div>
      </div>;
  }
}`,...(c=(n=l.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const E=["Demo"];export{l as Demo,E as __namedExportsOrder,S as default};
