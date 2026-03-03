import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{A as t}from"./Avatar-CovLsepL.js";import{I as l}from"./IconAccountRoundedFillW500Lc-BmZMfsp-.js";import{I as m}from"./IconAccountFillW500Lc-vqiE4ZhJ.js";import"./index-ChsGqxH_.js";import"./index-Wm5baAvf.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx.m-C7bORDfW.js";import"./DefaultPropsProvider-BaGbio7E.js";import"./SvgIcon-Bb8ef9Tm.js";const I={tags:["autodocs"],component:t,parameters:{references:["Avatar"]},argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}}},args:{src:"./avatar/6.png",size:40,variant:"square",outlined:!1}},a={args:{children:"НФ",outlined:!0},render:({children:o,src:i,...e})=>r.jsxs("div",{className:"flex flex-col gap-12",children:[r.jsx(t,{src:i,...e,children:o}),r.jsx(t,{...e,children:o}),r.jsx(t,{...e,children:e.variant==="circle"?r.jsx(l,{}):r.jsx(m,{})})]})};var c,s,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'НФ',
    outlined: true
  },
  render: ({
    children,
    src,
    ...args
  }) => {
    return <div className="flex flex-col gap-12">
        <Avatar src={src} {...args}>
          {children}
        </Avatar>
        <Avatar {...args}>{children}</Avatar>
        <Avatar {...args}>
          {args.variant === 'circle' ? <IconAccountRoundedFillW500Lc /> : <IconAccountFillW500Lc />}
        </Avatar>
      </div>;
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const F=["Demo"];export{a as Demo,F as __namedExportsOrder,I as default};
