import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{e as $}from"./index-Wm5baAvf.js";import{c as y}from"./clsx.m-C7bORDfW.js";import{u as C}from"./DefaultPropsProvider-BaGbio7E.js";import{A as e}from"./Avatar-CovLsepL.js";import{T as p}from"./Tooltip-Bp1S5HE5.js";import{B as T}from"./Button-BRu9apcn.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useForkRef-EzStQRfh.js";import"./useEnhancedEffect-CGMGWzXh.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./useTheme-LLMgoSjJ.js";import"./useTimeout-CqYeTkks.js";import"./useControlled-uYOZv1Nc.js";import"./useId-BsPUOvOw.js";import"./useEvent-BPmsl14G.js";import"./useForkRef-CGhsnMYO.js";import"./index-CkcRf-8q.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bsen2STc.js";import"./mergeSlotProps-BIU5YWIM.js";import"./composeClasses-CAXbtk_0.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./index-pH_Peplc.js";import"./SvgIcon-Bb8ef9Tm.js";import"./ButtonBase-BhCJPokL.js";const _=(a,u,l,c)=>{const o=l>=0?0:Math.abs(l);return u==="ltr"?`${a+o+c}px`:`${a-o-c}px`},G=a=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${a} ${a}'%3E%3Ccircle cx='${a/2}' cy='${a/2}' r='${a/2}' fill='black' /%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${a} ${a}'%3E%3Ccircle cx='${a/2}' cy='${a/2}' fill='white' r='${a/2}'/%3E%3C/svg%3E")`,i=a=>{const{className:u,style:l,children:c,direction:o="rtl",spacing:h=-6,cutoutWidth:n=2,size:t=32}=C({props:a,name:"ESAvatarGroup"});return r.jsx("div",{className:y("es-avatar-group",`es-avatar-group--direction--${o}`,u),style:{...l,"--es-avatar-group-size":`${t}px`,"--es-avatar-group-spacing":`${h}px`,"--es-avatar-group-mask-image":G(t),"--es-avatar-group-mask-position":`${_(t,o,h,n)}, center`,"--es-avatar-group-mask-size":`${n===0?t:t+n*2}px, ${t}px`,"--es-avatar-group-mask-size-firefox":`${+t+n*2}px, ${+t+.5}px`,"--es-avatar-group-mask-size-safari":`${+t+n*2}px, ${+t}px`},children:$.Children.map(c,(A,j)=>r.jsx("div",{className:"es-avatar-group__avatar",children:A},j))})};try{i.displayName="AvatarGroup",i.__docgenInfo={description:"AvatarGroup renders its children as a stack.",displayName:"AvatarGroup",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:{value:"rtl"},description:"Direction of the avatars stacking.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"rtl"'},{value:'"ltr"'}]}},size:{defaultValue:{value:"32"},description:"Avatar size.",name:"size",required:!1,type:{name:"number"}},spacing:{defaultValue:{value:"-6"},description:"Spacing between avatars.",name:"spacing",required:!1,type:{name:"number"}},cutoutWidth:{defaultValue:{value:"2"},description:"Cutout width between avatars.",name:"cutoutWidth",required:!1,type:{name:"number"}}}}}catch{}const la={tags:["autodocs"],component:i,parameters:{references:["AvatarGroup"]}},m={render:a=>r.jsxs(i,{cutoutWidth:a.cutoutWidth,direction:a.direction,size:a.size,spacing:a.spacing,children:[r.jsx(e,{alt:"John Sharp",src:"./avatar/1.png"}),r.jsx(e,{alt:"John Sharp",src:"./avatar/2.png"}),r.jsx(e,{alt:"John Sharp",src:"./avatar/3.png"}),r.jsx(e,{alt:"John Sharp",src:"./avatar/4.png"}),r.jsx(e,{alt:"John Sharp",src:"./avatar/5.png"})]})},s={render:()=>r.jsxs(i,{cutoutWidth:5,size:56,spacing:-20,children:[r.jsx(p,{arrow:!0,placement:"top",title:"John Sharp",children:r.jsx(e,{alt:"John Sharp",src:"./avatar/1.png"})}),r.jsx(p,{arrow:!0,placement:"top",title:"Sharp John",children:r.jsx(e,{alt:"Sharp John",src:"./avatar/2.png"})}),r.jsx(p,{arrow:!0,placement:"top",title:"John Sharp",children:r.jsx(e,{alt:"John Sharp",src:"./avatar/3.png"})}),r.jsx(p,{arrow:!0,placement:"top",title:"Sharp John",children:r.jsx(e,{alt:"Sharp John",src:"./avatar/4.png"})}),r.jsx(p,{arrow:!0,placement:"top",title:"John Sharp",children:r.jsx(e,{alt:"John Sharp",src:"./avatar/5.png"})}),r.jsx(T,{color:"tertiary",size:"700",variant:"contained",children:"+5"})]})};var d,v,g;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <AvatarGroup cutoutWidth={args.cutoutWidth} direction={args.direction} size={args.size} spacing={args.spacing}>
        <Avatar alt="John Sharp" src="./avatar/1.png" />
        <Avatar alt="John Sharp" src="./avatar/2.png" />
        <Avatar alt="John Sharp" src="./avatar/3.png" />
        <Avatar alt="John Sharp" src="./avatar/4.png" />
        <Avatar alt="John Sharp" src="./avatar/5.png" />
      </AvatarGroup>;
  }
}`,...(g=(v=m.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,S,f,J,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <AvatarGroup cutoutWidth={5} size={56} spacing={-20}>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/1.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Sharp John">
          <Avatar alt="Sharp John" src="./avatar/2.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/3.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Sharp John">
          <Avatar alt="Sharp John" src="./avatar/4.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/5.png" />
        </Tooltip>
        <Button color="tertiary" size="700" variant="contained">
          +5
        </Button>
      </AvatarGroup>;
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"We can use `AvatarGroup` not only with the `Avatar` component.",...(w=(J=s.parameters)==null?void 0:J.docs)==null?void 0:w.description}}};const ca=["Demo","Children"];export{s as Children,m as Demo,ca as __namedExportsOrder,la as default};
