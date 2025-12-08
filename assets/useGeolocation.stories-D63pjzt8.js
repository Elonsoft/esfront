import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{T as y}from"./Typography-56Df3xvc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./memoTheme-DCKoxpDd.js";import"./styled-CkBBDypc.js";import"./identifier-haEvzVNA.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./useTheme-Bas6BIKa.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./DefaultPropsProvider-BgzOhfjl.js";const c=t=>{const[r,e]=n.useState(null),[s,v]=n.useState(null),[h,d]=n.useState(!0);return n.useEffect(()=>{const p=a=>{e(a),d(!1)},l=a=>{v(a),d(!1)};navigator.geolocation.getCurrentPosition(p,l,t);const f=navigator.geolocation.watchPosition(p,l,t);return()=>{navigator.geolocation.clearWatch(f)}},[]),{position:r,error:s,loading:h}};try{c.displayName="useGeolocation",c.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",props:{}}}catch{}const w={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},i={render:function(){const{position:r,error:e,loading:s}=c();return o.jsxs(y,{component:"div",variant:"body100",children:[!!s&&o.jsx("div",{children:"Loading..."}),!!r&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:["Latitude: ",r.coords.latitude]}),o.jsxs("div",{children:["Longitude: ",r.coords.longitude]})]}),!!e&&o.jsxs("div",{children:["Error: ",e.message]})]})}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const {
      position,
      error,
      loading
    } = useGeolocation();
    return <Typography component="div" variant="body100">
        {!!loading && <div>Loading...</div>}
        {!!position && <>
            <div>Latitude: {position.coords.latitude}</div>
            <div>Longitude: {position.coords.longitude}</div>
          </>}
        {!!error && <div>Error: {error.message}</div>}
      </Typography>;
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["Demo"];export{i as Demo,C as __namedExportsOrder,w as default};
