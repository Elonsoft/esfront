import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-Wm5baAvf.js";import{F as g}from"./FormControlLabel-DXHUSaHo.js";import{C as d}from"./Checkbox-DnCq8MIY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./SwitchBase-CeEjr7S8.js";import"./useControlled-CibYmksV.js";import"./useFormControl-B4OjCVsv.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";import"./SvgIcon-Bb8ef9Tm.js";const k=(i,t,u={})=>{const{rising:r=!1,falling:o=!1}=u,n=s.useRef(i),l=s.useRef(t);return(!r&&!o&&t||r&&t===!0&&l.current===!1||o&&t===!1&&l.current===!0)&&(n.current=i),l.current=t,n.current},W={tags:["autodocs"],title:"Hooks/useValueGate",parameters:{references:["useValueGate"]}},c={render:function(){const[t,u]=s.useState(0),[r,o]=s.useState(!1),[n,l]=s.useState(!1),[m,h]=s.useState(!1);s.useEffect(()=>{const a=setInterval(()=>{u(new Date().getTime())},500);return()=>{clearInterval(a)}},[]);const v=k(t,r,{rising:n,falling:m});return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(g,{control:e.jsx(d,{checked:r,onChange:a=>o(a.target.checked)}),label:"Signal"}),e.jsx(g,{control:e.jsx(d,{checked:n,onChange:a=>l(a.target.checked)}),label:"Rising"}),e.jsx(g,{control:e.jsx(d,{checked:m,onChange:a=>h(a.target.checked)}),label:"Falling"})]}),e.jsxs("div",{className:"body200 mt-8",children:["Gated value: ",v]})]})}};var p,f,x;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const N=["Demo"];export{c as Demo,N as __namedExportsOrder,W as default};
