import{j as o}from"./jsx-runtime-BoZ7yaty.js";import{r as n}from"./index-DIDRz_s2.js";import{T as y}from"./Typography-BriYb5H6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useThemeProps-DJft-tfL.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-D4qQEpRV.js";const c=r=>{const[e,t]=n.useState(null),[s,v]=n.useState(null),[h,d]=n.useState(!0);return n.useEffect(()=>{const l=a=>{t(a),d(!1)},p=a=>{v(a),d(!1)};navigator.geolocation.getCurrentPosition(l,p,r);const f=navigator.geolocation.watchPosition(l,p,r);return()=>{navigator.geolocation.clearWatch(f)}},[]),{position:e,error:s,loading:h}};try{c.displayName="useGeolocation",c.__docgenInfo={description:"The hook that that tracks user's geographic location.",displayName:"useGeolocation",props:{}}}catch{}const T={tags:["autodocs"],title:"Hooks/useGeolocation",parameters:{references:["useGeolocation"]}},i={render:function(){const{position:e,error:t,loading:s}=c();return o.jsxs(y,{component:"div",variant:"body100",children:[!!s&&o.jsx("div",{children:"Loading..."}),!!e&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:["Latitude: ",e.coords.latitude]}),o.jsxs("div",{children:["Longitude: ",e.coords.longitude]})]}),!!t&&o.jsxs("div",{children:["Error: ",t.message]})]})}};var u,g,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const k=["Demo"];export{i as Demo,k as __namedExportsOrder,T as default};
