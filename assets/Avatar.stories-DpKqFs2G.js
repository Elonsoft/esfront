import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{A as o}from"./Avatar-DUxKYXqn.js";import{B as p}from"./Box-BsYG6vwI.js";import{I as m}from"./IconAccountRoundedLc-n2SsdELN.js";import{I as l}from"./IconAccountLc-DrFgd60B.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./Avatar.classes-Er26cif2.js";import"./generateUtilityClasses-D4qQEpRV.js";import"./useThemeProps-DJft-tfL.js";import"./SvgIcon.classes-CqsHNf3G.js";import"./clsx-KPMS8x67.js";import"./SvgIcon-DnRBQAn1.js";const R={tags:["autodocs"],component:o,parameters:{references:["Avatar"]},argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}}},args:{src:"./avatar/6.png",size:40,variant:"square",outlined:!1}},e={args:{children:"НФ",outlined:!0},render:({children:a,src:i,...t})=>r.jsxs(p,{display:"flex",flexDirection:"column",gap:"10px",children:[r.jsx(o,{src:i,...t,children:a}),r.jsx(o,{...t,children:a}),r.jsx(o,{...t,children:t.variant==="circle"?r.jsx(m,{}):r.jsx(l,{})})]})};var c,s,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'НФ',
    outlined: true
  },
  render: ({
    children,
    src,
    ...args
  }) => {
    return <Box display="flex" flexDirection="column" gap="10px">
        <Avatar src={src} {...args}>
          {children}
        </Avatar>
        <Avatar {...args}>{children}</Avatar>
        <Avatar {...args}>{args.variant === 'circle' ? <IconAccountRoundedLc /> : <IconAccountLc />}</Avatar>
      </Box>;
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const E=["Demo"];export{e as Demo,E as __namedExportsOrder,R as default};
