import{j as c}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{T as x}from"./Typography-56Df3xvc.js";import{B as T}from"./Box-CBu-ct3E.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const g=(e,o)=>{let t;return()=>{t||(t=setTimeout(()=>{e(),clearTimeout(t),t=void 0},o))}},D=e=>{const[o,t]=n.useState(null),i=n.useRef(!1),s=n.useRef(0),u=n.useCallback(()=>{const r=e!=null&&e.container?e.container.scrollTop:window.scrollY;t(r>s.current?"down":"up"),s.current=Math.max(0,r),i.current=!1},[e]);return n.useEffect(()=>{s.current=e!=null&&e.container?e.container.scrollTop:window.scrollY;const r=()=>{i.current||(window.requestAnimationFrame(g(u,(e==null?void 0:e.throttleTimeout)??5)),i.current=!0)};return((e==null?void 0:e.container)||window).addEventListener("scroll",r),()=>{((e==null?void 0:e.container)||window).removeEventListener("scroll",r)}},[u,e==null?void 0:e.throttleTimeout,e==null?void 0:e.container]),o},_={tags:["autodocs"],title:"Hooks/useScrollDirection",parameters:{references:["useScrollDirection"],docs:{story:{inline:!1}}},argTypes:{throttleTimeout:{control:{type:"number"}}}},l={render:function(o){const t=D({throttleTimeout:o.throttleTimeout});return c.jsxs(c.Fragment,{children:[c.jsx(x,{sx:{position:"fixed"},variant:"overline",children:t||"the page hasn't been scrolled"}),c.jsx(T,{sx:{height:"150vh"}})]})}};var d,h,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render(args) {
    const scrollDirection = useScrollDirection({
      throttleTimeout: args.throttleTimeout
    });
    return <>
        <Typography sx={{
        position: 'fixed'
      }} variant="overline">
          {scrollDirection ? scrollDirection : \`the page hasn't been scrolled\`}
        </Typography>
        <Box sx={{
        height: '150vh'
      }} />
      </>;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const q=["Demo"];export{l as Demo,q as __namedExportsOrder,_ as default};
