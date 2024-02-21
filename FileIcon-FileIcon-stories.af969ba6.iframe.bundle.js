"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[791],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__("./node_modules/prop-types/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js")),_mui_system__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),_mui_base__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),_styles_styled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),_typographyClasses__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Typography/typographyClasses.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_6__.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({margin:0},ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},__WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Typography(inProps,ref){const themeProps=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,_mui_system__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_3__.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,_mui_base__WEBPACK_IMPORTED_MODULE_4__.Z)(slots,_typographyClasses__WEBPACK_IMPORTED_MODULE_5__.f,classes)})(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TypographyRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.Z)({as:Component,ref,ownerState,className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__.Z)(classes.root,className)},other))}))},"./node_modules/@mui/material/Typography/typographyClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,f:()=>getTypographyUtilityClass});var _mui_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.Z)("MuiTypography",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},"./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>extendSxProp});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge.js"),_getThemeValue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/getThemeValue.js");const _excluded=["sx"],splitProps=props=>{const result={systemProps:{},otherProps:{}};return Object.keys(props).forEach((prop=>{_getThemeValue__WEBPACK_IMPORTED_MODULE_0__.G[prop]?result.systemProps[prop]=props[prop]:result.otherProps[prop]=props[prop]})),result};function extendSxProp(props){const{sx:inSx}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded),{systemProps,otherProps}=splitProps(other);let finalSx;return finalSx=Array.isArray(inSx)?[systemProps,...inSx]:"function"==typeof inSx?(...args)=>{const result=inSx(...args);return(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.P)(result)?(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,result):systemProps}:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},systemProps,inSx),(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},otherProps,{sx:finalSx})}},"./src/components/FileIcon/FileIcon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileIcon_stories});var FileIcon=__webpack_require__("./src/components/FileIcon/FileIcon.tsx"),react=__webpack_require__("./node_modules/react/index.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileIconIconVariant=react.forwardRef(((props,ref)=>{const theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(SvgIcon.Z,{height:props.height,style:{width:`${props.width}px`,height:`${props.height}px`,fill:"none",overflow:"visible"},viewBox:"0 0 36 48",width:props.width,...props,children:[(0,jsx_runtime.jsx)("path",{d:"M35.5 12V41.5C35.5 44.8137 32.8137 47.5 29.5 47.5H6.5C3.18629 47.5 0.5 44.8137 0.5 41.5V6.5C0.5 3.18629 3.18629 0.5 6.5 0.5H24",stroke:theme.palette.monoA.A150,style:{vectorEffect:"non-scaling-stroke"}}),(0,jsx_runtime.jsx)("path",{ref,clipRule:"evenodd",d:"M24.5 0H24V8.45455C24 10.4126 25.5874 12 27.5455 12L36 12V11.5L24.5 0Z",fill:theme.palette.monoA.A150,fillRule:"evenodd"})]})}));try{FileIconIconVariant.displayName="FileIconIconVariant",FileIconIconVariant.__docgenInfo={description:"",displayName:"FileIconIconVariant",props:{children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},color:{defaultValue:{value:"'inherit'"},description:"The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.",name:"color",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inherit"'},{value:'"action"'}]}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"inherit"'},{value:'"large"'}]}},shapeRendering:{defaultValue:null,description:"The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this prop.",name:"shapeRendering",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:'Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox="0 0 50 20",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.',name:"viewBox",required:!1,type:{name:"string"}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},titleAccess:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"titleAccess",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/icons/FileIconIconVariant.tsx#FileIconIconVariant"]={docgenInfo:FileIconIconVariant.__docgenInfo,name:"FileIconIconVariant",path:"src/components/FileIcon/icons/FileIconIconVariant.tsx#FileIconIconVariant"})}catch(__react_docgen_typescript_loader_error){}var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getFileIconTextUtilityClass(slot){return(0,generateUtilityClass.Z)("ESFileIconText",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESFileIconText",["root"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");const FileIconTextRoot=(0,styled.ZP)(Typography.Z,{name:"ESFileIconText",slot:"Root",overridesResolver:(props,styles)=>styles.root})((()=>({position:"relative",top:"-2px"}))),FileIconText=inProps=>{const{className,children,sx,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESFileIconText"}),styles=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getFileIconTextUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(FileIconTextRoot,{className:(0,clsx_m.Z)(styles.root,className),component:"div",sx,variant:"mini100",children})};FileIconText.displayName="FileIconText";try{FileIconText.displayName="FileIconText",FileIconText.__docgenInfo={description:"",displayName:"FileIconText",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FileIconTextClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/FileIconText/FileIconText.tsx#FileIconText"]={docgenInfo:FileIconText.__docgenInfo,name:"FileIconText",path:"src/components/FileIcon/FileIconText/FileIconText.tsx#FileIconText"})}catch(__react_docgen_typescript_loader_error){}var FileIconBadge=__webpack_require__("./src/components/FileIcon/FileIconBadge/FileIconBadge.tsx");const FileIcon_stories={tags:["autodocs"],component:FileIcon.a,parameters:{references:["FileIcon","FileIconBadge","FileIconText"]},argTypes:{textChildren:{description:"Text in text component.",name:"FileIconText.children",control:{type:"text"}},badgeChildren:{description:"Text in badge component.",name:"FileIconBadge.children",control:{type:"text"}},badgeColor:{name:"FileIconBadge.color",control:{type:"color"},description:"The badge component background color."},badgeSize:{name:"FileIconBadge.size",control:{type:"select"},options:["md","sm"],description:"The badge component size."}},args:{textChildren:"DOCX",badgeChildren:"RAR",badgeColor:"#ff0000",badgeSize:"md"}},Demo={render:args=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,icon:FileIconIconVariant,width:args.width}),(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,icon:FileIconIconVariant,width:args.width,children:(0,jsx_runtime.jsx)(FileIconText,{children:args.textChildren})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,width:args.width}),(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,width:args.width,children:(0,jsx_runtime.jsx)(FileIconText,{children:args.textChildren})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,icon:FileIconIconVariant,width:args.width,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:args.badgeColor,size:args.badgeSize,children:args.badgeChildren})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:args.height,width:args.width,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:args.badgeColor,size:args.badgeSize,children:args.badgeChildren})})]})},Sizes={render:()=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,jsx_runtime.jsx)(FileIcon.a,{children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"red",size:"md",children:"ZIP"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:44,width:33,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"purple",size:"sm",children:"RAR"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:40,width:30,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"#9672FF",size:"sm",children:"RAR"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:36,width:27,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"#9672FF",size:"sm",children:"RAR"})}),(0,jsx_runtime.jsx)(FileIcon.a,{icon:FileIconIconVariant,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"red",size:"md",children:"ZIP"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:44,icon:FileIconIconVariant,width:33,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"purple",size:"sm",children:"RAR"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:40,icon:FileIconIconVariant,width:30,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"#9672FF",size:"sm",children:"RAR"})}),(0,jsx_runtime.jsx)(FileIcon.a,{height:36,icon:FileIconIconVariant,width:27,children:(0,jsx_runtime.jsx)(FileIconBadge.x,{color:"#9672FF",size:"sm",children:"RAR"})})]})};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <div style={{\n      display: 'flex',\n      alignItems: 'center',\n      gap: '16px'\n    }}>\n        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width} />\n        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>\n          <FileIconText>{args.textChildren}</FileIconText>\n        </FileIcon>\n        <FileIcon height={args.height} width={args.width} />\n        <FileIcon height={args.height} width={args.width}>\n          <FileIconText>{args.textChildren}</FileIconText>\n        </FileIcon>\n        <FileIcon height={args.height} icon={FileIconIconVariant} width={args.width}>\n          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>\n            {args.badgeChildren}\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={args.height} width={args.width}>\n          <FileIconBadge color={args.badgeColor} size={args.badgeSize}>\n            {args.badgeChildren}\n          </FileIconBadge>\n        </FileIcon>\n      </div>;\n  }\n}",...Demo.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <div style={{\n      display: \'flex\',\n      alignItems: \'center\',\n      gap: \'16px\'\n    }}>\n        <FileIcon>\n          <FileIconBadge color="red" size="md">\n            ZIP\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={44} width={33}>\n          <FileIconBadge color="purple" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={40} width={30}>\n          <FileIconBadge color="#9672FF" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={36} width={27}>\n          <FileIconBadge color="#9672FF" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon icon={FileIconIconVariant}>\n          <FileIconBadge color="red" size="md">\n            ZIP\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={44} icon={FileIconIconVariant} width={33}>\n          <FileIconBadge color="purple" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={40} icon={FileIconIconVariant} width={30}>\n          <FileIconBadge color="#9672FF" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n        <FileIcon height={36} icon={FileIconIconVariant} width={27}>\n          <FileIconBadge color="#9672FF" size="sm">\n            RAR\n          </FileIconBadge>\n        </FileIcon>\n      </div>;\n  }\n}',...Sizes.parameters?.docs?.source},description:{story:"Children element automatically positioned in visual center depending on component size.",...Sizes.parameters?.docs?.description}}};const __namedExportsOrder=["Demo","Sizes"];try{Sizes.displayName="Sizes",Sizes.__docgenInfo={description:"Children element automatically positioned in visual center depending on component size.",displayName:"Sizes",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/FileIcon.stories.tsx#Sizes"]={docgenInfo:Sizes.__docgenInfo,name:"Sizes",path:"src/components/FileIcon/FileIcon.stories.tsx#Sizes"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FileIcon/FileIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>FileIcon});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getFileIconUtilityClass(slot){return(0,generateUtilityClass.Z)("ESFileIcon",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESFileIcon",["root","children","icon"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileIconIcon=react.forwardRef(((props,ref)=>{const theme=(0,useTheme.Z)();return(0,jsx_runtime.jsxs)(SvgIcon.Z,{height:props.height,style:{width:`${props.width}px`,height:`${props.height}px`},viewBox:"0 0 36 48",width:props.width,...props,children:[(0,jsx_runtime.jsx)("path",{clipRule:"evenodd",d:"M6 0C2.68629 0 0 2.68629 0 6V42C0 45.3137 2.68629 48 6 48H30C33.3137 48 36 45.3137 36 42V11.2931C36 10.4678 35.6599 9.67883 35.0599 9.1121L26.2789 0.818961C25.722 0.293009 24.985 0 24.219 0H6Z",fill:theme.palette.monoA.A100,fillRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{ref,clipRule:"evenodd",d:"M33.1213 10.1213L25.8787 2.87868C25.3161 2.31607 24.553 2 23.7574 2H23V10C23 11.6569 24.3431 13 26 13H34V12.2426C34 11.447 33.6839 10.6839 33.1213 10.1213Z",fill:theme.palette.monoA.A100,fillRule:"evenodd"})]})}));try{FileIconIcon.displayName="FileIconIcon",FileIconIcon.__docgenInfo={description:"",displayName:"FileIconIcon",props:{children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<SvgIconClasses> & Partial<ClassNameMap<never>>)"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},color:{defaultValue:{value:"'inherit'"},description:"The color of the component. It supports those theme colors that make sense for this component.\nYou can use the `htmlColor` prop to apply a color attribute to the SVG element.",name:"color",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"inherit"'},{value:'"action"'}]}},fontSize:{defaultValue:{value:"'medium'"},description:"The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"inherit"'},{value:'"large"'}]}},shapeRendering:{defaultValue:null,description:"The shape-rendering attribute. The behavior of the different options is described on the\n[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).\nIf you are having issues with blurry icons you should investigate this prop.",name:"shapeRendering",required:!1,type:{name:"string"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:'Allows you to redefine what the coordinates without units mean inside an SVG element.\nFor example, if the SVG element is 500 (width) by 200 (height),\nand you pass viewBox="0 0 50 20",\nthis means that the coordinates inside the SVG will go from the top left corner (0,0)\nto bottom right (50,20) and each unit will be worth 10px.',name:"viewBox",required:!1,type:{name:"string"}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},titleAccess:{defaultValue:null,description:"Provides a human-readable title for the element that contains it.\nhttps://www.w3.org/TR/SVG-access/#Equivalent",name:"titleAccess",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/icons/FileIconIcon.tsx#FileIconIcon"]={docgenInfo:FileIconIcon.__docgenInfo,name:"FileIconIcon",path:"src/components/FileIcon/icons/FileIconIcon.tsx#FileIconIcon"})}catch(__react_docgen_typescript_loader_error){}const FileIconRoot=(0,styled.ZP)("div",{name:"ESFileIcon",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme})=>({color:theme.palette.monoA.A500,display:"flex",fontWeight:700,height:"auto",justifyContent:"center",position:"relative"}))),FileIconChildren=(0,styled.ZP)("div",{name:"ESFileIcon",slot:"Children",overridesResolver:(props,styles)=>styles.root})((()=>({alignItems:"center",display:"flex",flexDirection:"column",inset:0,justifyContent:"center",position:"absolute"}))),FileIcon=inProps=>{const{className,sx,icon=FileIconIcon,width=36,height=48,children,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESFileIcon"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],children:["children"],icon:["icon"]},getFileIconUtilityClass,classes)})({...props}),iconRef=(0,react.useRef)(null),rootIconRef=(0,react.useRef)(null),[paddingTop,setPaddingTop]=(0,react.useState)(0),Icon=icon;return(0,react.useEffect)((()=>{if(iconRef.current&&rootIconRef.current){const iconHeight=iconRef.current.getBoundingClientRect().height,iconTop=iconRef.current.getBoundingClientRect().top,rootIconTop=rootIconRef.current.getBoundingClientRect().top;setPaddingTop(iconHeight+(iconTop-rootIconTop))}}),[iconRef.current,rootIconRef.current,width,height]),(0,jsx_runtime.jsxs)(FileIconRoot,{ref:rootIconRef,className:(0,clsx_m.Z)(classes.root,className),sx,children:[(0,jsx_runtime.jsx)(Icon,{ref:iconRef,className:classes.icon,height,width}),!!children&&(0,jsx_runtime.jsx)(FileIconChildren,{className:classes.children,style:{paddingTop:`${Math.round(paddingTop)}px`},children})]})};FileIcon.displayName="FileIcon";try{FileIcon.displayName="FileIcon",FileIcon.__docgenInfo={description:"This component is for displaying file extensions.",displayName:"FileIcon",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FileIconClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},width:{defaultValue:{value:"36"},description:"The icon's width.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"48"},description:"The icon's height.",name:"height",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"The background icon component.",name:"icon",required:!1,type:{name:"FC<{}>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/FileIcon.tsx#FileIcon"]={docgenInfo:FileIcon.__docgenInfo,name:"FileIcon",path:"src/components/FileIcon/FileIcon.tsx#FileIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FileIcon/FileIconBadge/FileIconBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>FileIconBadge});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getFileIconBadgeUtilityClass(slot){return(0,generateUtilityClass.Z)("ESFileIconBadge",slot)}(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("ESFileIconBadge",["root","md","sm"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileIconBadgeRoot=(0,styled.ZP)(Typography.Z,{name:"ESFileIconBadge",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{size}}=props;return[styles.root,styles[size]]}})((({theme,ownerState})=>({alignSelf:"flex-start",borderRadius:"4px",display:"block",color:theme.palette.monoB[500],left:"-5px",position:"relative",textAlign:"center",..."md"===ownerState.size&&{minWidth:"32px",padding:"1px 2px",top:"-3px"},..."sm"===ownerState.size&&{minWidth:"30px",padding:"0 2px",top:"-2px"}}))),FileIconBadge=inProps=>{const{className,children,sx,color,size="md",...props}=(0,useThemeProps.Z)({props:inProps,name:"ESFileIconBadge"}),ownerState={...props,size},classes=(ownerState=>{const{classes,size}=ownerState,slots={root:["root",size]};return(0,composeClasses.Z)(slots,getFileIconBadgeUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(FileIconBadgeRoot,{className:(0,clsx_m.Z)(classes.root,className),ownerState,style:{backgroundColor:color},sx,variant:"mini100",children})};FileIconBadge.displayName="FileIconBadge";try{FileIconBadge.displayName="FileIconBadge",FileIconBadge.__docgenInfo={description:"",displayName:"FileIconBadge",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FileIconBadgeClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},color:{defaultValue:null,description:"The component background color.",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"'md'"},description:"The component size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FileIcon/FileIconBadge/FileIconBadge.tsx#FileIconBadge"]={docgenInfo:FileIconBadge.__docgenInfo,name:"FileIconBadge",path:"src/components/FileIcon/FileIconBadge/FileIconBadge.tsx#FileIconBadge"})}catch(__react_docgen_typescript_loader_error){}}}]);