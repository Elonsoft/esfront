import{j as c}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-Wm5baAvf.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";const v=(e,o)=>{let t;return()=>{t||(t=setTimeout(()=>{e(),clearTimeout(t),t=void 0},o))}},D=e=>{const[o,t]=r.useState(null),i=r.useRef(!1),s=r.useRef(0),u=r.useCallback(()=>{const n=e!=null&&e.container?e.container.scrollTop:window.scrollY;t(n>s.current?"down":"up"),s.current=Math.max(0,n),i.current=!1},[e]);return r.useEffect(()=>{s.current=e!=null&&e.container?e.container.scrollTop:window.scrollY;const n=()=>{i.current||(window.requestAnimationFrame(v(u,(e==null?void 0:e.throttleTimeout)??5)),i.current=!0)};return((e==null?void 0:e.container)||window).addEventListener("scroll",n),()=>{((e==null?void 0:e.container)||window).removeEventListener("scroll",n)}},[u,e==null?void 0:e.throttleTimeout,e==null?void 0:e.container]),o},S={tags:["autodocs"],title:"Hooks/useScrollDirection",parameters:{references:["useScrollDirection"],docs:{story:{inline:!1}}},argTypes:{throttleTimeout:{control:{type:"number"}}}},l={render:function(o){const t=D({throttleTimeout:o.throttleTimeout});return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"overline",style:{position:"fixed"},children:t||"the page hasn't been scrolled"}),c.jsx("div",{style:{height:"150vh"}})]})}};var d,h,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const scrollDirection = useScrollDirection({
      throttleTimeout: args.throttleTimeout
    });
    return <>
        <div className="overline" style={{
        position: 'fixed'
      }}>
          {scrollDirection ? scrollDirection : \`the page hasn't been scrolled\`}
        </div>
        <div style={{
        height: '150vh'
      }} />
      </>;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const y=["Demo"];export{l as Demo,y as __namedExportsOrder,S as default};
