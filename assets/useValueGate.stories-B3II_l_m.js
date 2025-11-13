import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{B as k}from"./Box-wRm4ebgR.js";import{T as b}from"./Typography-dCWir4IF.js";import{F as m}from"./FormControlLabel-DzvMcgoL.js";import{C as g}from"./Checkbox-Dl7CPuBG.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./styled-QckRPC_l.js";import"./useTheme-Dg4q0o-B.js";import"./extendSxProp-DvIFaZWy.js";import"./memoTheme-DzcScnLI.js";import"./index-CckzPfJL.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./clsx.m-C7bORDfW.js";import"./appendOwnerState-BTP2NS_9.js";import"./Checkbox.classes-Di0bQe5l.js";import"./Radio.classes-xHIw2WsX.js";import"./SwitchBase-Dfs6IekS.js";import"./useControlled-DdQm0pQX.js";import"./useFormControl-Crkhef2u.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";const C=(c,t,p={})=>{const{rising:o=!1,falling:l=!1}=p,s=a.useRef(c),n=a.useRef(t);return(!o&&!l&&t||o&&t===!0&&n.current===!1||l&&t===!1&&n.current===!0)&&(s.current=c),n.current=t,s.current},U={tags:["autodocs"],title:"Hooks/useValueGate",parameters:{references:["useValueGate"]}},i={render:function(){const[t,p]=a.useState(0),[o,l]=a.useState(!1),[s,n]=a.useState(!1),[u,h]=a.useState(!1);a.useEffect(()=>{const r=setInterval(()=>{p(new Date().getTime())},500);return()=>{clearInterval(r)}},[]);const v=C(t,o,{rising:s,falling:u});return e.jsxs("div",{children:[e.jsxs(k,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[e.jsx(m,{control:e.jsx(g,{checked:o,onChange:r=>l(r.target.checked)}),label:"Signal"}),e.jsx(m,{control:e.jsx(g,{checked:s,onChange:r=>n(r.target.checked)}),label:"Rising"}),e.jsx(m,{control:e.jsx(g,{checked:u,onChange:r=>h(r.target.checked)}),label:"Falling"})]}),e.jsxs(b,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Gated value: ",v]})]})}};var d,x,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const X=["Demo"];export{i as Demo,X as __namedExportsOrder,U as default};
