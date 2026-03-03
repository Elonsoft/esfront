import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{L as n}from"./Link-BXDXV6pS.js";import{I as c}from"./IconBookmarkLineW200-DeerccAD.js";import"./index-ChsGqxH_.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./SvgIcon-Bb8ef9Tm.js";const x=e=>e.globals.locale==="en"?"Link":"Ссылка",y=e=>e.globals.locale==="en"?"Link with inherited color":"Ссылка с унаследованным цветом",v=e=>e.globals.locale==="en"?"Link with custom color":"Ссылка с произвольным цветом",I=e=>e.globals.locale==="en"?"Link with the icon":"Ссылка с иконкой",D={tags:["autodocs"],component:n,parameters:{references:["Link"]},argTypes:{children:{table:{disable:!0}},component:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},color:{table:{disable:!0}},variant:{table:{disable:!0}},underline:{control:{type:"select"}}}},r={render:(e,o)=>t.jsxs("div",{className:"body100 flex gap-16",style:{flexWrap:"wrap"},children:[t.jsx(n,{...e,component:"a",href:"https://google.com",target:"_blank",children:x(o)}),t.jsx(n,{...e,color:"currentColor",component:"a",href:"https://google.com",target:"_blank",children:y(o)}),t.jsx(n,{...e,color:"var(--es-secondary-300)",component:"a",href:"https://google.com",target:"_blank",children:v(o)}),t.jsx(n,{...e,component:"a",endIcon:t.jsx(c,{container:!0,containerSize:"20px"}),href:"https://google.com",target:"_blank",children:I(o)})]})},a={render:()=>t.jsxs("div",{className:"body100",children:["Lorem ipsum dolor sit amet,"," ",t.jsx(n,{component:"a",endIcon:t.jsx(c,{container:!0,containerSize:"20px"}),href:"#",target:"_blank",children:"consectetur"})," ","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"," ",t.jsx(n,{component:"a",href:"#",target:"_blank",children:"reprehenderit"})," ","in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"," ",t.jsx(n,{disabled:!0,component:"button",startIcon:t.jsx(c,{container:!0,containerSize:"20px"}),variant:"body100",children:"non proident"}),", sunt in culpa qui officia deserunt mollit anim id est laborum."]})},i={render:(e,o)=>{const L=x(o),f=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body400","body300","body200","body100","mini100","mini200","micro","button","caption","overline"];return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"baseline"},children:f.map(s=>t.jsxs(n,{component:"a",href:"#",target:"_blank",variant:s,...e,children:[L," ",s]},s))})}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args, context) => {
    return <div className="body100 flex gap-16" style={{
      flexWrap: 'wrap'
    }}>
        <Link {...args} component="a" href="https://google.com" target="_blank">
          {getLink(context)}
        </Link>
        <Link {...args} color="currentColor" component="a" href="https://google.com" target="_blank">
          {getLinkInherit(context)}
        </Link>
        <Link {...args} color="var(--es-secondary-300)" component="a" href="https://google.com" target="_blank">
          {getLinkColor(context)}
        </Link>
        <Link {...args} component="a" endIcon={<IconBookmarkLineW200 container containerSize="20px" />} href="https://google.com" target="_blank">
          {getLinkIcon(context)}
        </Link>
      </div>;
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div className="body100">
        Lorem ipsum dolor sit amet,{' '}
        <Link component="a" endIcon={<IconBookmarkLineW200 container containerSize="20px" />} href="#" target="_blank">
          consectetur
        </Link>{' '}
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{' '}
        <Link component="a" href="#" target="_blank">
          reprehenderit
        </Link>{' '}
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat{' '}
        <Link disabled component="button" startIcon={<IconBookmarkLineW200 container containerSize="20px" />} variant="body100">
          non proident
        </Link>
        , sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>;
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args, context) => {
    const text = getLink(context);
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body400', 'body300', 'body200', 'body100', 'mini100', 'mini200', 'micro', 'button', 'caption', 'overline'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'baseline'
    }}>
        {variants.map(variant => <Link key={variant} component="a" href="#" target="_blank" variant={variant} {...args}>
            {text} {variant}
          </Link>)}
      </div>;
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const E=["Demo","Alignment","Typography"];export{a as Alignment,r as Demo,i as Typography,E as __namedExportsOrder,D as default};
