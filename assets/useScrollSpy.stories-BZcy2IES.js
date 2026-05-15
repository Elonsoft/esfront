import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as m}from"./index-Wm5baAvf.js";import{u as x}from"./useEvent-BPmsl14G.js";import{u as y}from"./useCallbackThrottle-B-3XiPi3.js";import{B as h}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useLatest-C1UtP6al.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const g=(c,o,a=0)=>{const[i,e]=m.useState(""),l=x(y(t=>{t.forEach(s=>s.isIntersecting&&e(s.target.id))},a));return m.useEffect(()=>{const t=new IntersectionObserver(l,o);return c.forEach(s=>{const u=document.getElementById(s);u&&t.observe(u)}),()=>{t.disconnect()}},[c]),i},d=["1","2","3","4","5"],H={tags:["autodocs"],title:"Hooks/useScrollSpy",parameters:{references:["useScrollSpy"]}},n={render:function(){const o=m.useRef(null),a=window.location.href.includes("docs"),i=g(d,{...o.current?{root:o.current}:{}});return r.jsxs("div",{className:"flex flex-col",style:{maxHeight:a?"40dvh":void 0,margin:"-1rem"},children:[r.jsx("div",{className:"flex flex-row",style:{position:"sticky",top:0,backgroundColor:"var(--es-surface-50)",zIndex:2},children:d.map(e=>r.jsx(h,{color:i===e?"primary":"tertiary",style:{borderRadius:0},variant:"contained",children:e},e))}),r.jsx("div",{ref:o,children:d.map((e,l)=>r.jsx("section",{className:"px-16 py-16",id:e,style:{height:"101vh",backgroundColor:l%2===0?"var(--es-mono-a-a100)":"var(--es-mono-a-a50)"},children:e},e))})]})}};var p,f,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isDocsPage = window.location.href.includes('docs');
    const activeId = useScrollSpy(sections, {
      ...(containerRef.current ? {
        root: containerRef.current
      } : {})
    });
    return <div className="flex flex-col" style={{
      maxHeight: isDocsPage ? '40dvh' : undefined,
      margin: '-1rem'
    }}>
        <div className="flex flex-row" style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--es-surface-50)',
        zIndex: 2
      }}>
          {sections.map(section => <Button key={section} color={activeId === section ? 'primary' : 'tertiary'} style={{
          borderRadius: 0
        }} variant="contained">
              {section}
            </Button>)}
        </div>
        <div ref={containerRef}>
          {sections.map((section, index) => <section key={section} className="px-16 py-16" id={section} style={{
          height: '101vh',
          backgroundColor: index % 2 === 0 ? 'var(--es-mono-a-a100)' : 'var(--es-mono-a-a50)'
        }}>
              {section}
            </section>)}
        </div>
      </div>;
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const P=["Demo"];export{n as Demo,P as __namedExportsOrder,H as default};
