import{r as g,j as e}from"./iframe-DIMiXZkL.js";import{F as a}from"./Fade-CsnZi5m8.js";import{B as u}from"./Button-Ccz4Bnbg.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B5vS3m3C.js";import"./useDefaultProps-CQ2vN7PH.js";import"./useForkRef-AZ5KJT18.js";import"./getReactElementRef-B5iA01R4.js";import"./createTransition-1CZU_5uS.js";import"./clsx.m-CH7BE6MN.js";import"./ButtonBase-GQvGf2x8.js";const x=r=>r.globals.locale==="en"?"Toggle":"Переключить",C={tags:["autodocs"],component:a,parameters:{references:["Fade"]},argTypes:{children:{table:{disable:!0}},in:{table:{disable:!0}}}},t={render:function(n,l){const[c,p]=g.useState(!0),d=()=>{p(m=>!m)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{color:"primary",variant:"contained",onClick:d,children:x(l)}),e.jsx(a,{...n,in:c,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"120px",width:"120px"}})})]})}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(true);
    const onToggle = () => {
      setVisible(value => !value);
    };
    return <div style={{
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button color="primary" variant="contained" onClick={onToggle}>
          {getToggleButtonText(context)}
        </Button>
        <Fade {...args} in={isVisible}>
          <div style={{
          backgroundColor: 'var(--es-primary-500)',
          height: '120px',
          width: '120px'
        }} />
        </Fade>
      </div>;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const D=["Demo"];export{t as Demo,D as __namedExportsOrder,C as default};
