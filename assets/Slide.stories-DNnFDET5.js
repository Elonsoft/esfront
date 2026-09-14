import{r as o,j as e}from"./iframe-Bc8-Q25v.js";import{S as d}from"./Slide-B1Z7v3Zy.js";import{B as v}from"./Button-BCRxDX6B.js";import"./preload-helper-Dp1pzeXC.js";import"./debounce-mYveAr4B.js";import"./utils-xjkStw31.js";import"./useDefaultProps-lGeK2dpt.js";import"./createTransition-BIZAeqwx.js";import"./useForkRef-rVwNGtGZ.js";import"./ownerWindow-DZnlFwEW.js";import"./ownerDocument-By9UUC6B.js";import"./clsx.m-CH7BE6MN.js";import"./ButtonBase-BBaKRXh4.js";const b=r=>r.globals.locale==="en"?"Toggle":"Переключить",_={tags:["autodocs"],component:d,parameters:{references:["Slide"]},argTypes:{children:{table:{disable:!0}},container:{table:{disable:!0}},in:{table:{disable:!0}},direction:{options:["up","down","left","right"],control:{type:"select"}}},args:{direction:"up"}},t={render:function(c,p){const[m,u]=o.useState(!0),[g,x]=o.useState(null),h=()=>{u(f=>!f)};return e.jsxs("div",{style:{alignItems:"flex-start",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(v,{color:"primary",variant:"contained",onClick:h,children:b(p)}),e.jsx("div",{ref:x,style:{border:"1px solid var(--es-mono-a-a100)",height:"160px",overflow:"hidden",width:"240px"},children:e.jsx(d,{...c,container:g,in:m,children:e.jsx("div",{style:{backgroundColor:"var(--es-primary-500)",height:"100%",width:"100%"}})})})]})}};var i,n,s,a,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args, context) {
    const [isVisible, setVisible] = useState(true);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
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
        <div ref={setContainer} style={{
        border: '1px solid var(--es-mono-a-a100)',
        height: '160px',
        overflow: 'hidden',
        width: '240px'
      }}>
          <Slide {...args} container={container} in={isVisible}>
            <div style={{
            backgroundColor: 'var(--es-primary-500)',
            height: '100%',
            width: '100%'
          }} />
          </Slide>
        </div>
      </div>;
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source},description:{story:"The child slides in from the edge of the `container`. Without a container it slides in from the edge of the screen.",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.description}}};const H=["Demo"];export{t as Demo,H as __namedExportsOrder,_ as default};
