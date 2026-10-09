import{r as p,j as u}from"./iframe-WZaTcFld.js";import{T as R}from"./TextField-DC1lqpSU.js";import{B as y}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";import"./ButtonBase-A8DfStIe.js";function T(o,i,e){const n=[];return n.push(`${encodeURIComponent(o)}=${encodeURIComponent(i)}`),e!=null&&e.expires&&n.push(`expires=${e.expires}`),e!=null&&e.maxAge&&n.push(`max-age=${e.maxAge}`),e!=null&&e.path&&n.push(`path=${e.path}`),e!=null&&e.domain&&n.push(`domain=${e.domain}`),e!=null&&e.secure&&n.push("secure"),e!=null&&e.sameSite&&n.push(`samesite=${e.sameSite}`),n.join("; ")}function s(o,i,e){document.cookie=T(o,i,e)}function k(o){const i=document.cookie.split("; ").find(e=>e.startsWith(`${encodeURIComponent(o)}=`));return i?decodeURIComponent(i.slice(i.indexOf("=")+1)):null}const $=(o,i,e)=>{const{writeInitialValue:n,writeInitialValueAttributes:r}={},d=p.useMemo(()=>{try{const c=k(o);return c!==null?c:i??null}catch{return i}},[o]),[a,m]=p.useState(()=>({name:o,value:d}));a.name!==o&&m({name:o,value:d});const C=a.name===o?a.value:d;p.useEffect(()=>{if(n)try{k(o)===null&&s(o,i,r)}catch{}},[o]);const v=p.useCallback((c,g)=>{s(o,c,g),m({name:o,value:c})},[o]),h=p.useCallback(()=>{s(o,"",{expires:new Date(0).toUTCString()}),n&&s(o,i,r),m({name:o,value:i})},[o,i,n,r]);return[C,v,h]},H={tags:["autodocs"],title:"Hooks/useCookie",parameters:{references:["useCookie"]}},l={render:function(){const[i,e,n]=$("useCookie","");return u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[u.jsx(R,{fullWidth:!0,"aria-label":"Cookie",helperText:"This input's value is saved inside the 'useCookie' cookie.",size:"500",value:i,variant:"outlined",onChange:r=>e(r.target.value)}),u.jsx(y,{color:"primary",size:"400",variant:"contained",onClick:n,children:"Remove cookie"})]})}};var t,f,x;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: function Render() {
    const [cookie, updateCookie, removeCookie] = useCookie('useCookie', '');
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '360px'
    }}>
        <TextField fullWidth aria-label="Cookie" helperText="This input's value is saved inside the 'useCookie' cookie." size="500" value={cookie} variant="outlined" onChange={event => updateCookie(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={removeCookie}>
          Remove cookie
        </Button>
      </div>;
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const M=["Demo"];export{l as Demo,M as __namedExportsOrder,H as default};
