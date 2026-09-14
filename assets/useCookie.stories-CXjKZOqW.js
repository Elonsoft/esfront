import{r as p,j as u}from"./iframe-Bc8-Q25v.js";import{T as R}from"./TextField-j8tsbYSO.js";import{B as y}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./ButtonBase-BBaKRXh4.js";function s(o,i,e){const n=[];return n.push(`${encodeURIComponent(o)}=${encodeURIComponent(i)}`),e!=null&&e.expires&&n.push(`expires=${e.expires}`),e!=null&&e.maxAge&&n.push(`max-age=${e.maxAge}`),e!=null&&e.path&&n.push(`path=${e.path}`),e!=null&&e.domain&&n.push(`domain=${e.domain}`),e!=null&&e.secure&&n.push("secure"),e!=null&&e.sameSite&&n.push(`samesite=${e.sameSite}`),n.join("; ")}function k(o){const i=document.cookie.split("; ").find(e=>e.startsWith(`${encodeURIComponent(o)}=`));return i?decodeURIComponent(i.slice(i.indexOf("=")+1)):null}const T=(o,i,e)=>{const{writeInitialValue:n,writeInitialValueAttributes:r}={},d=p.useMemo(()=>{try{const c=k(o);return c!==null?c:i??null}catch{return i}},[o]),[a,m]=p.useState(()=>({name:o,value:d}));a.name!==o&&m({name:o,value:d});const v=a.name===o?a.value:d;p.useEffect(()=>{if(n)try{k(o)===null&&(document.cookie=s(o,i,r))}catch{}},[o]);const C=p.useCallback((c,g)=>{document.cookie=s(o,c,g),m({name:o,value:c})},[o]),h=p.useCallback(()=>{document.cookie=s(o,"",{expires:new Date(0).toUTCString()}),n&&(document.cookie=s(o,i,r)),m({name:o,value:i})},[o,i,n,r]);return[v,C,h]},O={tags:["autodocs"],title:"Hooks/useCookie",parameters:{references:["useCookie"]}},l={render:function(){const[i,e,n]=T("useCookie","");return u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[u.jsx(R,{fullWidth:!0,"aria-label":"Cookie",helperText:"This input's value is saved inside the 'useCookie' cookie.",size:"500",value:i,variant:"outlined",onChange:r=>e(r.target.value)}),u.jsx(y,{color:"primary",size:"400",variant:"contained",onClick:n,children:"Remove cookie"})]})}};var t,f,x;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const _=["Demo"];export{l as Demo,_ as __namedExportsOrder,O as default};
