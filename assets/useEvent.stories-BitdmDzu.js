import{r as n,j as e}from"./iframe-WZaTcFld.js";import{u as d}from"./useEvent-PLZAS_3a.js";import{T as g}from"./TextField-DC1lqpSU.js";import{B as v}from"./Button-DX7vCFDA.js";import"./preload-helper-Dp1pzeXC.js";import"./useDefaultProps-BZnal23W.js";import"./useId-Cowwq5kl.js";import"./FormFieldHelperText-DZMLTBde.js";import"./clsx.m-CH7BE6MN.js";import"./FormField.context-xKPgMKao.js";import"./useForkRef-B9g_LZ2g.js";import"./FormFieldLabel-Dhbs71bh.js";import"./setRef-B4em79P6.js";import"./useEnhancedEffect-C777XXBU.js";import"./ButtonBase-A8DfStIe.js";const D={tags:["autodocs"],title:"Hooks/useEvent",parameters:{references:["useEvent"]}},t={render:function(){const[u,c]=n.useState(""),[s,m]=n.useState(""),[r,p]=n.useState(0);function x(){const o=d(()=>{c(s),p(r+1)});return e.jsxs(v,{color:"primary",style:{width:"220px"},onClick:o,children:["Click ",!!r&&r]})}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(g,{fullWidth:!0,label:"Value",size:"500",value:s,onChange:o=>m(o.target.value)}),e.jsx(x,{})]}),e.jsxs("div",{style:{margin:"8px"},children:["Text: ",s]}),e.jsxs("div",{style:{margin:"8px"},children:["Message: ",u]})]})}};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render() {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    function Chat() {
      const onClick = useEvent(() => {
        setMessage(text);
        setCount(count + 1);
      });
      return <Button color="primary" style={{
        width: '220px'
      }} onClick={onClick}>
          Click {!!count && count}
        </Button>;
    }
    return <>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <TextField fullWidth label="Value" size="500" value={text} onChange={event => setText(event.target.value)} />
          <Chat />
        </div>
        <div style={{
        margin: '8px'
      }}>Text: {text}</div>
        <div style={{
        margin: '8px'
      }}>Message: {message}</div>
      </>;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["Demo"];export{t as Demo,I as __namedExportsOrder,D as default};
