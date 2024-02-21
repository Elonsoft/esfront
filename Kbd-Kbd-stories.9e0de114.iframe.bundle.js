"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[4777],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./node_modules/prop-types/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js")),_mui_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_base__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_typographyClasses__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/typographyClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Typography(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_4__.Z)(slots,_typographyClasses__WEBPACK_IMPORTED_MODULE_5__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TypographyRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({as:Component,ref,ownerState,className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/Typography/typographyClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getTypographyUtilityClass});var _mui_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiTypography",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.G[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./src/components/Kbd/Kbd.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Kbd/Kbd.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={tags:["autodocs"],component:___WEBPACK_IMPORTED_MODULE_1__.T,parameters:{references:["Kbd"]},argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}}},args:{children:"Ctrl"}},Demo={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{component:"div",variant:"body100",children:["Lorem ipsum dolor sit amet ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.T,{...args})," consectetur adipiscing elit."]})};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Typography component="div" variant="body100">\n        Lorem ipsum dolor sit amet <Kbd {...args} /> consectetur adipiscing elit.\n      </Typography>;\n  }\n}',...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"./src/components/Kbd/Kbd.classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>kbdClasses,X:()=>getKbdUtilityClass});var _mui_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getKbdUtilityClass(slot){return(0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.Z)("ESKbd",slot)}const kbdClasses=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESKbd",["root","raised","contained","outlined"])},"./src/components/Kbd/Kbd.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Kbd});var clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_Kbd_classes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Kbd/Kbd.classes.ts"),_mui_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const KbdRoot=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ZP)("kbd",{name:"ESKbd",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{variant}}=props;return[styles.root,styles[variant]]}})((({theme,ownerState})=>({...theme.typography.body100,color:theme.palette.monoA.A900,padding:"0 4px",display:"inline-block",borderRadius:"4px",fontFamily:"inherit",..."raised"===ownerState.variant&&{backgroundColor:theme.palette.monoA.A75,boxShadow:`0 1px 0 1px ${theme.palette.monoA.A300}`},..."contained"===ownerState.variant&&{backgroundColor:theme.palette.monoA.A75,boxShadow:`0 1px 0 ${theme.palette.monoA.A300}, inset 0 0 0 1px ${theme.palette.monoA.A50}`},..."outlined"===ownerState.variant&&{boxShadow:`inset 0 0 0 1px ${theme.palette.monoA.A200}`}}))),Kbd=inProps=>{const{children,className,sx,variant="raised",...props}=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.Z)({props:inProps,name:"ESKbd"}),ownerState={...props,variant},classes=(ownerState=>{const{classes,variant}=ownerState,slots={root:["root",variant]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_1__.Z)(slots,_Kbd_classes__WEBPACK_IMPORTED_MODULE_2__.X,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(KbdRoot,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.Z)(classes.root,className),ownerState,sx,children})};Kbd.displayName="Kbd";try{Kbd.displayName="Kbd",Kbd.__docgenInfo={description:"Display keyboard button or keys combination.",displayName:"Kbd",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<KbdClasses>"}},className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'raised'"},description:"Variant of the component.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"contained"'},{value:'"raised"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Kbd/Kbd.tsx#Kbd"]={docgenInfo:Kbd.__docgenInfo,name:"Kbd",path:"src/components/Kbd/Kbd.tsx#Kbd"})}catch(__react_docgen_typescript_loader_error){}}}]);