import{r as l,j as a}from"./iframe-DIMiXZkL.js";import{T as p}from"./TextField-NZ9SeiFp.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-CQ2vN7PH.js";import"./useId-CXM3-UVf.js";import"./FormFieldHelperText-C1PbgRgg.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BGx9jYzc.js";import"./useForkRef-AZ5KJT18.js";import"./FormFieldLabel-dEzWh-bq.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-DDywECfU.js";const x=(t,e)=>{const r=l.useRef(Date.now()),[u,s]=l.useState(t);return l.useEffect(()=>{const i=Date.now()-r.current;if(i>=e)r.current=Date.now(),s(t);else{const c=setTimeout(()=>{r.current=Date.now(),s(t)},e-i);return()=>{clearTimeout(c)}}},[t,e]),u},R={tags:["autodocs"],title:"Hooks/useValueThrottle",parameters:{references:["useValueThrottle"]}},o={render:function(){const[e,r]=l.useState(""),u=x(e,1e3);return a.jsxs("div",{children:[a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:a.jsx(p,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:s=>r(s.target.value)})}),a.jsxs("div",{className:"body200 mt-8",children:["Value: ",e]}),a.jsxs("div",{className:"body200 mt-8",children:["Throttled value: ",u]})]})}};var d,n,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const throttledValue = useValueThrottle(value, 1000);
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
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const E=["Demo"];export{o as Demo,E as __namedExportsOrder,R as default};
