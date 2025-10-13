import{j as e}from"./jsx-runtime-BoZ7yaty.js";import{u as V,S as f}from"./Swiper-DcUYrjWc.js";import{r as I}from"./index-DIDRz_s2.js";import{c as X}from"./clsx.m-C7bORDfW.js";import{g as Z,a as ee,s as S,c as G}from"./styled-QckRPC_l.js";import{u as ne}from"./DefaultPropsProvider-BgzOhfjl.js";import{I as te}from"./IconChevronLeftW400-0b7UA-ko.js";import{I as ie}from"./IconChevronRightW400-zcXvIcn7.js";import{B as re,b as P}from"./Button-CL4pDWwx.js";import"./IconArrowUpW500-C0_lDBrT.js";import"./SvgIcon-DcWEUr91.js";import"./SvgIcon.classes-CE9bwLeY.js";import"./IconArrowLeftW500-BJKW73OT.js";import"./IconArrowRightW500-B-XmP1ak.js";import"./useLatest-sVqXUmVb.js";import"./useDocumentEventListener-DcHHZa3z.js";import"./useResizeObserver-BNbozrrH.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ButtonBase-BtCzZW19.js";import"./useForkRef-DJnV46t9.js";function W(t){return ee("ESSwiperPagination",t)}const a=Z("ESSwiperPagination",["root","horizontal","vertical","start","end","small","long","big","item","itemActive","input","bullet","bulletActive","bulletSmall"]),se=t=>{const{classes:n,active:i,small:s}=t;return G({item:["item",i&&"itemActive"],bullet:["bullet",i&&"bulletActive",s&&"bulletSmall"],input:["input"]},W,n)},ae={height:0,margin:0,minHeight:0,minWidth:0,opacity:0,padding:0,width:0},oe=S("label",{name:"ESSwiperPagination",slot:"Item",overridesResolver:(t,n)=>{const{ownerState:{active:i}}=t;return[n.item,i&&n.itemActive]}})(({theme:t})=>({alignItems:"center",border:0,cursor:"pointer",display:"flex",justifyContent:"center",margin:2,minHeight:16,minWidth:16,padding:4,position:"relative",transitionDuration:`${t.transitions.duration.shortest}ms`,transitionTimingFunction:"linear","&:focus":{outline:"none"},[`&:hover .${a.bullet}`]:{backgroundColor:t.vars.palette.secondary.A600},[`&:active .${a.bullet}`]:{backgroundColor:t.vars.palette.secondary.A800},variants:[{props:{active:!0},style:{[`&:hover .${a.bullet}, &:active .${a.bullet}`]:{backgroundColor:t.vars.palette.secondary[300]}}}]})),pe=S("div",{name:"ESSwiperPagination",slot:"Bullet",overridesResolver:(t,n)=>{const{ownerState:{active:i,small:s}}=t;return[n.bullet,i&&n.bulletActive,s&&n.bulletSmall]}})(({theme:t})=>({backgroundColor:t.vars.palette.secondary.A400,borderRadius:"16px",height:8,transitionDuration:`${t.transitions.duration.shortest}ms`,transitionTimingFunction:"linear",width:8,variants:[{props:{active:!0},style:{backgroundColor:t.vars.palette.secondary[300]}},{props:{small:!0},style:{height:4,width:4}}]})),le=S("input",{name:"ESSwiperPagination",slot:"Input",overridesResolver:(t,n)=>n.input})(({theme:t})=>({appearance:"none",cursor:"pointer",height:0,left:0,opacity:0,position:"absolute",top:0,width:0,[`&:focus-visible + .${a.bulletActive}`]:{boxShadow:`0px 0px 0px 2px ${t.vars.palette.monoA[500]}`}})),C=({index:t,active:n,from:i,to:s,siblingFrom:o,siblingTo:p,name:d,transition:w,onSlideChange:j,...l})=>{const c=t===o&&o>i||t===p&&p<s,g={...l,active:t===n,small:c},b=se(g);return e.jsxs(oe,{"aria-label":`${t}`,className:b.item,ownerState:g,style:t<o||t>p?{...ae,...w}:w,children:[e.jsx(le,{checked:t===n,className:b.input,name:d,type:"radio",value:t,onChange:j}),e.jsx(pe,{className:b.bullet,ownerState:g,style:w})]},t)};try{C.displayName="SwiperPaginationItem",C.__docgenInfo={description:"",displayName:"SwiperPaginationItem",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Partial<SwiperPaginationClasses>"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"number"}},from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},siblingFrom:{defaultValue:null,description:"",name:"siblingFrom",required:!0,type:{name:"number"}},siblingTo:{defaultValue:null,description:"",name:"siblingTo",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},transition:{defaultValue:null,description:"",name:"transition",required:!0,type:{name:"{ transitionDuration?: string | undefined; }"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const ce=t=>{const{classes:n,direction:i,position:s,variant:o}=t;return G({root:["root",i,s,o]},W,n)},ge=S("div",{name:"ESSwiperPagination",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:{direction:i,position:s,variant:o}}=t;return[n.root,n[i],n[s],n[o]]}})({alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center",variants:[{props:{direction:"horizontal"},style:{flexDirection:"row",width:"100%",[`&.${a.start}`]:{marginBottom:14,marginTop:-2},[`&.${a.end}`]:{marginBottom:-2,marginTop:14}}},{props:{direction:"vertical"},style:{flexDirection:"column",height:"100%",[`&.${a.start}`]:{marginLeft:-2,marginRight:14},[`&.${a.end}`]:{marginLeft:14,marginRight:-2}}},{props:{position:"start"},style:{order:-1}},{props:{variant:"long"},style:{[`&.${a.horizontal} .${a.bulletActive}`]:{width:16},[`&.${a.vertical} .${a.bulletActive}`]:{height:16}}},{props:{variant:"big"},style:{[`& .${a.itemActive}`]:{padding:2},[`& .${a.bulletActive}`]:{height:12,width:12}}}]}),m=t=>{const{className:n,sx:i,position:s="end",variant:o="small",siblingCount:p,transitionDuration:d,...w}=ne({props:t,name:"ESSwiperPagination"}),{direction:j,from:l,to:c,active:g,setActiveSlide:b}=V(),H=I.useMemo(()=>`pagination-${m.count++}`,[]),L=d||d===0?{transitionDuration:`${d}ms`}:{},O=I.useMemo(()=>{const u=[];for(let x=l;x<=c;x++)u.push(x);return u},[l,c]),{siblingFrom:Y,siblingTo:J}=I.useMemo(()=>{const u=p?Math.max(l,g-p-Math.max(0,g+p-c)):l,x=p?Math.min(c,g+p+Math.max(0,l-(g-p))):c;return{siblingFrom:u,siblingTo:x}},[l,c,g,p]),K=u=>{b(+u.target.value)},T={...w,direction:j,position:s,variant:o},Q=ce(T);return c<=l?null:e.jsx(ge,{className:X(Q.root,n),ownerState:T,sx:i,children:O.map(u=>e.jsx(C,{active:g,from:l,index:u,name:H,siblingFrom:Y,siblingTo:J,to:c,transition:L,onSlideChange:K},u))})};m.count=0;try{m.displayName="SwiperPagination",m.__docgenInfo={description:"",displayName:"SwiperPagination",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SwiperPaginationClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},position:{defaultValue:null,description:"The pagination position.",name:"position",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},variant:{defaultValue:null,description:"The pagination variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"long"'}]}},siblingCount:{defaultValue:null,description:"Number of always visible items before and after active slide.",name:"siblingCount",required:!1,type:{name:"number"}},transitionDuration:{defaultValue:null,description:"The length of time a transition animation should take to complete.",name:"transitionDuration",required:!1,type:{name:"number"}}}}}catch{}const r=t=>e.jsx("img",{height:"160px",src:t.src,style:{objectFit:"cover",borderRadius:"8px"},width:t.width||"160px"}),qe={tags:["autodocs"],component:f,parameters:{references:["Swiper","SwiperButton","SwiperPagination"]},argTypes:{direction:{table:{disable:!0}},alignment:{table:{category:"General"},options:["center","start"],control:{type:"select"}},snap:{table:{category:"General"},defaultValue:!0},snapStop:{table:{category:"General"},options:["normal","always"],control:{type:"select"}},draggable:{table:{category:"General"},defaultValue:!0},gap:{table:{category:"General"}},loop:{table:{category:"General"}},autoPlay:{table:{category:"AutoPlay"}},autoPlayCount:{table:{category:"AutoPlay"}},buttonPrev:{table:{disable:!0}},buttonNext:{table:{disable:!0}},pagination:{table:{disable:!0}},SwiperPaginationPosition:{name:"SwiperPagination.position",description:"The position of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"end"}},options:["start","end"],control:{type:"select"}},SwiperPaginationVariant:{name:"SwiperPagination.variant",description:"The variant of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"small"}},options:["small","long","big"],control:{type:"select"}},SwiperPaginationSiblingCount:{name:"SwiperPagination.siblingCount",description:"Number of always visible items before and after active slide.",table:{category:"Pagination"},control:{type:"number"}},SwiperPaginationTransitionDuration:{name:"SwiperPagination.transitionDuration",description:"The length of time in ms a transition animation should take to complete.",table:{category:"Pagination",defaultValue:{summary:"theme.transitions.duration.shortest"}},control:{type:"number"}},actions:{table:{disable:!0}}},args:{}},y={render:({SwiperPaginationPosition:t,SwiperPaginationVariant:n,SwiperPaginationSiblingCount:i,SwiperPaginationTransitionDuration:s,...o})=>e.jsxs(f,{...o,pagination:e.jsx(m,{position:t,siblingCount:i,transitionDuration:s,variant:n}),children:[e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png",width:"320px"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"}),e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png",width:"320px"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"}),e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"})]})},v={render:({SwiperPaginationPosition:t,SwiperPaginationVariant:n,SwiperPaginationSiblingCount:i,SwiperPaginationTransitionDuration:s,...o})=>e.jsx("div",{style:{height:"min(512px, calc(100vh - 2rem))"},children:e.jsxs(f,{...o,direction:"vertical",pagination:e.jsx(m,{position:t,siblingCount:i,transitionDuration:s,variant:n}),children:[e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"}),e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"}),e.jsx(r,{src:"./swiper/1.png"}),e.jsx(r,{src:"./swiper/2.png"}),e.jsx(r,{src:"./swiper/3.png"}),e.jsx(r,{src:"./swiper/4.png"})]})})},U=S(re)(({theme:t,prev:n,next:i})=>({position:"absolute",top:"50%",transform:"translateY(-50%)",borderRadius:"50%",...n&&{left:8},...i&&{right:8},backdropFilter:"blur(10px)",[`&.${P.root}.${P.variantText}.${P.colorBlack}`]:{"--background":t.vars.palette.white.A600}})),ue=()=>{const{active:t,setActiveSlide:n}=V(),i=()=>{n(t-1)};return e.jsx(U,{prev:!0,color:"black",onClick:i,children:e.jsx(te,{})})},me=()=>{const{active:t,setActiveSlide:n}=V(),i=()=>{n(t+1)};return e.jsx(U,{next:!0,color:"black",onClick:i,children:e.jsx(ie,{})})},h={render:t=>{const n=i=>e.jsx("img",{height:"56px",src:i.src,width:"56px"});return e.jsxs(f,{...t,buttonNext:e.jsx(me,{}),buttonPrev:e.jsx(ue,{}),gap:8,children:[e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"}),e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"}),e.jsx(n,{src:"./swiper/2-1.png"}),e.jsx(n,{src:"./swiper/2-2.png"}),e.jsx(n,{src:"./swiper/2-3.png"}),e.jsx(n,{src:"./swiper/2-4.png"}),e.jsx(n,{src:"./swiper/2-5.png"}),e.jsx(n,{src:"./swiper/2-6.png"}),e.jsx(n,{src:"./swiper/2-7.png"}),e.jsx(n,{src:"./swiper/2-8.png"}),e.jsx(n,{src:"./swiper/2-9.png"})]})}};var $,D,A;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return <Swiper {...args} pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
      </Swiper>;
  }
}`,...(A=(D=y.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var N,_,q,k,E;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return <div style={{
      height: 'min(512px, calc(100vh - 2rem))'
    }}>
        <Swiper {...args} direction="vertical" pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
        </Swiper>
      </div>;
  }
}`,...(q=(_=v.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"We can create vertical swiper.",...(E=(k=v.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var R,B,z,M,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const Image = (props: {
      src: string;
    }) => {
      return <img height="56px" src={props.src} width="56px" />;
    };
    return <Swiper {...args} buttonNext={<CustomizationButtonNext />} buttonPrev={<CustomizationButtonPrev />} gap={8}>
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
      </Swiper>;
  }
}`,...(z=(B=h.parameters)==null?void 0:B.docs)==null?void 0:z.source},description:{story:"Swiper is highly customizable. We can adjust `gap` between slides, override styles for swiper, swiper buttons and\npagination, or provide our own components via `buttonPrev`, `buttonNext` and `pagination` props.",...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};const ke=["Demo","Vertical","Customization"];export{h as Customization,y as Demo,v as Vertical,ke as __namedExportsOrder,qe as default};
