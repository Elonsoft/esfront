import{j as u}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-Wm5baAvf.js";import{u as l}from"./useLatest-C1UtP6al.js";import{B as b}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const f=(e,t,r)=>{const o=l(t);a.useEffect(()=>{if(e.current){const s=new MutationObserver(d=>{o.current(d)});return s.observe(e.current,r),()=>{s.disconnect()}}},[e.current,r])},h={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},n={render:function(){const t=a.useRef(null),[r,o]=a.useState(null);return f(t,s=>{o(s[0].attributeName)},{attributes:!0}),u.jsxs("div",{children:[u.jsx(b,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),u.jsxs("div",{ref:t,className:"body100 mt-8",children:["Attribute mutated: ",u.jsx("b",{children:r})]})]})}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        <div ref={ref} className="body100 mt-8">
          Attribute mutated: <b>{mutated}</b>
        </div>
      </div>;
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const k=["Demo"];export{n as Demo,k as __namedExportsOrder,h as default};
