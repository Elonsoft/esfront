import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-Wm5baAvf.js";import{u as d}from"./useEvent-BPmsl14G.js";import{T as g}from"./TextField-BE5m1Jj6.js";import{B as v}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-EzStQRfh.js";import"./useEventCallback-kgmPxU2v.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./composeClasses-CAXbtk_0.js";import"./useId-BsPUOvOw.js";import"./useFormControl-B4OjCVsv.js";import"./FormControl-C3d8ZCOJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./FormHelperText-DKtzwqKg.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./clsx.m-C7bORDfW.js";import"./ButtonBase-BhCJPokL.js";import"./useForkRef-CGhsnMYO.js";const dt={tags:["autodocs"],title:"Hooks/useEvent",parameters:{references:["useEvent"]}},e={render:function(){const[a,l]=s.useState(""),[r,u]=s.useState(""),[o,c]=s.useState(0);function x(){const i=d(()=>{l(r),c(o+1)});return t.jsxs(v,{color:"primary",style:{width:"220px"},onClick:i,children:["Click ",!!o&&o]})}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(g,{fullWidth:!0,label:"Value",size:"40",value:r,onChange:i=>u(i.target.value)}),t.jsx(x,{})]}),t.jsxs("div",{style:{margin:"8px"},children:["Text: ",r]}),t.jsxs("div",{style:{margin:"8px"},children:["Message: ",a]})]})}};var m,p,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <TextField fullWidth label="Value" size="40" value={text} onChange={event => setText(event.target.value)} />
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
}`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const gt=["Demo"];export{e as Demo,gt as __namedExportsOrder,dt as default};
