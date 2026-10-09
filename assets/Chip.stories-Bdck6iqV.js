import{r as h,j as e}from"./iframe-WZaTcFld.js";import{C as o}from"./Chip-DUEu0RGe.js";import{A as s}from"./Avatar-CBUaRvzV.js";import{I as d}from"./IconAtLineW500-E7lAYe_C.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-BZnal23W.js";import"./useForkRef-B9g_LZ2g.js";import"./Button-DX7vCFDA.js";import"./ButtonBase-A8DfStIe.js";import"./IconCloseLineW350-BvUE5GzI.js";import"./SvgIcon-CImGifIE.js";const x={100:20,200:24,300:32},S={tags:["autodocs"],component:o,parameters:{references:["Chip"]},argTypes:{component:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}}}},n={render:(t,l)=>{const[m,u]=h.useState(!1),r=l.globals.locale||"en",a=x[t.size||"100"];return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(o,{component:"button",...t,children:r==="ru"?"Иванов Иван Иванович":"John Doe"}),m||e.jsx(o,{component:"button",startIcon:e.jsx(s,{size:a,src:"./avatar/6.png",variant:"circle"}),onDelete:()=>u(!0),...t,children:r==="ru"?"Петров Петр Петрович":"John Smith"}),e.jsx(o,{component:"button",startIcon:e.jsx(s,{size:a,src:"./avatar/6.png",variant:"circle"}),...t,children:r==="ru"?"Сергеев Сергей Сергеевич":"John Wick"}),e.jsx(o,{component:"button",startIcon:e.jsx(d,{size:"24px",style:{color:"var(--es-mono-a-a500)"}}),...t,children:r==="ru"?"Алексеев Алексей Алексеевич":"John Lennon"})]})}};var i,c,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args, context) => {
    const [isChipDeleted, setChipDeleted] = useState(false);
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    const size = ICON_SIZE_MAP[args.size || '100'];
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Chip component="button" {...args}>
          {locale === 'ru' ? 'Иванов Иван Иванович' : 'John Doe'}
        </Chip>
        {isChipDeleted || <Chip component="button" startIcon={<Avatar size={size} src="./avatar/6.png" variant="circle" />} onDelete={() => setChipDeleted(true)} {...args}>
            {locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
          </Chip>}
        <Chip component="button" startIcon={<Avatar size={size} src="./avatar/6.png" variant="circle" />} {...args}>
          {locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip component="button" startIcon={<IconAtLineW500 size="24px" style={{
        color: 'var(--es-mono-a-a500)'
      }} />} {...args}>
          {locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
      </div>;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["Demo"];export{n as Demo,_ as __namedExportsOrder,S as default};
