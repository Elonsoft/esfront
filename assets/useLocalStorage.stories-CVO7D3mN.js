import{r as l,j as p}from"./iframe-CewJnQGO.js";import{T as w}from"./TextField-CjgXH9i3.js";import{B as L}from"./Button-CARyXaDc.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BQG9LCtD.js";import"./useId-CoUWHeYF.js";import"./FormFieldHelperText-CK7smVqh.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-CBpy0Ws-.js";import"./useForkRef-PUt3GJOR.js";import"./FormFieldLabel-C3QF6Ekc.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C21djuXa.js";import"./ButtonBase-tfkuyuZ2.js";const z=(e,t,m)=>{const{raw:r=!0,writeInitialValue:a,serializer:s=JSON.stringify,deserializer:S=JSON.parse}={},n=l.useMemo(()=>{try{const o=window.localStorage.getItem(e);return o!==null?r?o:S(o):t??null}catch{return t}},[e]),[c,u]=l.useState(()=>({key:e,value:n}));c.key!==e&&u({key:e,value:n});const x=c.key===e?c.value:n;l.useEffect(()=>{if(a)try{window.localStorage.getItem(e)===null&&window.localStorage.setItem(e,r?t:s(t))}catch{}},[e]);const f=l.useCallback(o=>{window.localStorage.setItem(e,r?o:s(o)),u({key:e,value:o})},[e,r,s]),h=l.useCallback(()=>{window.localStorage.removeItem(e),a&&window.localStorage.setItem(e,r?t:s(t)),u({key:e,value:t})},[e,r,s,t,a]);return[x,f,h]},_={tags:["autodocs"],title:"Hooks/useLocalStorage",parameters:{references:["useLocalStorage"]}},i={render:function(){const[t,m,r]=z("useLocalStorage","");return p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[p.jsx(w,{fullWidth:!0,"aria-label":"LocalStorage",helperText:"This input's value is saved inside the localStorage in 'useLocalStorage' key.",size:"500",value:t||"",variant:"outlined",onChange:a=>m(a.target.value)}),p.jsx(L,{color:"primary",size:"400",variant:"contained",onClick:()=>r(),children:"Remove"})]})}};var d,v,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function Render() {
    const [value, update, remove] = useLocalStorage('useLocalStorage', '');
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '360px'
    }}>
        <TextField fullWidth aria-label="LocalStorage" helperText="This input's value is saved inside the localStorage in 'useLocalStorage' key." size="500" value={value || ''} variant="outlined" onChange={event => update(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={() => remove()}>
          Remove
        </Button>
      </div>;
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const H=["Demo"];export{i as Demo,H as __namedExportsOrder,_ as default};
