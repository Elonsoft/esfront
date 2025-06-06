import{j as s}from"./jsx-runtime-BoZ7yaty.js";import{r as i}from"./index-DIDRz_s2.js";import{u as p}from"./useLatest-sVqXUmVb.js";import{B as l}from"./Button-Kloa1MkC.js";import{T as b}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./ButtonBase-B9dD5NpA.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-B-dksMZM.js";const f=(e,t,r)=>{const a=p(t);i.useEffect(()=>{if(e.current){const o=new MutationObserver(d=>{a.current(d)});return o.observe(e.current,r),()=>{o.disconnect()}}},[e.current,r])},k={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},n={render:function(){const t=i.useRef(null),[r,a]=i.useState(null);return f(t,o=>{a(o[0].attributeName)},{attributes:!0}),s.jsxs("div",{children:[s.jsx(l,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),s.jsxs(b,{ref:t,component:"div",marginTop:"8px",variant:"body100",children:["Attribute mutated: ",s.jsx("b",{children:r})]})]})}};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const A=["Demo"];export{n as Demo,A as __namedExportsOrder,k as default};
