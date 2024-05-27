"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[4552],{"./src/hooks/useValueDebounce/useValueDebounce.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useValueDebounce_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const useValueDebounce_stories={tags:["autodocs"],title:"Hooks/useValueDebounce",parameters:{references:["useValueDebounce"]}},Demo={render:function Render(){const[value,setValue]=(0,react.useState)(""),[leading,setLeading]=(0,react.useState)(!1),[trailing,setTrailing]=(0,react.useState)(!0),debouncedValue=((value,delay,options={leading:!1,trailing:!0})=>{const{leading=!1,trailing=!0}=options,isLeading=(0,react.useRef)(!0),[debouncedValue,setDebouncedValue]=(0,react.useState)(value);return(0,react.useEffect)((()=>{isLeading.current&&(isLeading.current=!1,leading&&setDebouncedValue(value));const id=setTimeout((()=>{isLeading.current=!0,trailing&&setDebouncedValue(value)}),delay);return()=>{clearTimeout(id)}}),[value,delay,leading,trailing]),debouncedValue})(value,1e3,{leading,trailing});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"8px",maxWidth:"320px"},children:[(0,jsx_runtime.jsx)(TextField.Z,{fullWidth:!0,label:"Value",size:"40",value,onChange:event=>setValue(event.target.value)}),(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Checkbox.Z,{checked:leading,onChange:event=>setLeading(event.target.checked)}),label:"Leading"}),(0,jsx_runtime.jsx)(FormControlLabel.Z,{control:(0,jsx_runtime.jsx)(Checkbox.Z,{checked:trailing,onChange:event=>setTrailing(event.target.checked)}),label:"Trailing"})]}),(0,jsx_runtime.jsxs)(Typography.Z,{component:"div",sx:{marginTop:"8px"},variant:"body200",children:["Debounced value: ",debouncedValue]})]})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: function Render() {\n    const [value, setValue] = useState('');\n    const [leading, setLeading] = useState(false);\n    const [trailing, setTrailing] = useState(true);\n    const debouncedValue = useValueDebounce(value, 1000, {\n      leading,\n      trailing\n    });\n    return <div>\n        <Box sx={{\n        display: 'flex',\n        flexWrap: 'wrap',\n        gap: '8px',\n        maxWidth: '320px'\n      }}>\n          <TextField fullWidth label=\"Value\" size=\"40\" value={value} onChange={event => setValue(event.target.value)} />\n\n          <FormControlLabel control={<Checkbox checked={leading} onChange={event => setLeading(event.target.checked)} />} label=\"Leading\" />\n\n          <FormControlLabel control={<Checkbox checked={trailing} onChange={event => setTrailing(event.target.checked)} />} label=\"Trailing\" />\n        </Box>\n\n        <Typography component=\"div\" sx={{\n        marginTop: '8px'\n      }} variant=\"body200\">\n          Debounced value: {debouncedValue}\n        </Typography>\n      </div>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]},"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("../../node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};var styled_engine=__webpack_require__("../../node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("../../node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("../../node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/ClassNameGenerator.js");const Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:dist_clsx(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({defaultTheme:(0,__webpack_require__("./node_modules/@mui/material/styles/createTheme.js").Z)(),defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Checkbox_Checkbox});var objectWithoutPropertiesLoose=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("../../node_modules/@mui/system/esm/colorManipulator.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CheckBoxOutlineBlank=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),CheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),IndeterminateCheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function getCheckboxUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiCheckbox",slot)}const Checkbox_checkboxClasses=(0,__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),_excluded=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],CheckboxRoot=(0,styled.ZP)(SwitchBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiCheckbox",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.indeterminate&&styles.indeterminate,"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme,ownerState})=>(0,esm_extends.Z)({color:theme.palette.text.secondary},!ownerState.disableRipple&&{"&:hover":{backgroundColor:(0,colorManipulator.Fq)("default"===ownerState.color?theme.palette.action.active:theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==ownerState.color&&{[`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:{color:theme.palette[ownerState.color].main},[`&.${Checkbox_checkboxClasses.disabled}`]:{color:theme.palette.action.disabled}}))),defaultCheckedIcon=(0,jsx_runtime.jsx)(CheckBox,{}),defaultIcon=(0,jsx_runtime.jsx)(CheckBoxOutlineBlank,{}),defaultIndeterminateIcon=(0,jsx_runtime.jsx)(IndeterminateCheckBox,{}),Checkbox_Checkbox=react.forwardRef((function Checkbox(inProps,ref){var _icon$props$fontSize,_indeterminateIcon$pr;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiCheckbox"}),{checkedIcon=defaultCheckedIcon,color="primary",icon:iconProp=defaultIcon,indeterminate=!1,indeterminateIcon:indeterminateIconProp=defaultIndeterminateIcon,inputProps,size="medium"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),icon=indeterminate?indeterminateIconProp:iconProp,indeterminateIcon=indeterminate?indeterminateIconProp:checkedIcon,ownerState=(0,esm_extends.Z)({},props,{color,indeterminate,size}),classes=(ownerState=>{const{classes,indeterminate,color}=ownerState,slots={root:["root",indeterminate&&"indeterminate",`color${(0,capitalize.Z)(color)}`]},composedClasses=(0,composeClasses.Z)(slots,getCheckboxUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState);return(0,jsx_runtime.jsx)(CheckboxRoot,(0,esm_extends.Z)({type:"checkbox",inputProps:(0,esm_extends.Z)({"data-indeterminate":indeterminate},inputProps),icon:react.cloneElement(icon,{fontSize:null!=(_icon$props$fontSize=icon.props.fontSize)?_icon$props$fontSize:size}),checkedIcon:react.cloneElement(indeterminateIcon,{fontSize:null!=(_indeterminateIcon$pr=indeterminateIcon.props.fontSize)?_indeterminateIcon$pr:size}),ownerState,ref},other,{classes}))}))}}]);