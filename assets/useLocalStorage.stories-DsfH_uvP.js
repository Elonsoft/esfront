import{r as l,j as p}from"./iframe-Bc8-Q25v.js";import{T as w}from"./TextField-j8tsbYSO.js";import{B as L}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./ButtonBase-BBaKRXh4.js";const z=(e,t,m)=>{const{raw:r=!0,writeInitialValue:a,serializer:s=JSON.stringify,deserializer:S=JSON.parse}={},i=l.useMemo(()=>{try{const o=window.localStorage.getItem(e);return o!==null?r?o:S(o):t??null}catch{return t}},[e]),[c,u]=l.useState(()=>({key:e,value:i}));c.key!==e&&u({key:e,value:i});const x=c.key===e?c.value:i;l.useEffect(()=>{if(a)try{window.localStorage.getItem(e)===null&&window.localStorage.setItem(e,r?t:s(t))}catch{}},[e]);const f=l.useCallback(o=>{window.localStorage.setItem(e,r?o:s(o)),u({key:e,value:o})},[e,r,s]),h=l.useCallback(()=>{window.localStorage.removeItem(e),a&&window.localStorage.setItem(e,r?t:s(t)),u({key:e,value:t})},[e,r,s,t,a]);return[x,f,h]},N={tags:["autodocs"],title:"Hooks/useLocalStorage",parameters:{references:["useLocalStorage"]}},n={render:function(){const[t,m,r]=z("useLocalStorage","");return p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"360px"},children:[p.jsx(w,{fullWidth:!0,"aria-label":"LocalStorage",helperText:"This input's value is saved inside the localStorage in 'useLocalStorage' key.",size:"500",value:t||"",variant:"outlined",onChange:a=>m(a.target.value)}),p.jsx(L,{color:"primary",size:"400",variant:"contained",onClick:()=>r(),children:"Remove"})]})}};var d,v,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const _=["Demo"];export{n as Demo,_ as __namedExportsOrder,N as default};
