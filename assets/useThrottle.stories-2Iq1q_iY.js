import{r as o,a as p,j as a}from"./iframe-Bc8-Q25v.js";import{T as v}from"./TextField-j8tsbYSO.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";const h=(d,e,u)=>{const t=o.useRef(Date.now()),r=p(d);o.useEffect(()=>{const s=Date.now()-t.current;if(s>=e)t.current=Date.now(),r.current();else{const m=setTimeout(()=>{t.current=Date.now(),r.current()},e-s);return()=>clearTimeout(m)}},u)},R={tags:["autodocs"],title:"Hooks/useThrottle",parameters:{references:["useThrottle"]}},l={render:function(){const[e,u]=o.useState(""),[t,r]=o.useState("");return h(()=>{r(e)},1e3,[e]),a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:a.jsx(v,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:s=>u(s.target.value)})}),a.jsxs("div",{className:"body200 mt-8",children:["Value: ",e]}),a.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",t]})]})}};var i,n,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(n=l.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const S=["Demo"];export{l as Demo,S as __namedExportsOrder,R as default};
