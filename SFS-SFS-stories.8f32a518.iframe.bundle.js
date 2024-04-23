"use strict";(self.webpackChunk_elonkit_react=self.webpackChunk_elonkit_react||[]).push([[8974],{"./src/components/SFS/SFS.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SFS_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),clsx_m=__webpack_require__("../../node_modules/clsx/dist/clsx.m.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");function getSFSUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFS",slot)}(0,generateUtilityClasses.Z)("ESSFS",["root"]);var composeClasses=__webpack_require__("./node_modules/@mui/base/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const SFSRoot=(0,styled.ZP)("div",{name:"ESSFS",slot:"Root",overridesResolver:(_,styles)=>styles.root})((({theme})=>({padding:"8px",backgroundColor:theme.palette.surface[100],boxShadow:theme.palette.shadow.down[100],borderRadius:"6px"}))),SFS=inProps=>{const{className,sx,children,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFS"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getSFSUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(SFSRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children})};function getSFSRowUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSRow",slot)}SFS.__docgenInfo={description:"",methods:[],displayName:"SFS",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."}]}}],raw:"Partial<SFSClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."}}};(0,generateUtilityClasses.Z)("ESSFSRow",["root"]);const SFSRowRoot=(0,styled.ZP)("div",{name:"ESSFSRow",slot:"Root",overridesResolver:(_,styles)=>styles.root})((()=>({display:"flex","& .MuiDivider-root":{margin:"8px 2px",height:"16px"}}))),SFSRow=inProps=>{const{className,children,sx,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSRow"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getSFSRowUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(SFSRowRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children})};function getSFSSearchUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSSearch",slot)}SFSRow.__docgenInfo={description:"",methods:[],displayName:"SFSRow",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."}]}}],raw:"Partial<SFSRowClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."}}};(0,generateUtilityClasses.Z)("ESSFSSearch",["root","input","clear"]);var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),InputAdornment=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),IconCloseW350=__webpack_require__("./src/icons/IconCloseW350.tsx"),IconMagnify2W400=__webpack_require__("./src/icons/IconMagnify2W400.tsx");const SFSSearchRoot=(0,styled.ZP)("div",{name:"ESSFSSearch",slot:"Root",overridesResolver:(_,styles)=>styles.root})((()=>({display:"flex",alignItems:"center",flexGrow:1}))),SFSSearchInput=(0,styled.ZP)(TextField.Z,{name:"ESSFSSearch",slot:"Input",overridesResolver:(_,styles)=>styles.input})((({theme})=>({"& .MuiInputLabel-root":{opacity:0},"& .MuiOutlinedInput-root":{"&.MuiInputBase-adornedEnd":{paddingRight:"3px"},"&.MuiInputBase-adornedStart":{paddingLeft:"2px","&.Mui-focused":{"& .MuiInputAdornment-positionStart .ESSvgIcon-root":{color:theme.palette.monoA.A600}}},"& .MuiOutlinedInput-notchedOutline":{border:"none"},"& .MuiOutlinedInput-input":{paddingLeft:"0",...theme.typography.body100,lineHeight:"23px"}},"& .MuiInputAdornment-positionEnd":{marginLeft:0,width:"32px",cursor:"pointer",flexShrink:0},"& .MuiInputAdornment-positionStart":{marginRight:0,width:"32px",flexShrink:0,justifyContent:"center"},"& .MuiInputAdornment-positionStart .ESSvgIcon-root":{color:theme.palette.monoA.A500},"&:hover .MuiInputAdornment-positionStart .ESSvgIcon-root":{color:theme.palette.monoA.A600}}))),SFSSearchClear=(0,styled.ZP)(Button.Z,{name:"ESSFSSearch",slot:"Clear",overridesResolver:(_,styles)=>styles.clear})((({theme})=>({"&.MuiButton-root":{padding:"0 4px",margin:"0 6px 0 2px",flexShrink:0,"&:hover ":{"& .ESSvgIcon-root":{color:theme.palette.monoA.A500},"& .MuiTouchRipple-root":{backgroundColor:"inherit"}},"&:active .ESSvgIcon-root":{color:theme.palette.monoA.A600}},"& .ESSvgIcon-root":{color:theme.palette.monoA.A400},"&.Mui-focusVisible":{backgroundColor:theme.palette.monoA.A200}}))),SFSSearch=(0,react.memo)((function SFSSearch(inProps){const{className,sx,onClear,ariaLabel,labelClear,placeholder,iconClear=(0,jsx_runtime.jsx)(IconCloseW350.l,{}),iconSearch=(0,jsx_runtime.jsx)(IconMagnify2W400.h,{}),...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSSearch"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],input:["input"],clear:["clear"]},getSFSSearchUtilityClass,classes)})({...props});return(0,jsx_runtime.jsx)(SFSSearchRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children:(0,jsx_runtime.jsx)(SFSSearchInput,{InputProps:{startAdornment:(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"start",children:iconSearch}),endAdornment:onClear&&(0,jsx_runtime.jsx)(InputAdornment.Z,{position:"end",onClick:onClear,children:(0,jsx_runtime.jsx)(SFSSearchClear,{disableFocusRipple:!0,disableRipple:!0,"aria-label":labelClear,className:classes.clear,color:"monoA",size:"24",children:iconClear})})},...props,fullWidth:!0,"aria-label":ariaLabel,className:classes.input,placeholder,size:"32"})})}));function getSFSSortingUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSSorting",slot)}SFSSearch.__docgenInfo={description:"",methods:[],displayName:"SFSSearch",props:{classes:{required:!1,tsType:{name:"Partial",elements:[{name:"any"}],raw:"Partial<any>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLTextAreaElement | HTMLInputElement",elements:[{name:"HTMLTextAreaElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the value is changed."},value:{required:!0,tsType:{name:"string"},description:"The value of the input element."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear button is clicked. If prop is passed clear button will appear."},ariaLabel:{required:!1,tsType:{name:"string"},description:"The aria-label input content."},labelClear:{required:!1,tsType:{name:"string"},description:"The aria-label clear button content."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder content."},iconClear:{required:!1,tsType:{name:"ReactNode"},description:"The icon placed in clear button."},iconSearch:{required:!1,tsType:{name:"ReactNode"},description:"The icon placed in before the search input."}}};(0,generateUtilityClasses.Z)("ESSFSSorting",["root","button","buttonBadge"]);var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),IconSortOff=__webpack_require__("./src/icons/IconSortOff.tsx"),IconSortAscending2=__webpack_require__("./src/icons/IconSortAscending2.tsx"),IconSortDescending2=__webpack_require__("./src/icons/IconSortDescending2.tsx"),SortingMenu=__webpack_require__("./src/components/SortingMenu/SortingMenu.tsx");function getSFSButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSButton",slot)}const sfsButtonClasses=(0,generateUtilityClasses.Z)("ESSFSButton",["root","active"]);var SvgIcon_classes=__webpack_require__("./src/components/SvgIcon/SvgIcon.classes.ts");const SFSButtonRoot=(0,styled.ZP)(Button.Z,{shouldForwardProp:prop=>(prop=>"ownerState"!==prop&&"theme"!==prop&&"sx"!==prop&&"as"!==prop&&"classes"!==prop)(prop)||"classes"===prop,name:"ESSFSButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:{active}}=props;return[styles.root,active&&active.loading]}})((({theme})=>({gap:"4px",textTransform:"inherit","&.MuiButton-root":{"&:hover .ESSvgIcon-root, &:hover .MuiTypography-root, &:focus-visible .ESSvgIcon-root, &:focus-visible .MuiTypography-root":{color:theme.palette.monoA.A600},"& .MuiTypography-root":{color:theme.palette.monoA.A550},"& .ESSvgIcon-root":{color:theme.palette.monoA.A500}},[theme.breakpoints.down("tabletXS")]:{gap:"2px","& > .MuiTypography-root:first-of-type":{display:"none"}},[theme.breakpoints.up("tabletXS")]:{[`&.${sfsButtonClasses.active} > .${SvgIcon_classes.H.root}`]:{display:"none"}}}))),SFSButton=(0,react.forwardRef)((function SFSButton(inProps,ref){const{classes:inClasses,active,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSButton"}),classes=(ownerState=>{const{active,classes}=ownerState,slots={root:["root",active&&"active"]},composedClasses=(0,composeClasses.Z)(slots,getSFSButtonUtilityClass,classes);return{...classes,...composedClasses}})({classes:inClasses,active});return(0,jsx_runtime.jsx)(SFSButtonRoot,{ref,classes,color:"tertiary",size:"32",...props})}));SFSButton.__docgenInfo={description:"",methods:[],displayName:"SFSButton"};const SFSButtonBadge=(0,styled.ZP)(Typography.Z)((({theme})=>({width:"16px",height:"16px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:theme.palette.secondary[300],[`&, & .${SvgIcon_classes.H.root}`]:{color:`${theme.palette.black.A800} !important`}}))),SFSSortingRoot=(0,styled.ZP)("div",{name:"ESSFSSorting",slot:"Root",overridesResolver:(_,styles)=>styles.root})({}),SFSSortingButton=(0,styled.ZP)(SFSButton,{name:"ESSFSSorting",slot:"Button",overridesResolver:(_,styles)=>styles.button})({}),SFSSortingButtonBadge=(0,styled.ZP)(SFSButtonBadge,{name:"ESSFSSorting",slot:"ButtonBadge",overridesResolver:(_,styles)=>styles.buttonBadge})({}),SFSSorting=(0,react.memo)((function SFSSorting(inProps){const{classes:inClasses,className,sx,options,labelButton,iconSort=(0,jsx_runtime.jsx)(IconSortOff.D,{}),iconAsc=(0,jsx_runtime.jsx)(IconSortAscending2.O,{container:!0,containerSize:"16px"}),iconDesc=(0,jsx_runtime.jsx)(IconSortDescending2.K,{container:!0,containerSize:"16px"}),...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSSorting"}),values=props.multiple?props.value:props.value?[props.value]:[],classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],button:["button"],buttonBadge:["buttonBadge"]},getSFSSortingUtilityClass,classes)})({classes:inClasses}),[menuAnchor,setMenuAnchor]=(0,react.useState)(null);return(0,jsx_runtime.jsxs)(SFSSortingRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children:[(0,jsx_runtime.jsxs)(SFSSortingButton,{active:!!values[0],className:classes.button,onClick:e=>{setMenuAnchor(e.currentTarget)},children:[(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100",children:1===values.length?options.find((o=>o.value===values[0].value))?.label:labelButton}),iconSort,1===values.length&&(0,jsx_runtime.jsx)(SFSSortingButtonBadge,{className:classes.buttonBadge,component:"div",children:"asc"===values[0].direction?iconAsc:iconDesc}),values.length>1&&(0,jsx_runtime.jsx)(SFSSortingButtonBadge,{className:classes.buttonBadge,component:"div",variant:"mini200",children:values.length})]}),(0,jsx_runtime.jsx)(SortingMenu.z,{PopoverProps:{anchorEl:menuAnchor,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!menuAnchor,transformOrigin:{vertical:"top",horizontal:"right"},onClose:()=>{setMenuAnchor(null)}},options,...props})]})}));function getSFSFiltersUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSFilters",slot)}SFSSorting.__docgenInfo={description:"",methods:[],displayName:"SFSSorting",props:{classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styles applied to the root element. */\n  root: string;\n  /** Styles applied to the open button. */\n  button: string;\n  /** Styles applied to the open button badge. */\n  buttonBadge: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styles applied to the root element."},{key:"button",value:{name:"string",required:!0},description:"Styles applied to the open button."},{key:"buttonBadge",value:{name:"string",required:!0},description:"Styles applied to the open button badge."}]}}],raw:"Partial<SFSSortingClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:"The sorting options."},labelButton:{required:!1,tsType:{name:"string"},description:"Text for the menu open button."},iconSort:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the menu button."},iconAsc:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the ascending badge."},iconDesc:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the descending badge."}}};(0,generateUtilityClasses.Z)("ESSFSFilters",["root","button","buttonBadge","drawer","header","footer","container","closeButton","resetButton"]);var Backdrop=__webpack_require__("./node_modules/@mui/material/Backdrop/Backdrop.js"),Drawer=__webpack_require__("./node_modules/@mui/material/Drawer/Drawer.js"),paperClasses=__webpack_require__("./node_modules/@mui/material/Paper/paperClasses.js"),IconFilter=__webpack_require__("./src/icons/IconFilter.tsx"),IconCloseW600=__webpack_require__("./src/icons/IconCloseW600.tsx");const SFSFiltersRoot=(0,styled.ZP)("div",{name:"ESSFSFilters",slot:"Root",overridesResolver:(_,styles)=>styles.root})((()=>({position:"relative"}))),SFSFiltersButton=(0,styled.ZP)(SFSButton,{name:"ESSFSFilters",slot:"Button",overridesResolver:(_,styles)=>styles.button})({}),SFSFiltersButtonBadge=(0,styled.ZP)(SFSButtonBadge,{name:"ESSFSFilters",slot:"ButtonBadge",overridesResolver:(_,styles)=>styles.buttonBadge})({}),SFSFiltersDrawer=(0,styled.ZP)(Drawer.ZP,{name:"ESSFSFilters",slot:"Drawer",overridesResolver:(_,styles)=>styles.drawer})((({theme})=>({[`& .${Backdrop.V.root}`]:{backgroundColor:theme.palette.overlay[200]},[`& .${paperClasses.Z.root}`]:{width:"100%",maxWidth:"337px",boxShadow:theme.palette.shadow.left[800],backgroundImage:"none",backgroundColor:theme.palette.surface[200],borderLeft:`1px solid ${theme.palette.monoA.A100}`}}))),SFSFiltersHeader=(0,styled.ZP)(Typography.Z,{name:"ESSFSFilters",slot:"Header",overridesResolver:(_,styles)=>styles.header})((({theme})=>({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px",paddingLeft:"20px",borderBottom:`1px solid ${theme.palette.monoA.A100}`,color:theme.palette.monoA.A900}))),SFSFiltersFooter=(0,styled.ZP)("div",{name:"ESSFSFilters",slot:"Footer",overridesResolver:(_,styles)=>styles.footer})((({theme})=>({borderTop:`1px solid ${theme.palette.monoA.A100}`,marginTop:"auto",padding:"16px 20px"}))),SFSFiltersContainer=(0,styled.ZP)("div",{name:"ESSFSFilters",slot:"Container",overridesResolver:(_,styles)=>styles.container})((({theme})=>({...theme.scrollbars.overlayMonoA}))),SFSFiltersCloseButton=(0,styled.ZP)(Button.Z,{name:"ESSFSFilters",slot:"CloseButton",overridesResolver:(_,styles)=>styles.closeButton})((({theme})=>({[`.${SvgIcon_classes.H.root}`]:{color:theme.palette.monoA.A500}}))),SFSFiltersResetButton=(0,styled.ZP)(Button.Z,{name:"ESSFSFilters",slot:"ResetButton",overridesResolver:(_,styles)=>styles.resetButton})({}),SFSFilters=(0,react.memo)((function SFSFilters(inProps){const{children,button,className,sx,count,onReset,labelButton,labelHeader,labelClose,labelReset,iconFilters=(0,jsx_runtime.jsx)(IconFilter.w,{}),iconClose=(0,jsx_runtime.jsx)(IconCloseW600.L,{}),...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSFilters"}),[isOpen,setOpen]=(0,react.useState)(!1),onClose=()=>{setOpen(!1)},classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],button:["button"],buttonBadge:["buttonBadge"],drawer:["drawer"],header:["header"],footer:["footer"],container:["container"],closeButton:["closeButton"],resetButton:["resetButton"]},getSFSFiltersUtilityClass,classes)})({...props});return(0,jsx_runtime.jsxs)(SFSFiltersRoot,{className:(0,clsx_m.Z)(className,classes.root),color:"tertiary",sx,...props,children:[button?button({open:isOpen,setOpen}):(0,jsx_runtime.jsxs)(SFSFiltersButton,{active:!!count,className:classes.button,onClick:()=>{setOpen(!0)},children:[(0,jsx_runtime.jsx)(Typography.Z,{component:"div",variant:"body100",children:labelButton}),iconFilters,!!count&&(0,jsx_runtime.jsx)(SFSFiltersButtonBadge,{className:classes.buttonBadge,component:"div",variant:"mini200",children:count})]}),(0,jsx_runtime.jsxs)(SFSFiltersDrawer,{anchor:"right",className:classes.drawer,open:isOpen,onClose,children:[(0,jsx_runtime.jsxs)(SFSFiltersHeader,{className:classes.header,variant:"h5",children:[labelHeader,(0,jsx_runtime.jsx)(SFSFiltersCloseButton,{"aria-label":labelClose,className:classes.closeButton,color:"tertiary",size:"40",onClick:onClose,children:iconClose})]}),(0,jsx_runtime.jsx)(SFSFiltersContainer,{className:classes.container,children}),count?(0,jsx_runtime.jsx)(SFSFiltersFooter,{className:classes.footer,children:(0,jsx_runtime.jsx)(SFSFiltersResetButton,{fullWidth:!0,className:classes.resetButton,color:"error",size:"48",variant:"outlined",onClick:onReset,children:labelReset})}):null]})]})}));function getSFSFiltersGroupUtilityClass(slot){return(0,generateUtilityClass.Z)("ESSFSFiltersGroup",slot)}SFSFilters.__docgenInfo={description:"",methods:[],displayName:"SFSFilters",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},button:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }",signature:{properties:[{key:"open",value:{name:"boolean",required:!0}},{key:"setOpen",value:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Function to render the custom button element."},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styled applied to the root element. */\n  root: string;\n  /** Styles applied to the open button. */\n  button: string;\n  /** Styles applied to the open button badge. */\n  buttonBadge: string;\n  /** Styles applied to the root drawer element. */\n  drawer: string;\n  /** Styles applied to the header element. */\n  header: string;\n  /** Styles applied to the footer element. */\n  footer: string;\n  /** Styles applied to the container element. */\n  container: string;\n  /** Styles applied to the close button. */\n  closeButton: string;\n  /** Styles applied to the reset button. */\n  resetButton: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styled applied to the root element."},{key:"button",value:{name:"string",required:!0},description:"Styles applied to the open button."},{key:"buttonBadge",value:{name:"string",required:!0},description:"Styles applied to the open button badge."},{key:"drawer",value:{name:"string",required:!0},description:"Styles applied to the root drawer element."},{key:"header",value:{name:"string",required:!0},description:"Styles applied to the header element."},{key:"footer",value:{name:"string",required:!0},description:"Styles applied to the footer element."},{key:"container",value:{name:"string",required:!0},description:"Styles applied to the container element."},{key:"closeButton",value:{name:"string",required:!0},description:"Styles applied to the close button."},{key:"resetButton",value:{name:"string",required:!0},description:"Styles applied to the reset button."}]}}],raw:"Partial<SFSFiltersClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},count:{required:!1,tsType:{name:"number"},description:"Count the active filters."},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when user clicks reset button."},labelButton:{required:!1,tsType:{name:"string"},description:"Text for the menu button."},labelHeader:{required:!1,tsType:{name:"string"},description:"Text for the header label."},labelClose:{required:!1,tsType:{name:"string"},description:"Text for the close button aria-label."},labelReset:{required:!1,tsType:{name:"string"},description:"Text for the reset button."},iconFilters:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the menu button."},iconClose:{required:!1,tsType:{name:"ReactNode"},description:"Icon for the close button."}}};(0,generateUtilityClasses.Z)("ESSFSFiltersGroup",["root","title"]);var formLabelClasses=__webpack_require__("./node_modules/@mui/material/FormLabel/formLabelClasses.js"),inputLabelClasses=__webpack_require__("./node_modules/@mui/material/InputLabel/inputLabelClasses.js"),outlinedInputClasses=__webpack_require__("./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js");const SFSFiltersGroupRoot=(0,styled.ZP)("div",{name:"ESSFSFiltersGroup",slot:"Root",overridesResolver:(_,styles)=>styles.root})((({theme})=>({display:"flex",flexDirection:"column",gap:"16px",padding:"20px",color:theme.palette.monoA.A900,"&:not(:last-of-type)":{paddingBottom:0},[`& .${outlinedInputClasses.Z.input}, & .${formLabelClasses.Z.root}`]:{...theme.typography.body100},[`& .${inputLabelClasses.Z.outlined}.${inputLabelClasses.Z.outlined}`]:{transform:"translate(12px, 14px) scale(1)",[`&.${inputLabelClasses.Z.shrink}`]:{transform:"translate(12px, -8.5px) scale(0.857)"}}}))),SFSFiltersGroupTitle=(0,styled.ZP)(Typography.Z,{name:"ESSFSFiltersGroup",slot:"Title",overridesResolver:(_,styles)=>styles.title})((()=>({}))),SFSFiltersGroup=inProps=>{const{className,children,sx,title,...props}=(0,useThemeProps.Z)({props:inProps,name:"ESSFSFiltersGroup"}),classes=(ownerState=>{const{classes}=ownerState;return(0,composeClasses.Z)({root:["root"],title:["title"]},getSFSFiltersGroupUtilityClass,classes)})({...props});return(0,jsx_runtime.jsxs)(SFSFiltersGroupRoot,{className:(0,clsx_m.Z)(classes.root,className),sx,children:[!!title&&(0,jsx_runtime.jsx)(SFSFiltersGroupTitle,{className:classes.title,component:"div",variant:"body200Medium",children:title}),children]})};SFSFiltersGroup.__docgenInfo={description:"",methods:[],displayName:"SFSFiltersGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},classes:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:"{\n  /** Styled applied to the root element. */\n  root: string;\n  /** Styled applied to the title element. */\n  title: string;\n}",signature:{properties:[{key:"root",value:{name:"string",required:!0},description:"Styled applied to the root element."},{key:"title",value:{name:"string",required:!0},description:"Styled applied to the title element."}]}}],raw:"Partial<SFSFiltersGroupClasses>"},description:"Override or extend the styles applied to the component."},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:"The system prop that allows defining system overrides as well as additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Class applied to the root element."},title:{required:!1,tsType:{name:"ReactNode"},description:"The title content."}}};const sortingOptionsRu=[{label:"Кол-во квартир",value:"byCount"},{label:"Площадь",value:"bySquare"},{label:"Срок сдачи",value:"byRent"},{label:"Старт продаж",value:"bySalesStart"},{label:"Дата создания",value:"byCreationDate"},{label:"Новизна",value:"byNewest"}],sortingOptionsEn=[{label:"Number of apartments",value:"byCount"},{label:"Square",value:"bySquare"},{label:"Deadline",value:"byRent"},{label:"Start of sales",value:"bySalesStart"},{label:"Date of creation",value:"byCreationDate"},{label:"Novelty",value:"byNewest"}],SFS_stories={tags:["autodocs"],component:SFS,parameters:{references:["SFS","SFSFilters","SFSFiltersGroup","SFSRow","SFSSearch","SFSSorting"]},argTypes:{SFSSortingMultiple:{name:"SFSSorting.multiple",description:"If `true`, multiple options can be selected.",control:{type:"boolean"}}}},Demo={render:function Render(args,{globals:{locale}}){const[search,setSearch]=(0,react.useState)(""),[value,setValue]=(0,react.useState)(null),[values,setValues]=(0,react.useState)([]),[filters,setFilters]=(0,react.useState)({1:"",2:"",3:"",4:"",5:"",6:""}),onFiltersChange=e=>{setFilters({...filters,[e.target.name]:e.target.value})};return(0,jsx_runtime.jsx)(SFS,{children:(0,jsx_runtime.jsxs)(SFSRow,{children:[(0,jsx_runtime.jsx)(SFSSearch,{value:search,onChange:e=>{setSearch(e.currentTarget.value)},onClear:search?()=>{setSearch("")}:void 0}),!!search&&(0,jsx_runtime.jsx)(Divider.Z,{flexItem:!0,orientation:"vertical",sx:{color:"monoA.A200",margin:"8px 0"}}),args.SFSSortingMultiple?(0,jsx_runtime.jsx)(SFSSorting,{multiple:!0,options:"ru"===locale?sortingOptionsRu:sortingOptionsEn,value:values,onChange:setValues},"1"):(0,jsx_runtime.jsx)(SFSSorting,{options:"ru"===locale?sortingOptionsRu:sortingOptionsEn,value,onChange:setValue},"2"),(0,jsx_runtime.jsx)(Divider.Z,{orientation:"vertical"}),(0,jsx_runtime.jsxs)(SFSFilters,{count:Object.values(filters).filter(Boolean).length,onReset:()=>setFilters({1:"",2:"",3:"",4:"",5:"",6:""}),children:[(0,jsx_runtime.jsxs)(SFSFiltersGroup,{title:"ru"===locale?"Основное":"General",children:[(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Ответственный":"Responsible",name:"1",size:"48",value:filters[1],onChange:onFiltersChange}),(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Создатель":"Author",name:"2",size:"48",value:filters[2],onChange:onFiltersChange}),(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Статус задачи":"Task status",name:"3",size:"48",value:filters[3],onChange:onFiltersChange}),(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Этап выполнения":"Execution stage",name:"4",size:"48",value:filters[4],onChange:onFiltersChange})]}),(0,jsx_runtime.jsxs)(SFSFiltersGroup,{title:"ru"===locale?"Другое":"Other",children:[(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Срок выполнения":"Deadline",name:"5",size:"48",value:filters[5],onChange:onFiltersChange}),(0,jsx_runtime.jsx)(TextField.Z,{label:"ru"===locale?"Закрытие":"Closure",name:"6",size:"48",value:filters[6],onChange:onFiltersChange})]})]})]})})}};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{\n  render: function Render(args, {\n    globals: {\n      locale\n    }\n  }) {\n    const [search, setSearch] = useState('');\n    const [value, setValue] = useState<SortingMenuValue | null>(null);\n    const [values, setValues] = useState<SortingMenuValue[]>([]);\n    const [filters, setFilters] = useState<Record<string, any>>({\n      '1': '',\n      '2': '',\n      '3': '',\n      '4': '',\n      '5': '',\n      '6': ''\n    });\n    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n      setSearch(e.currentTarget.value);\n    };\n    const onClearSearch = () => {\n      setSearch('');\n    };\n    const onFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n      setFilters({\n        ...filters,\n        [e.target.name]: e.target.value\n      });\n    };\n    return <SFS>\n        <SFSRow>\n          <SFSSearch value={search} onChange={onSearchChange} onClear={search ? onClearSearch : undefined} />\n          {!!search && <Divider flexItem orientation=\"vertical\" sx={{\n          color: 'monoA.A200',\n          margin: '8px 0'\n        }} />}\n          {args.SFSSortingMultiple ? <SFSSorting key=\"1\" multiple options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn} value={values} onChange={setValues} /> : <SFSSorting key=\"2\" options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn} value={value} onChange={setValue} />}\n          <Divider orientation=\"vertical\" />\n          <SFSFilters count={Object.values(filters).filter(Boolean).length} onReset={() => setFilters({\n          '1': '',\n          '2': '',\n          '3': '',\n          '4': '',\n          '5': '',\n          '6': ''\n        })}>\n            <SFSFiltersGroup title={locale === 'ru' ? 'Основное' : 'General'}>\n              <TextField label={locale === 'ru' ? 'Ответственный' : 'Responsible'} name=\"1\" size=\"48\" value={filters['1']} onChange={onFiltersChange} />\n              <TextField label={locale === 'ru' ? 'Создатель' : 'Author'} name=\"2\" size=\"48\" value={filters['2']} onChange={onFiltersChange} />\n              <TextField label={locale === 'ru' ? 'Статус задачи' : 'Task status'} name=\"3\" size=\"48\" value={filters['3']} onChange={onFiltersChange} />\n              <TextField label={locale === 'ru' ? 'Этап выполнения' : 'Execution stage'} name=\"4\" size=\"48\" value={filters['4']} onChange={onFiltersChange} />\n            </SFSFiltersGroup>\n            <SFSFiltersGroup title={locale === 'ru' ? 'Другое' : 'Other'}>\n              <TextField label={locale === 'ru' ? 'Срок выполнения' : 'Deadline'} name=\"5\" size=\"48\" value={filters['5']} onChange={onFiltersChange} />\n              <TextField label={locale === 'ru' ? 'Закрытие' : 'Closure'} name=\"6\" size=\"48\" value={filters['6']} onChange={onFiltersChange} />\n            </SFSFiltersGroup>\n          </SFSFilters>\n        </SFSRow>\n      </SFS>;\n  }\n}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);