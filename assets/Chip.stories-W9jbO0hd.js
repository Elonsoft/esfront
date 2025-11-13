import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{r as u}from"./index-DIDRz_s2.js";import{C as o}from"./Chip-CAk9F2d3.js";import{A as a}from"./Avatar-pOVpN4vX.js";import{I as x}from"./IconAt-s57xNtQj.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./styled-QckRPC_l.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useForkRef-Cmn-Dh7x.js";import"./Button-CjV5PmVb.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./IconCloseLineW350-CEnpni7q.js";import"./SvgIcon-DcWEUr91.js";import"./Avatar.classes-CMPzETZ3.js";const C={100:20,200:24,300:32},L={tags:["autodocs"],component:o,parameters:{references:["Chip"]},argTypes:{component:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}}}},n={render:(e,l)=>{const[m,h]=u.useState(!1),r=l.globals.locale||"en",s=C[e.size||"100"];return t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(o,{component:"button",...e,children:r==="ru"?"Иванов Иван Иванович":"John Doe"}),m||t.jsx(o,{component:"button",startIcon:t.jsx(a,{src:"./avatar/6.png",sx:{width:s,height:s},variant:"circle"}),onDelete:()=>h(!0),...e,children:r==="ru"?"Петров Петр Петрович":"John Smith"}),t.jsx(o,{component:"button",startIcon:t.jsx(a,{src:"./avatar/6.png",sx:{width:s,height:s},variant:"circle"}),...e,children:r==="ru"?"Сергеев Сергей Сергеевич":"John Wick"}),t.jsx(o,{component:"button",startIcon:t.jsx(x,{size:"24px",sx:d=>({color:d.vars.palette.monoA.A500})}),...e,children:r==="ru"?"Алексеев Алексей Алексеевич":"John Lennon"})]})}};var i,c,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
        {isChipDeleted || <Chip component="button" startIcon={<Avatar src="./avatar/6.png" sx={{
        width: size,
        height: size
      }} variant="circle" />} onDelete={() => setChipDeleted(true)} {...args}>
            {locale === 'ru' ? 'Петров Петр Петрович' : 'John Smith'}
          </Chip>}
        <Chip component="button" startIcon={<Avatar src="./avatar/6.png" sx={{
        width: size,
        height: size
      }} variant="circle" />} {...args}>
          {locale === 'ru' ? 'Сергеев Сергей Сергеевич' : 'John Wick'}
        </Chip>
        <Chip component="button" startIcon={<IconAt size="24px" sx={theme => ({
        color: theme.vars.palette.monoA.A500
      })} />} {...args}>
          {locale === 'ru' ? 'Алексеев Алексей Алексеевич' : 'John Lennon'}
        </Chip>
      </div>;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Demo"];export{n as Demo,M as __namedExportsOrder,L as default};
