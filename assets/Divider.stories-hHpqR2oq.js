import{j as t}from"./iframe-Bc8-Q25v.js";import{D as i}from"./Divider-COoXnJWy.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx.m-CH7BE6MN.js";import"./useDefaultProps-lGeK2dpt.js";const D={tags:["autodocs"],component:i,parameters:{references:["Divider"]},argTypes:{children:{table:{disable:!0}},color:{table:{disable:!0}},flexItem:{table:{disable:!0}}}},r={render:s=>t.jsx("div",{style:{height:"200px",width:"200px"},children:t.jsx(i,{...s})})},e={render:(s,x)=>t.jsx("div",{style:{height:"200px",width:"200px"},children:t.jsx(i,{...s,children:x.globals.locale==="en"?"Text":"Текст"})})};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      height: '200px',
      width: '200px'
    }}>
        <Divider {...args} />
      </div>;
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,c,p,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args, context) => {
    return <div style={{
      height: '200px',
      width: '200px'
    }}>
        <Divider {...args}>{context.globals.locale === 'en' ? 'Text' : 'Текст'}</Divider>
      </div>;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"We can pass child text inside the divider.",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const j=["Demo","WithText"];export{r as Demo,e as WithText,j as __namedExportsOrder,D as default};
