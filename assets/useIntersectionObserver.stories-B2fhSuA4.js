import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{r as s}from"./index-DIDRz_s2.js";import{u as x}from"./useIntersectionObserver-Bn-bajRp.js";import{B as t}from"./Box-CBu-ct3E.js";import{T as d}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-sVqXUmVb.js";import"./identifier-haEvzVNA.js";import"./styled-CkBBDypc.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const w={tags:["autodocs"],title:"Hooks/useIntersectionObserver",parameters:{references:["useIntersectionObserver"]}},r={render:function(){const[a,c]=s.useState(!1),o=s.useRef(null);return x(o,m=>{c(m[0].isIntersecting)}),e.jsxs(t,{sx:{height:"min(calc(100vh - 32px), 300px)",overflow:"auto",border:"1px solid black",borderRadius:"4px"},children:[e.jsxs(d,{component:"div",sx:{position:"sticky",top:0,backgroundColor:"monoB.500",padding:"4px 8px"},variant:"body100",children:["Bottom element is intersecting: ",a.toString()]}),e.jsx(t,{sx:{height:"600px"}}),e.jsx(t,{ref:o,sx:{height:"64px",backgroundColor:"primary.300"}})]})}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: function Render() {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLElement | null>(null);
    useIntersectionObserver(ref, entries => {
      setIntersecting(entries[0].isIntersecting);
    });
    return <Box sx={{
      height: 'min(calc(100vh - 32px), 300px)',
      overflow: 'auto',
      border: '1px solid black',
      borderRadius: '4px'
    }}>
        <Typography component="div" sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'monoB.500',
        padding: '4px 8px'
      }} variant="body100">
          Bottom element is intersecting: {isIntersecting.toString()}
        </Typography>
        <Box sx={{
        height: '600px'
      }} />
        <Box ref={ref} sx={{
        height: '64px',
        backgroundColor: 'primary.300'
      }} />
      </Box>;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const D=["Demo"];export{r as Demo,D as __namedExportsOrder,w as default};
