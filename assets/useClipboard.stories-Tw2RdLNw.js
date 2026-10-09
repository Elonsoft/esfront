import{r as a,j as o}from"./iframe-WZaTcFld.js";import{T as w}from"./TextField-DC1lqpSU.js";import{B as c}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";import"./ButtonBase-A8DfStIe.js";const C=()=>{var e,t;const p=a.useCallback(r=>window.navigator.clipboard.writeText(r),[]),n=a.useCallback(r=>window.navigator.clipboard.write(r),[]),s=a.useCallback(()=>window.navigator.clipboard.readText(),[]),d=a.useCallback(()=>window.navigator.clipboard.read(),[]);return{writeText:p,write:n,readText:s,read:d,isReadSupported:typeof window<"u"&&!!((t=(e=window==null?void 0:window.navigator)==null?void 0:e.clipboard)!=null&&t.readText)}},P={tags:["autodocs"],title:"Hooks/useClipboard",parameters:{references:["useClipboard"]}},i={render:function(){const{writeText:n,readText:s,isReadSupported:d}=C(),[e,t]=a.useState(""),r=()=>{n(e)},v=()=>{s().then(l=>{t(l)})};return o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[o.jsx(w,{fullWidth:!0,label:"Value",size:"500",value:e,onChange:l=>t(l.target.value)}),o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:r,children:"Copy"}),d&&o.jsx(c,{color:"primary",size:"400",variant:"contained",onClick:v,children:"Paste"})]})}};var u,m,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const E=["Demo"];export{i as Demo,E as __namedExportsOrder,P as default};
