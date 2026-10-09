import{r as s,j as e}from"./iframe-WZaTcFld.js";import{F as g}from"./FormControlLabel-DTzHH_lg.js";import{C as d}from"./Checkbox-BTlkciZl.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./SwitchBase-lGQAPUZq.js";import"./useControlled-BkzgZrqK.js";import"./FormField.context-xKPgMKao.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";import"./SvgIcon-CImGifIE.js";const k=(i,t,u={})=>{const{rising:r=!1,falling:o=!1}=u,n=s.useRef(i),l=s.useRef(t);return(!r&&!o&&t||r&&t===!0&&l.current===!1||o&&t===!1&&l.current===!0)&&(n.current=i),l.current=t,n.current},I={tags:["autodocs"],title:"Hooks/useValueGate",parameters:{references:["useValueGate"]}},c={render:function(){const[t,u]=s.useState(0),[r,o]=s.useState(!1),[n,l]=s.useState(!1),[m,h]=s.useState(!1);s.useEffect(()=>{const a=setInterval(()=>{u(new Date().getTime())},500);return()=>{clearInterval(a)}},[]);const v=k(t,r,{rising:n,falling:m});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(g,{control:e.jsx(d,{checked:r,onChange:a=>o(a.target.checked)}),label:"Signal"}),e.jsx(g,{control:e.jsx(d,{checked:n,onChange:a=>l(a.target.checked)}),label:"Rising"}),e.jsx(g,{control:e.jsx(d,{checked:m,onChange:a=>h(a.target.checked)}),label:"Falling"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Gated value: ",v]})]})}};var p,f,x;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState(0);
    const [signal, setSignal] = useState(false);
    const [rising, setRising] = useState(false);
    const [falling, setFalling] = useState(false);
    useEffect(() => {
      const timer = setInterval(() => {
        setValue(new Date().getTime());
      }, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);
    const gatedValue = useValueGate(value, signal, {
      rising,
      falling
    });
    return <div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <FormControlLabel control={<Checkbox checked={signal} onChange={event => setSignal(event.target.checked)} />} label="Signal" />

          <FormControlLabel control={<Checkbox checked={rising} onChange={event => setRising(event.target.checked)} />} label="Rising" />

          <FormControlLabel control={<Checkbox checked={falling} onChange={event => setFalling(event.target.checked)} />} label="Falling" />
        </div>

        <div className="body200 mt-8">Gated value: {gatedValue}</div>
      </div>;
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const L=["Demo"];export{c as Demo,L as __namedExportsOrder,I as default};
