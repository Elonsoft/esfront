import{j as t}from"./jsx-runtime-BoZ7yaty.js";import{L as o}from"./Link-CYEuH1yP.js";import{T as x}from"./Typography-56Df3xvc.js";import{I as c}from"./IconBookmarkLineW200-C6AamESr.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./useTheme-B7wNoq1D.js";import"./useTheme-Bas6BIKa.js";import"./styled-CkBBDypc.js";import"./memoTheme-DCKoxpDd.js";import"./index-CrbC6HhZ.js";import"./extendSxProp-gK8sWd8Z.js";import"./emotion-react.browser.esm-DrFEIfPJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-DX0NN56D.js";import"./SvgIcon-DUjU_dba.js";import"./SvgIcon.classes-BQruNm0T.js";const y=e=>e.globals.locale==="en"?"Link":"Ссылка",v=e=>e.globals.locale==="en"?"Link with inherited color":"Ссылка с унаследованным цветом",I=e=>e.globals.locale==="en"?"Link with custom color":"Ссылка с произвольным цветом",j=e=>e.globals.locale==="en"?"Link with the icon":"Ссылка с иконкой",H={tags:["autodocs"],component:o,parameters:{references:["Link"]},argTypes:{children:{table:{disable:!0}},component:{table:{disable:!0}},startIcon:{table:{disable:!0}},endIcon:{table:{disable:!0}},color:{table:{disable:!0}},variant:{table:{disable:!0}},underline:{control:{type:"select"}}}},r={render:(e,n)=>t.jsxs(x,{style:{display:"flex",flexWrap:"wrap",gap:"16px"},variant:"body100",children:[t.jsx(o,{...e,component:"a",href:"https://google.com",target:"_blank",children:y(n)}),t.jsx(o,{...e,color:"inherit",component:"a",href:"https://google.com",target:"_blank",children:v(n)}),t.jsx(o,{...e,color:"secondary.300",component:"a",href:"https://google.com",target:"_blank",children:I(n)}),t.jsx(o,{...e,component:"a",endIcon:t.jsx(c,{container:!0,containerSize:"20px"}),href:"https://google.com",target:"_blank",children:j(n)})]})},i={render:()=>t.jsxs(x,{component:"div",variant:"body100",children:["Lorem ipsum dolor sit amet,"," ",t.jsx(o,{component:"a",endIcon:t.jsx(c,{container:!0,containerSize:"20px"}),href:"#",target:"_blank",children:"consectetur"})," ","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"," ",t.jsx(o,{component:"a",href:"#",target:"_blank",children:"reprehenderit"})," ","in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"," ",t.jsx(o,{disabled:!0,component:"button",startIcon:t.jsx(c,{container:!0,containerSize:"20px"}),variant:"body100",children:"non proident"}),", sunt in culpa qui officia deserunt mollit anim id est laborum."]})},a={render:(e,n)=>{const L=y(n),f=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body400","body300","body200","body100","mini100","mini200","micro","button","caption","overline"];return t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"baseline"},children:f.map(s=>t.jsxs(o,{component:"a",href:"#",target:"_blank",variant:s,...e,children:[L," ",s]},s))})}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args, context) => {
    return <MuiTypography style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }} variant="body100">
        <Link {...args} component="a" href="https://google.com" target="_blank">
          {getLink(context)}
        </Link>
        <Link {...args} color="inherit" component="a" href="https://google.com" target="_blank">
          {getLinkInherit(context)}
        </Link>
        <Link {...args} color="secondary.300" component="a" href="https://google.com" target="_blank">
          {getLinkColor(context)}
        </Link>
        <Link {...args} component="a" endIcon={<IconBookmarkLineW200 container containerSize="20px" />} href="https://google.com" target="_blank">
          {getLinkIcon(context)}
        </Link>
      </MuiTypography>;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <MuiTypography component="div" variant="body100">
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
      </MuiTypography>;
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args, context) => {
    const text = getLink(context);
    const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body400', 'body300', 'body200', 'body100', 'mini100', 'mini200', 'micro', 'button', 'caption', 'overline'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'baseline'
    }}>
        {variants.map(variant => <Link key={variant} component="a" href="#" target="_blank" variant={variant as LinkProps['variant']} {...args}>
            {text} {variant}
          </Link>)}
      </div>;
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const J=["Demo","Alignment","Typography"];export{i as Alignment,r as Demo,a as Typography,J as __namedExportsOrder,H as default};
