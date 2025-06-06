import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r}from"./index-DIDRz_s2.js";import{B as k}from"./Box-BsYG6vwI.js";import{T as b}from"./Typography-BriYb5H6.js";import{F as m}from"./FormControlLabel-BSinB4vh.js";import{C as g}from"./Checkbox-ITp4r2VM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./clsx-KPMS8x67.js";import"./clsx-B-dksMZM.js";import"./clsx.m-C7bORDfW.js";import"./Checkbox.classes-D1vrHhOO.js";import"./Radio.classes-d6NcJg5p.js";import"./SwitchBase-BmL7_b1g.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./appendOwnerState-B9NMWNaQ.js";import"./SvgIcon-DnRBQAn1.js";import"./SvgIcon.classes-CqsHNf3G.js";const C=(c,t,p={})=>{const{rising:o=!1,falling:l=!1}=p,s=r.useRef(c),n=r.useRef(t);return(!o&&!l&&t||o&&t===!0&&n.current===!1||l&&t===!1&&n.current===!0)&&(s.current=c),n.current=t,s.current},K={tags:["autodocs"],title:"Hooks/useValueGate",parameters:{references:["useValueGate"]}},i={render:function(){const[t,p]=r.useState(0),[o,l]=r.useState(!1),[s,n]=r.useState(!1),[u,h]=r.useState(!1);r.useEffect(()=>{const a=setInterval(()=>{p(new Date().getTime())},500);return()=>{clearInterval(a)}},[]);const v=C(t,o,{rising:s,falling:u});return e.jsxs("div",{children:[e.jsxs(k,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(m,{control:e.jsx(g,{checked:o,onChange:a=>l(a.target.checked)}),label:"Signal"}),e.jsx(m,{control:e.jsx(g,{checked:s,onChange:a=>n(a.target.checked)}),label:"Rising"}),e.jsx(m,{control:e.jsx(g,{checked:u,onChange:a=>h(a.target.checked)}),label:"Falling"})]}),e.jsxs(b,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Gated value: ",v]})]})}};var d,x,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: '320px'
      }}>
          <FormControlLabel control={<Checkbox checked={signal} onChange={event => setSignal(event.target.checked)} />} label="Signal" />

          <FormControlLabel control={<Checkbox checked={rising} onChange={event => setRising(event.target.checked)} />} label="Rising" />

          <FormControlLabel control={<Checkbox checked={falling} onChange={event => setFalling(event.target.checked)} />} label="Falling" />
        </Box>

        <Typography component="div" sx={{
        marginTop: '8px'
      }} variant="body200">
          Gated value: {gatedValue}
        </Typography>
      </div>;
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const M=["Demo"];export{i as Demo,M as __namedExportsOrder,K as default};
