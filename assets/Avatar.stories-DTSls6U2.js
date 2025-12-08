import{j as r}from"./jsx-runtime-BoZ7yaty.js";import{A as e}from"./Avatar-CjPQFasn.js";import{B as p}from"./Box-CBu-ct3E.js";import{I as l}from"./IconAccountRoundedFillW500Lc-CA-ZMw3s.js";import{I as m}from"./IconAccountFillW500Lc-njPIawdD.js";import"./index-DIDRz_s2.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./Avatar.classes-DpQoqcog.js";import"./identifier-haEvzVNA.js";import"./DefaultPropsProvider-BgzOhfjl.js";import"./styled-CkBBDypc.js";import"./SvgIcon.classes-BQruNm0T.js";import"./useTheme-Bas6BIKa.js";import"./extendSxProp-gK8sWd8Z.js";import"./SvgIcon-DUjU_dba.js";const R={tags:["autodocs"],component:e,parameters:{references:["Avatar"]},argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}}},args:{src:"./avatar/6.png",size:40,variant:"square",outlined:!1}},o={args:{children:"НФ",outlined:!0},render:({children:a,src:n,...t})=>r.jsxs(p,{display:"flex",flexDirection:"column",gap:"10px",children:[r.jsx(e,{src:n,...t,children:a}),r.jsx(e,{...t,children:a}),r.jsx(e,{...t,children:t.variant==="circle"?r.jsx(l,{}):r.jsx(m,{})})]})};var c,s,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <Avatar {...args}>
          {args.variant === 'circle' ? <IconAccountRoundedFillW500Lc /> : <IconAccountFillW500Lc />}
        </Avatar>
      </Box>;
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const E=["Demo"];export{o as Demo,E as __namedExportsOrder,R as default};
