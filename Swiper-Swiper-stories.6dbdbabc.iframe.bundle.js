"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[9904],{"./src/components/Swiper/Swiper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Customization:()=>Customization,Demo:()=>Demo,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Swiper_stories});var styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),Swiper_context=__webpack_require__("./src/components/Swiper/Swiper.context.ts"),Swiper=__webpack_require__("./src/components/Swiper/Swiper.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getSwiperPaginationUtilityClass(slot){return(0,generateUtilityClass.ZP)("ESSwiperPagination",slot)}const swiperPaginationClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("ESSwiperPagination",["root","horizontal","vertical","start","end","small","long","big","item","itemActive","input","bullet","bulletActive","bulletSmall"]);var composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PAGINATION_ITEM_HIDDEN={height:0,margin:0,minHeight:0,minWidth:0,opacity:0,padding:0,width:0},SwiperPaginationItemRoot=(0,styled.ZP)("label",{name:"ESSwiperPagination",slot:"Item",overridesResolver:(props,styles)=>{const{ownerState:{index,active}}=props;return[styles.item,index===active&&styles.itemActive]}})((({theme,ownerState})=>({alignItems:"center",border:0,cursor:"pointer",display:"flex",justifyContent:"center",margin:2,minHeight:16,minWidth:16,padding:4,position:"relative",transitionDuration:`${theme.transitions.duration.shortest}ms`,transitionTimingFunction:"linear","&:focus":{outline:"none"},[`&:hover .${swiperPaginationClasses.bullet}`]:{backgroundColor:theme.vars.palette.secondary.A600},[`&:active .${swiperPaginationClasses.bullet}`]:{backgroundColor:theme.vars.palette.secondary.A800},...ownerState.index===ownerState.active&&{[`&:hover .${swiperPaginationClasses.bullet}, &:active .${swiperPaginationClasses.bullet}`]:{backgroundColor:theme.vars.palette.secondary[300]}}}))),SwiperPaginationItemBullet=(0,styled.ZP)("div",{name:"ESSwiperPagination",slot:"Bullet",overridesResolver:(props,styles)=>{const{ownerState:{index,active,small}}=props;return[styles.bullet,index===active&&styles.bulletActive,small&&styles.bulletSmall]}})((({theme,ownerState})=>({backgroundColor:theme.vars.palette.secondary.A400,borderRadius:"16px",height:8,transitionDuration:`${theme.transitions.duration.shortest}ms`,transitionTimingFunction:"linear",width:8,...ownerState.index===ownerState.active&&{backgroundColor:theme.vars.palette.secondary[300]},...ownerState.small&&{height:4,width:4}}))),SwiperPaginationItemInput=(0,styled.ZP)("input",{name:"ESSwiperPagination",slot:"Input",overridesResolver:(props,styles)=>styles.input})((({theme})=>({appearance:"none",cursor:"pointer",height:0,left:0,opacity:0,position:"absolute",top:0,width:0,[`&:focus-visible + .${swiperPaginationClasses.bulletActive}`]:{boxShadow:`0 0 0 7px ${theme.vars.palette.secondary.A500}`}}))),SwiperPaginationItem=({index,active,from,to,siblingFrom,siblingTo,name,transition,onSlideChange,...props})=>{const ownerState={...props,index,active,small:index===siblingFrom&&siblingFrom>from||index===siblingTo&&siblingTo<to},classes=(ownerState=>{const{classes,index,active,small}=ownerState,slots={item:["item",index===active&&"itemActive"],bullet:["bullet",index===active&&"bulletActive",small&&"bulletSmall"],input:["input"]};return(0,composeClasses.Z)(slots,getSwiperPaginationUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SwiperPaginationItemRoot,{"aria-label":`${index}`,className:classes.item,ownerState,style:index<siblingFrom||index>siblingTo?{...PAGINATION_ITEM_HIDDEN,...transition}:transition,children:[(0,jsx_runtime.jsx)(SwiperPaginationItemInput,{checked:index===active,className:classes.input,name,type:"radio",value:index,onChange:onSlideChange}),(0,jsx_runtime.jsx)(SwiperPaginationItemBullet,{className:classes.bullet,ownerState,style:transition})]},index)};try{SwiperPaginationItem.displayName="SwiperPaginationItem",SwiperPaginationItem.__docgenInfo={description:"",displayName:"SwiperPaginationItem",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Partial<SwiperPaginationClasses>"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"number"}},from:{defaultValue:null,description:"",name:"from",required:!0,type:{name:"number"}},to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"number"}},siblingFrom:{defaultValue:null,description:"",name:"siblingFrom",required:!0,type:{name:"number"}},siblingTo:{defaultValue:null,description:"",name:"siblingTo",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},transition:{defaultValue:null,description:"",name:"transition",required:!0,type:{name:"{ transitionDuration?: string | undefined; }"}},onSlideChange:{defaultValue:null,description:"",name:"onSlideChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Swiper/SwiperPaginationItem/SwiperPaginationItem.tsx#SwiperPaginationItem"]={docgenInfo:SwiperPaginationItem.__docgenInfo,name:"SwiperPaginationItem",path:"src/components/Swiper/SwiperPaginationItem/SwiperPaginationItem.tsx#SwiperPaginationItem"})}catch(__react_docgen_typescript_loader_error){}const SwiperPaginationRoot=(0,styled.ZP)("div",{name:"ESSwiperPagination",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{direction,position,variant}}=props;return[styles.root,styles[direction],styles[position],styles[variant]]}})((({ownerState})=>({alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center",..."horizontal"===ownerState.direction&&{flexDirection:"row",width:"100%",[`&.${swiperPaginationClasses.start}`]:{marginBottom:14,marginTop:-2},[`&.${swiperPaginationClasses.end}`]:{marginBottom:-2,marginTop:14}},..."vertical"===ownerState.direction&&{flexDirection:"column",height:"100%",[`&.${swiperPaginationClasses.start}`]:{marginLeft:-2,marginRight:14},[`&.${swiperPaginationClasses.end}`]:{marginLeft:14,marginRight:-2}},..."start"===ownerState.position&&{order:-1},..."long"===ownerState.variant&&{[`&.${swiperPaginationClasses.horizontal} .${swiperPaginationClasses.bulletActive}`]:{width:16},[`&.${swiperPaginationClasses.vertical} .${swiperPaginationClasses.bulletActive}`]:{height:16}},..."big"===ownerState.variant&&{[`& .${swiperPaginationClasses.itemActive}`]:{padding:2},[`& .${swiperPaginationClasses.bulletActive}`]:{height:12,width:12}}}))),SwiperPagination=inProps=>{const{className,sx,position="end",variant="small",siblingCount,transitionDuration,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSwiperPagination"}),{direction,from,to,active,setActiveSlide}=(0,Swiper_context.m)(),name=(0,react.useMemo)((()=>"pagination-"+SwiperPagination.count++),[]),transition=transitionDuration||0===transitionDuration?{transitionDuration:`${transitionDuration}ms`}:{},bullets=(0,react.useMemo)((()=>{const result=[];for(let i=from;i<=to;i++)result.push(i);return result}),[from,to]),{siblingFrom,siblingTo}=(0,react.useMemo)((()=>({siblingFrom:siblingCount?Math.max(from,active-siblingCount-Math.max(0,active+siblingCount-to)):from,siblingTo:siblingCount?Math.min(to,active+siblingCount+Math.max(0,from-(active-siblingCount))):to})),[from,to,active,siblingCount]),onSlideChange=event=>{setActiveSlide(+event.target.value)},ownerState={...props,direction,position,variant},classes=(ownerState=>{const{classes,direction,position,variant}=ownerState,slots={root:["root",direction,position,variant]};return(0,composeClasses.Z)(slots,getSwiperPaginationUtilityClass,classes)})(ownerState);return to<=from?null:(0,jsx_runtime.jsx)(SwiperPaginationRoot,{className:(0,clsx_m.Z)(classes.root,className),ownerState,sx,children:bullets.map((index=>(0,jsx_runtime.jsx)(SwiperPaginationItem,{active,from,index,name,siblingFrom,siblingTo,to,transition,onSlideChange},index)))})};SwiperPagination.count=0;try{SwiperPagination.displayName="SwiperPagination",SwiperPagination.__docgenInfo={description:"",displayName:"SwiperPagination",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SwiperPaginationClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},position:{defaultValue:null,description:"The pagination position.",name:"position",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},variant:{defaultValue:null,description:"The pagination variant.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'},{value:'"long"'}]}},siblingCount:{defaultValue:null,description:"Number of always visible items before and after active slide.",name:"siblingCount",required:!1,type:{name:"number"}},transitionDuration:{defaultValue:null,description:"The length of time a transition animation should take to complete.",name:"transitionDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Swiper/SwiperPagination/SwiperPagination.tsx#SwiperPagination"]={docgenInfo:SwiperPagination.__docgenInfo,name:"SwiperPagination",path:"src/components/Swiper/SwiperPagination/SwiperPagination.tsx#SwiperPagination"})}catch(__react_docgen_typescript_loader_error){}var IconChevronLeftW400=__webpack_require__("./src/icons/IconChevronLeftW400.tsx"),IconChevronRightW400=__webpack_require__("./src/icons/IconChevronRightW400.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Button_classes=__webpack_require__("./src/components/Button/Button.classes.ts");const Image=props=>(0,jsx_runtime.jsx)("img",{height:"160px",src:props.src,style:{objectFit:"cover",borderRadius:"8px"},width:props.width||"160px"}),Swiper_stories={tags:["autodocs"],component:Swiper.t,parameters:{references:["Swiper","SwiperButton","SwiperPagination"]},argTypes:{direction:{table:{disable:!0}},alignment:{table:{category:"General"},options:["center","start"],control:{type:"select"}},snap:{table:{category:"General"},defaultValue:!0},snapStop:{table:{category:"General"},options:["normal","always"],control:{type:"select"}},draggable:{table:{category:"General"},defaultValue:!0},gap:{table:{category:"General"}},loop:{table:{category:"General"}},autoPlay:{table:{category:"AutoPlay"}},autoPlayCount:{table:{category:"AutoPlay"}},buttonPrev:{table:{disable:!0}},buttonNext:{table:{disable:!0}},pagination:{table:{disable:!0}},SwiperPaginationPosition:{name:"SwiperPagination.position",description:"The position of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"end"}},options:["start","end"],control:{type:"select"}},SwiperPaginationVariant:{name:"SwiperPagination.variant",description:"The variant of the `SwiperPagination` component.",table:{category:"Pagination",defaultValue:{summary:"small"}},options:["small","long","big"],control:{type:"select"}},SwiperPaginationSiblingCount:{name:"SwiperPagination.siblingCount",description:"Number of always visible items before and after active slide.",table:{category:"Pagination"},control:{type:"number"}},SwiperPaginationTransitionDuration:{name:"SwiperPagination.transitionDuration",description:"The length of time in ms a transition animation should take to complete.",table:{category:"Pagination",defaultValue:{summary:"theme.transitions.duration.shortest"}},control:{type:"number"}},actions:{table:{disable:!0}}},args:{}},Demo={render:({SwiperPaginationPosition,SwiperPaginationVariant,SwiperPaginationSiblingCount,SwiperPaginationTransitionDuration,...args})=>(0,jsx_runtime.jsxs)(Swiper.t,{...args,pagination:(0,jsx_runtime.jsx)(SwiperPagination,{position:SwiperPaginationPosition,siblingCount:SwiperPaginationSiblingCount,transitionDuration:SwiperPaginationTransitionDuration,variant:SwiperPaginationVariant}),children:[(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png",width:"320px"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png",width:"320px"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"})]})},Vertical={render:({SwiperPaginationPosition,SwiperPaginationVariant,SwiperPaginationSiblingCount,SwiperPaginationTransitionDuration,...args})=>(0,jsx_runtime.jsx)("div",{style:{height:"min(512px, calc(100vh - 2rem))"},children:(0,jsx_runtime.jsxs)(Swiper.t,{...args,direction:"vertical",pagination:(0,jsx_runtime.jsx)(SwiperPagination,{position:SwiperPaginationPosition,siblingCount:SwiperPaginationSiblingCount,transitionDuration:SwiperPaginationTransitionDuration,variant:SwiperPaginationVariant}),children:[(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/4.png"})]})})},CustomizationButton=(0,styled.ZP)(Button.z)((({theme,prev,next})=>({position:"absolute",top:"50%",transform:"translateY(-50%)",borderRadius:"50%",...prev&&{left:8},...next&&{right:8},backdropFilter:"blur(10px)",[`&.${Button_classes.J.root}.${Button_classes.J.variantText}.${Button_classes.J.colorBlack}`]:{"--background":theme.vars.palette.white.A600}}))),CustomizationButtonPrev=()=>{const{active,setActiveSlide}=(0,Swiper_context.m)();return(0,jsx_runtime.jsx)(CustomizationButton,{prev:!0,color:"black",onClick:()=>{setActiveSlide(active-1)},children:(0,jsx_runtime.jsx)(IconChevronLeftW400.D,{})})},CustomizationButtonNext=()=>{const{active,setActiveSlide}=(0,Swiper_context.m)();return(0,jsx_runtime.jsx)(CustomizationButton,{next:!0,color:"black",onClick:()=>{setActiveSlide(active+1)},children:(0,jsx_runtime.jsx)(IconChevronRightW400.p,{})})},Customization={render:args=>{const Image=props=>(0,jsx_runtime.jsx)("img",{height:"56px",src:props.src,width:"56px"});return(0,jsx_runtime.jsxs)(Swiper.t,{...args,buttonNext:(0,jsx_runtime.jsx)(CustomizationButtonNext,{}),buttonPrev:(0,jsx_runtime.jsx)(CustomizationButtonPrev,{}),gap:8,children:[(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-5.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-6.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-7.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-8.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-9.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-5.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-6.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-7.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-8.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-9.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-1.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-2.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-3.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-4.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-5.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-6.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-7.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-8.png"}),(0,jsx_runtime.jsx)(Image,{src:"./swiper/2-9.png"})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: ({\n    SwiperPaginationPosition,\n    SwiperPaginationVariant,\n    SwiperPaginationSiblingCount,\n    SwiperPaginationTransitionDuration,\n    ...args\n  }) => {\n    return <Swiper {...args} pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>\n        <Image src="./swiper/1.png" />\n        <Image src="./swiper/2.png" width="320px" />\n        <Image src="./swiper/3.png" />\n        <Image src="./swiper/4.png" />\n        <Image src="./swiper/1.png" />\n        <Image src="./swiper/2.png" width="320px" />\n        <Image src="./swiper/3.png" />\n        <Image src="./swiper/4.png" />\n        <Image src="./swiper/1.png" />\n        <Image src="./swiper/2.png" />\n        <Image src="./swiper/3.png" />\n        <Image src="./swiper/4.png" />\n      </Swiper>;\n  }\n}',...Demo.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: ({\n    SwiperPaginationPosition,\n    SwiperPaginationVariant,\n    SwiperPaginationSiblingCount,\n    SwiperPaginationTransitionDuration,\n    ...args\n  }) => {\n    return <div style={{\n      height: \'min(512px, calc(100vh - 2rem))\'\n    }}>\n        <Swiper {...args} direction="vertical" pagination={<SwiperPagination position={SwiperPaginationPosition} siblingCount={SwiperPaginationSiblingCount} transitionDuration={SwiperPaginationTransitionDuration} variant={SwiperPaginationVariant} />}>\n          <Image src="./swiper/1.png" />\n          <Image src="./swiper/2.png" />\n          <Image src="./swiper/3.png" />\n          <Image src="./swiper/4.png" />\n          <Image src="./swiper/1.png" />\n          <Image src="./swiper/2.png" />\n          <Image src="./swiper/3.png" />\n          <Image src="./swiper/4.png" />\n          <Image src="./swiper/1.png" />\n          <Image src="./swiper/2.png" />\n          <Image src="./swiper/3.png" />\n          <Image src="./swiper/4.png" />\n        </Swiper>\n      </div>;\n  }\n}',...Vertical.parameters?.docs?.source},description:{story:"We can create vertical swiper.",...Vertical.parameters?.docs?.description}}},Customization.parameters={...Customization.parameters,docs:{...Customization.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const Image = (props: {\n      src: string;\n    }) => {\n      return <img height="56px" src={props.src} width="56px" />;\n    };\n    return <Swiper {...args} buttonNext={<CustomizationButtonNext />} buttonPrev={<CustomizationButtonPrev />} gap={8}>\n        <Image src="./swiper/2-1.png" />\n        <Image src="./swiper/2-2.png" />\n        <Image src="./swiper/2-3.png" />\n        <Image src="./swiper/2-4.png" />\n        <Image src="./swiper/2-5.png" />\n        <Image src="./swiper/2-6.png" />\n        <Image src="./swiper/2-7.png" />\n        <Image src="./swiper/2-8.png" />\n        <Image src="./swiper/2-9.png" />\n        <Image src="./swiper/2-1.png" />\n        <Image src="./swiper/2-2.png" />\n        <Image src="./swiper/2-3.png" />\n        <Image src="./swiper/2-4.png" />\n        <Image src="./swiper/2-5.png" />\n        <Image src="./swiper/2-6.png" />\n        <Image src="./swiper/2-7.png" />\n        <Image src="./swiper/2-8.png" />\n        <Image src="./swiper/2-9.png" />\n        <Image src="./swiper/2-1.png" />\n        <Image src="./swiper/2-2.png" />\n        <Image src="./swiper/2-3.png" />\n        <Image src="./swiper/2-4.png" />\n        <Image src="./swiper/2-5.png" />\n        <Image src="./swiper/2-6.png" />\n        <Image src="./swiper/2-7.png" />\n        <Image src="./swiper/2-8.png" />\n        <Image src="./swiper/2-9.png" />\n      </Swiper>;\n  }\n}',...Customization.parameters?.docs?.source},description:{story:"Swiper is highly customizable. We can adjust `gap` between slides, override styles for swiper, swiper buttons and\npagination, or provide our own components via `buttonPrev`, `buttonNext` and `pagination` props.",...Customization.parameters?.docs?.description}}};const __namedExportsOrder=["Demo","Vertical","Customization"];try{Vertical.displayName="Vertical",Vertical.__docgenInfo={description:"We can create vertical swiper.",displayName:"Vertical",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Swiper/Swiper.stories.tsx#Vertical"]={docgenInfo:Vertical.__docgenInfo,name:"Vertical",path:"src/components/Swiper/Swiper.stories.tsx#Vertical"})}catch(__react_docgen_typescript_loader_error){}try{Customization.displayName="Customization",Customization.__docgenInfo={description:"Swiper is highly customizable. We can adjust `gap` between slides, override styles for swiper, swiper buttons and\npagination, or provide our own components via `buttonPrev`, `buttonNext` and `pagination` props.",displayName:"Customization",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Swiper/Swiper.stories.tsx#Customization"]={docgenInfo:Customization.__docgenInfo,name:"Customization",path:"src/components/Swiper/Swiper.stories.tsx#Customization"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function __WEBPACK_DEFAULT_EXPORT__(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);