import{j as r}from"./iframe-Bc8-Q25v.js";import{A as t}from"./Avatar-DJts9l-x.js";import{I as l}from"./IconAccountRoundedFillW500Lc-y9c86pzi.js";import{I as d}from"./IconAccountFillW500Lc-BMy7AYLw.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";import"./SvgIcon-CMA3Mbq7.js";const j={tags:["autodocs"],component:t,parameters:{references:["Avatar"]},argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}}},args:{src:"./avatar/6.png",size:40,variant:"square",outlined:!1}},a={args:{children:"НФ",outlined:!0},render:({children:c,src:i,...e})=>r.jsxs("div",{className:"flex flex-col gap-12",children:[r.jsx(t,{src:i,...e,children:c}),r.jsx(t,{...e,children:c}),r.jsx(t,{...e,children:e.variant==="circle"?r.jsx(l,{}):r.jsx(d,{})})]})};var o,s,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const h=["Demo"];export{a as Demo,h as __namedExportsOrder,j as default};
