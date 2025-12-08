import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{u as d}from"./useLatest-sVqXUmVb.js";import{B as l}from"./Button-DhPfczDk.js";import{T as b}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./styled-CkBBDypc.js";import"./ButtonBase-CDV15rsf.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-BQruNm0T.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";const f=(r,t,e)=>{const n=d(t);a.useEffect(()=>{if(r.current){const o=new MutationObserver(p=>{n.current(p)});return o.observe(r.current,e),()=>{o.disconnect()}}},[r.current,e])},L={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},i={render:function(){const t=a.useRef(null),[e,n]=a.useState(null);return f(t,o=>{n(o[0].attributeName)},{attributes:!0}),s.jsxs("div",{children:[s.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),s.jsxs(b,{ref:t,component:"div",marginTop:"8px",variant:"body100",children:["Attribute mutated: ",s.jsx("b",{children:e})]})]})}};var u,m,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Demo"];export{i as Demo,N as __namedExportsOrder,L as default};
