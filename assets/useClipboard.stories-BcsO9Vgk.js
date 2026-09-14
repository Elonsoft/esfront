import{r as a,j as o}from"./iframe-Bc8-Q25v.js";import{T as w}from"./TextField-j8tsbYSO.js";import{B as c}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-lGeK2dpt.js";import"./useId-DYzkOzzt.js";import"./FormFieldHelperText-X0lQ8AlZ.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-BjwhPGAJ.js";import"./useForkRef-rVwNGtGZ.js";import"./FormFieldLabel-CXp2Zlgj.js";import"./useEnhancedEffect-CCpIorDQ.js";import"./ButtonBase-BBaKRXh4.js";const C=()=>{var e,t;const p=a.useCallback(r=>window.navigator.clipboard.writeText(r),[]),n=a.useCallback(r=>window.navigator.clipboard.write(r),[]),s=a.useCallback(()=>window.navigator.clipboard.readText(),[]),d=a.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:p,write:n,readText:s,read:d,isReadSupported:typeof window<"u"&&!!((t=(e=window==null?void 0:window.navigator)==null?void 0:e.clipboard)!=null&&t.readText)}},W={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},i={render:function(){const{writeText:n,readText:s,isReadSupported:d}=C(),[e,t]=a.useState(""),r=()=>{n(e)},v=()=>{s().then(l=>{t(l)})};return o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[o.jsx(w,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:l=>t(l.target.value)}),o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:r,children:"Copy"}),d&&o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:v,children:"Paste"})]})}};var u,m,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function Render() {
    const {
      writeText,
      readText,
      isReadSupported
    } = useClipboard();
    const [value, setValue] = useState('');
    const onCopy = () => {
      writeText(value);
    };
    const onPaste = () => {
      readText().then(data => {
        setValue(data);
      });
    };
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxWidth: '320px'
    }}>
        <TextField fullWidth label="Value" size="500" value={value} onChange={event => setValue(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={onCopy}>
          Copy
        </Button>
        {isReadSupported && <Button color="primary" size="400" variant="contained" onClick={onPaste}>
            Paste
          </Button>}
      </div>;
  }
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const P=["Demo"];export{i as Demo,P as __namedExportsOrder,W as default};
