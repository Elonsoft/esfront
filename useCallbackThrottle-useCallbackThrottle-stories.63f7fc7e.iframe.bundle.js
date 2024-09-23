"use strict";(self.webpackChunk_esfront_react=self.webpackChunk_esfront_react||[]).push([[7480],{"../../node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("../../node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("../../node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("../../node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("../../node_modules/@mui/material/styles/identifier.js");const Box_boxClasses=(0,__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiBox",["root"]),defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.default)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:Box_boxClasses.root,generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"../../node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),clsx=__webpack_require__("../../node_modules/@mui/material/node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("../../node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("../../node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("../../node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("../../node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("../../node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.ZP)("MuiTypography",slot)}(0,generateUtilityClasses.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.Z)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.Z)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.Z)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.Z)((0,esm_extends.Z)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.Z)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.Z)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.Z)({as:Component,ref,ownerState,className:(0,clsx.Z)(classes.root,className)},other))}))},"../../node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./src/hooks/useCallbackThrottle/useCallbackThrottle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useCallbackThrottle_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("../../node_modules/@mui/material/Box/Box.js"),TextField=__webpack_require__("../../node_modules/@mui/material/TextField/TextField.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),useLatest=__webpack_require__("./src/hooks/useLatest/useLatest.ts");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useCallbackThrottle_stories={tags:["autodocs"],title:"Hooks/useCallbackThrottle",parameters:{references:["useCallbackThrottle"]}},Demo={render:function Render(){const[throttledValue,setThrottledValue]=(0,react.useState)(""),onChange=((callback,delay)=>{const lastRun=(0,react.useRef)(Date.now()),timeout=(0,react.useRef)(null),callbackRef=(0,useLatest.d)(((...args)=>{callback(...args)})),throttledCallback=(0,react.useCallback)(((...args)=>{const diff=Date.now()-lastRun.current;diff>=delay?(lastRun.current=Date.now(),callbackRef.current(...args)):timeout.current=setTimeout((()=>{lastRun.current=Date.now(),callbackRef.current(...args)}),delay-diff)}),[delay]);return(0,react.useEffect)((()=>()=>{timeout.current&&clearTimeout(timeout.current)}),[]),throttledCallback})((event=>{setThrottledValue(event.target.value)}),1e3);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,label:"Value",size:"40",onChange})}),(0,jsx_runtime.jsxs)(Typography.Z,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Throttled value: ",throttledValue]})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const [throttledValue, setThrottledValue] = useState('');\n    const onChange = useCallbackThrottle((event: React.ChangeEvent<HTMLInputElement>) => {\n      setThrottledValue(event.target.value);\n    }, 1000);\n    return <div>\n        <Box sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        gap: '8px',\n        maxWidth: '320px'\n      }}>\n          <TextField fullWidth label=\"Value\" size=\"40\" onChange={onChange} />\n        </Box>\n\n        <Typography component=\"div\" sx={{\n        marginTop: '8px'\n      }} variant=\"body200\">\n          Throttled value: {throttledValue}\n        </Typography>\n      </div>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);