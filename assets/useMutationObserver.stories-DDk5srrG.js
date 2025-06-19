import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as a}from"./index-DIDRz_s2.js";import{u as d}from"./useLatest-sVqXUmVb.js";import{B as l}from"./Button-Bw7cy9Im.js";import{T as b}from"./Typography-CtYhM0r3.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-B0X8gopH.js";import"./identifier-DA8c-tJk.js";import"./useThemeProps-DTzdApbH.js";import"./useTheme-B2nYkSwK.js";import"./ButtonBase-C33Z4or-.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-C7Fm2IhD.js";import"./memoTheme-CJcpijc4.js";import"./index-BubGiXqi.js";import"./extendSxProp-ftMfNaJf.js";import"./emotion-react.browser.esm-BV4sMx87.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-Di_N6kFi.js";const f=(r,t,e)=>{const n=d(t);a.useEffect(()=>{if(r.current){const o=new MutationObserver(p=>{n.current(p)});return o.observe(r.current,e),()=>{o.disconnect()}}},[r.current,e])},L={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},i={render:function(){const t=a.useRef(null),[e,n]=a.useState(null);return f(t,o=>{n(o[0].attributeName)},{attributes:!0}),s.jsxs("div",{children:[s.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),s.jsxs(b,{ref:t,component:"div",marginTop:"8px",variant:"body100",children:["Attribute mutated: ",s.jsx("b",{children:e})]})]})}};var u,m,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
