import{r as s,j as e}from"./iframe-WZaTcFld.js";import{u as m}from"./useMutationObserver-CyisDU0F.js";import{B as c}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./ButtonBase-A8DfStIe.js";import"./useForkRef-B9g_LZ2g.js";const D={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},r={render:function(){const t=s.useRef(null),[n,o]=s.useState(null);return m(t,d=>{o(d[0].attributeName)},{attributes:!0}),e.jsxs("div",{children:[e.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),e.jsxs("div",{ref:t,className:"body100 mt-8",children:["Attribute mutated: ",e.jsx("b",{children:n})]})]})}};var u,a,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Demo"];export{r as Demo,R as __namedExportsOrder,D as default};
