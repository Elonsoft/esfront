import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{u as d}from"./useLatest-sVqXUmVb.js";import{B as l}from"./Button-CjV5PmVb.js";import{T as b}from"./Typography-dCWir4IF.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-QckRPC_l.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./memoTheme-DzcScnLI.js";import"./index-CckzPfJL.js";import"./extendSxProp-DvIFaZWy.js";import"./useTheme-Dg4q0o-B.js";import"./emotion-react.browser.esm-Cye-CgRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";const f=(r,t,e)=>{const i=d(t);a.useEffect(()=>{if(r.current){const o=new MutationObserver(p=>{i.current(p)});return o.observe(r.current,e),()=>{o.disconnect()}}},[r.current,e])},I={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},n={render:function(){const t=a.useRef(null),[e,i]=a.useState(null);return f(t,o=>{i(o[0].attributeName)},{attributes:!0}),s.jsxs("div",{children:[s.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),s.jsxs(b,{ref:t,component:"div",marginTop:"8px",variant:"body100",children:["Attribute mutated: ",s.jsx("b",{children:e})]})]})}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [mutated, setMutated] = useState<string | null>(null);
    useMutationObserver(ref, entries => {
      setMutated(entries[0].attributeName);
    }, {
      attributes: true
    });
    return <div>
        <Button color="primary" size="400" variant="contained" onClick={() => {
        if (ref.current) {
          ref.current.setAttribute('id', 'useMutationObserver');
        }
      }}>
          Set ID
        </Button>
        <Typography ref={ref} component="div" marginTop="8px" variant="body100">
          Attribute mutated: <b>{mutated}</b>
        </Typography>
      </div>;
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const L=["Demo"];export{n as Demo,L as __namedExportsOrder,I as default};
