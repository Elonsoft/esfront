import{a as l,r as o,j as n}from"./iframe-Bc8-Q25v.js";import{B as b}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./ButtonBase-BBaKRXh4.js";import"./useForkRef-rVwNGtGZ.js";const f=(e,t,r)=>{const a=l(t);o.useEffect(()=>{if(e.current){const s=new MutationObserver(m=>{a.current(m)});return s.observe(e.current,r),()=>{s.disconnect()}}},[e.current,r])},E={tags:["autodocs"],title:"Hooks/useMutationObserver",parameters:{references:["useMutationObserver"]}},u={render:function(){const t=o.useRef(null),[r,a]=o.useState(null);return f(t,s=>{a(s[0].attributeName)},{attributes:!0}),n.jsxs("div",{children:[n.jsx(b,{color:"primary",size:"400",variant:"contained",onClick:()=>{t.current&&t.current.setAttribute("id","useMutationObserver")},children:"Set ID"}),n.jsxs("div",{ref:t,className:"body100 mt-8",children:["Attribute mutated: ",n.jsx("b",{children:r})]})]})}};var i,c,d;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=u.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const R=["Demo"];export{u as Demo,R as __namedExportsOrder,E as default};
