"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[4061],{"../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mui/utils/deepmerge/deepmerge.js"),_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js");const _excluded=["sx"],splitProps=props=>{var _props$theme$unstable,_props$theme;const result={systemProps:{},otherProps:{}},config=null!=(_props$theme$unstable=null==props||null==(_props$theme=props.theme)?void 0:_props$theme.unstable_sxConfig)?_props$theme$unstable:_defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__.Z;return Object.keys(props).forEach((prop=>{config[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./src/components/Divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getDividerUtilityClass(slot){return(0,generateUtilityClass.Z)("ESDivider",slot)}const dividerClasses=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESDivider",["root","vertical","horizontal","textAlignCenter","textAlignStart","textAlignEnd","flexItem","withChildren","wrapper"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DividerRoot=(0,styled.ZP)("div",{name:"ESDivider",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{orientation,textAlign,flexItem,withChildren}}=props;return[styles.root,styles[orientation],styles[`textAlign${(0,capitalize.Z)(textAlign)}`],flexItem&&styles.flexItem,withChildren&&styles.withChildren]}})((({theme,ownerState})=>{return{flexShrink:0,color:(obj=theme,path=`palette.${ownerState.color}`,path.split(".").reduce(((acc,item)=>acc&&acc[item]?acc[item]:null),obj)||ownerState.color),[`&:not(.${dividerClasses.withChildren})`]:{backgroundColor:"currentColor",[`&.${dividerClasses.horizontal}`]:{height:`${ownerState.width}px`},[`&.${dividerClasses.vertical}`]:{height:"100%",width:`${ownerState.width}px`}},[`&.${dividerClasses.withChildren}`]:{alignItems:"center",display:"flex",flexWrap:"nowrap",gap:"12px","&::before, &::after":{backgroundColor:"currentColor",content:'""',display:"block",flex:1},[`&.${dividerClasses.horizontal}`]:{flexDirection:"row","&::before, &::after":{height:`${ownerState.width}px`}},[`&.${dividerClasses.vertical}`]:{flexDirection:"column",height:"100%","&::before, &::after":{width:`${ownerState.width}px`}},[`&.${dividerClasses.textAlignStart}::before`]:{content:"unset"},[`&.${dividerClasses.textAlignEnd}::after`]:{content:"unset"}},[`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]:{alignSelf:"stretch",height:"auto"}};var obj,path})),DividerWrapper=(0,styled.ZP)("span",{name:"ESDivider",slot:"Wrapper",overridesResolver:(props,styles)=>styles.wrapper})((({theme})=>({...theme.typography.caption,display:"inline-block",color:theme.palette.monoA.A700}))),Divider=inProps=>{const{className,children,sx,color="monoA.A100",width=1,orientation="horizontal",textAlign="center",flexItem,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESDivider"}),ownerState={...props,color,width,orientation,textAlign,flexItem,withChildren:!!children},classes=(ownerState=>{const{classes,orientation,textAlign,flexItem,withChildren}=ownerState,slots={root:["root",orientation,`textAlign${(0,capitalize.Z)(textAlign)}`,flexItem&&"flexItem",withChildren&&"withChildren"],wrapper:["wrapper"]};return(0,composeClasses.Z)(slots,getDividerUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(DividerRoot,{className:(0,clsx_m.Z)(className,classes.root),ownerState,sx,children:children?(0,jsx_runtime.jsx)(DividerWrapper,{className:classes.wrapper,children}):null})};Divider.muiSkipListHighlight=!0,Divider.__docgenInfo={description:"The Divider is a thin line that groups content in lists and layouts.",methods:[],displayName:"Divider",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:'{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the root element if `orientation="horizontal"`. */\n  horizontal: string;\n  /** Styles applied to the root element if `orientation="vertical"`. */\n  vertical: string;\n  /** Styles applied to the root element if `textAlign="center"`. */\n  textAlignCenter: string;\n  /** Styles applied to the root element if `textAlign="start"`. */\n  textAlignStart: string;\n  /** Styles applied to the root element if `textAlign="end"`. */\n  textAlignEnd: string;\n  /** Styles applied to the root element if `flexItem=true`. */\n  flexItem: string;\n  /** Styles applied to the root element if divider have text. */\n  withChildren: string;\n  /** Styles applied to the span children wrapper element. */\n  wrapper: string;\n}',signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"horizontal",value:{name:"string",required:!0},description:'Styles applied to the root element if `orientation="horizontal"`.'},{key:"vertical",value:{name:"string",required:!0},description:'Styles applied to the root element if `orientation="vertical"`.'},{key:"textAlignCenter",value:{name:"string",required:!0},description:'Styles applied to the root element if `textAlign="center"`.'},{key:"textAlignStart",value:{name:"string",required:!0},description:'Styles applied to the root element if `textAlign="start"`.'},{key:"textAlignEnd",value:{name:"string",required:!0},description:'Styles applied to the root element if `textAlign="end"`.'},{key:"flexItem",value:{name:"string",required:!0},description:"Styles applied to the root element if `flexItem=true`."},{key:"withChildren",value:{name:"string",required:!0},description:"Styles applied to the root element if divider have text."},{key:"wrapper",value:{name:"string",required:!0},description:"Styles applied to the span children wrapper element."}]}}],raw:"Partial<DividerClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},color:{required:!1,tsType:{name:"TypographyProps['color']",raw:"TypographyProps['color']"},description:"The color of the divider.\n@default 'monoA.A100'"},width:{required:!1,tsType:{name:"number"},description:"The width of the divider line.\n@default 1"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"The component orientation.\n@default 'horizontal'"},textAlign:{required:!1,tsType:{name:"union",raw:"'center' | 'start' | 'end'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"The text alignment.\n@default 'center'"},flexItem:{required:!1,tsType:{name:"boolean"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)"}}}},"./src/components/Divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Divider/Divider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={tags:["autodocs"],component:___WEBPACK_IMPORTED_MODULE_1__.i,parameters:{references:["Divider"]},argTypes:{children:{table:{disable:!0}},color:{table:{disable:!0}},flexItem:{table:{disable:!0}}}},Demo={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,{height:"200px",width:"200px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.i,{...args})})},WithText={render:(args,context)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__.Z,{height:"200px",width:"200px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.i,{...args,children:"en"===context.globals.locale?"Text":"Текст"})})};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Box height="200px" width="200px">\n        <Divider {...args} />\n      </Box>;\n  }\n}',...Demo.parameters?.docs?.source}}},WithText.parameters={...WithText.parameters,docs:{...WithText.parameters?.docs,source:{originalSource:"{\n  render: (args, context) => {\n    return <Box height=\"200px\" width=\"200px\">\n        <Divider {...args}>{context.globals.locale === 'en' ? 'Text' : 'Текст'}</Divider>\n      </Box>;\n  }\n}",...WithText.parameters?.docs?.source},description:{story:"We can pass child text inside the divider.",...WithText.parameters?.docs?.description}}};const __namedExportsOrder=["Demo","WithText"]},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};var styled_engine=__webpack_require__("../../node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/ClassNameGenerator.js");const Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:dist_clsx(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({defaultTheme:(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)(),defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box}}]);