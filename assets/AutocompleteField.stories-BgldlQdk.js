import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-Wm5baAvf.js";import{c as N}from"./clsx.m-C7bORDfW.js";import{u as H}from"./DefaultPropsProvider-BaGbio7E.js";import{u as Ue}from"./useControlled-CibYmksV.js";import{u as Fe}from"./useId-BsPUOvOw.js";import{F as _e}from"./FormControl-C3d8ZCOJ.js";import{O as Re,I as Le,t as Ie}from"./TextField-BE5m1Jj6.js";import{u as Ne}from"./useFormControl-B4OjCVsv.js";import{u as we}from"./useForkRef-EzStQRfh.js";import{u as ie}from"./useEnhancedEffect-CGMGWzXh.js";import{A as Ee}from"./AutocompleteMenu-CUhL6p41.js";import{F as De}from"./FormHelperText-DKtzwqKg.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./generateUtilityClasses-CoM_PQv9.js";import"./DefaultPropsProvider-BZAQgGqI.js";import"./styled-BHLkoNCB.js";import"./defaultTheme-oBDS3u9v.js";import"./identifier-BWvkVwSG.js";import"./index-pH_Peplc.js";import"./composeClasses-CAXbtk_0.js";import"./Modal-exZMVhKV.js";import"./memoTheme-Khho5aaB.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-kgmPxU2v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-BIU5YWIM.js";import"./Fade-C3LuwS6k.js";import"./index-COIHyg7t.js";import"./index-DdXvKv-Q.js";import"./useTheme-LLMgoSjJ.js";import"./FocusTrap-pQd8fEAo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BL0FDXhk.js";import"./extendSxProp-VCSIJ4BA.js";import"./debounce-Be36O1Ab.js";import"./Menu-D1WsZbsN.js";import"./index-CkcRf-8q.js";import"./useSlotProps-Bsen2STc.js";import"./Popover-D33wSAFU.js";import"./useTimeout-CqYeTkks.js";import"./MenuList-CymzI1Pn.js";import"./useControlled-uYOZv1Nc.js";import"./IconMagnify2LineW400-uyez6s0b.js";import"./SvgIcon-Bb8ef9Tm.js";import"./IconCloseLineW350-DBtToHzq.js";import"./useIntersectionObserver-CywOKxjJ.js";import"./useLatest-C1UtP6al.js";import"./TooltipEllipsis-B_vN2fx9.js";import"./useResizeObserver-C6sKC9YN.js";import"./Tooltip-Bp1S5HE5.js";import"./useEvent-BPmsl14G.js";import"./useForkRef-CGhsnMYO.js";import"./ClickAwayListener-Dmr8mkvz.js";import"./InputAdornment-DbV9zmm4.js";import"./Button-BRu9apcn.js";import"./ButtonBase-BhCJPokL.js";import"./SpinnerRing-DnUV1UMN.js";import"./MenuItem-DrDY2G9B.js";import"./Checkbox-_4kod7v1.js";import"./SwitchBase-CCu_Ebw1.js";import"./Divider-BKuyIAQ4.js";const je=t=>{const e=n.useRef(t);return n.useEffect(()=>(e.current=t,()=>{e.current=void 0})),e.current},te=t=>{const{className:e,style:l,children:c}=H({props:t,name:"ESAutocompleteMenuFooter"});return r.jsx("div",{className:N(e,"es-autocomplete-menu-footer","caption"),style:l,children:c})};try{te.displayName="AutocompleteMenuFooter",te.__docgenInfo={description:"",displayName:"AutocompleteMenuFooter",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ne=t=>{const{className:e,style:l,children:c}=H({props:t,name:"ESAutocompleteMenuHeader"});return r.jsx("div",{className:N(e,"es-autocomplete-menu-header","caption"),style:l,children:c})};try{ne.displayName="AutocompleteMenuHeader",ne.__docgenInfo={description:"",displayName:"AutocompleteMenuHeader",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Be=Re,oe=t=>{const{className:e,style:l,id:c,inputRef:h,label:b,name:m,placeholder:v,"aria-describedby":p,startAdornment:f,endAdornment:U,options:C,getOptionValue:S,getOptionLabel:q,getOptionDisabled:T,groupBy:V,MenuGroupProps:P,loading:g,inlineSearch:a,header:$,footer:w,MenuProps:A,SearchProps:d,open:E,onOpen:M,onClose:y,onLoadMore:F,onBlur:D,...s}=H({props:t,name:"ESAutocomplete"}),o=Ne();if(!o)throw new Error("No provider for FormControlContext.");const _=n.useRef(null),K=n.useRef(null),R=n.useRef(null),Ce=we(R,h),J=n.useRef(null),Q=n.useRef(!1),[X,Y]=Ue(!1,E),[Oe,qe]=n.useState(0),le=je(o.focused),j=n.useMemo(()=>s.multiple?s.value:s.value?[s.value]:[],[s.multiple,s.value]),Z=n.useMemo(()=>s.getDisplayValue?(s.multiple,s.getDisplayValue(s.value)):j.map(i=>q(i)).join(", "),[s.value,j]);ie(()=>{j.length?o.onFilled():o.onEmpty()},[j,o.onEmpty,o.onFilled,o.filled]),n.useEffect(()=>{D&&!o.focused&&le&&(Q.current?Q.current=!1:D({target:{name:m}}))},[o.focused,le]),ie(()=>{o.setAdornedStart(!!f)},[!!f]);const ee=n.useCallback(i=>{_.current&&(qe(_.current.clientWidth),Y(!0),M==null||M(),i||setTimeout(()=>{if(K.current){const u=K.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');u&&u.focus()}},0))},[]),Pe=n.useCallback((i,u)=>{var L;u==="escapeKeyDown"&&(Q.current=!0,requestAnimationFrame(()=>{R.current&&R.current.focus()})),!(a&&u==="clickAway"&&((L=_.current)!=null&&L.contains(i.target)))&&(Y(!1),y==null||y())},[a]),Te=i=>{s.onChange&&s.onChange(i)},Ae=i=>{(a?["ArrowUp","ArrowDown","Enter"]:[" ","ArrowUp","ArrowDown","Enter"]).indexOf(i.key)!==-1&&(i.preventDefault(),ee()),["Escape","Tab"].indexOf(i.key)!==-1&&X&&(i.stopPropagation(),Y(!1),y==null||y())},Me=i=>{var u,L;o.disabled||i.button!==0||((L=(u=J.current)==null?void 0:u.setTrapFocusEnabled)==null||L.call(u,!1),requestAnimationFrame(()=>{var B,ae;R.current&&R.current.focus(),(ae=(B=J.current)==null?void 0:B.setTrapFocusEnabled)==null||ae.call(B,!0)}),ee(!!a))},se=o.filled||o.focused||!!f||!!X;return r.jsxs(r.Fragment,{children:[r.jsx(Be,{ref:_,autoComplete:a?"off":void 0,autoFocus:a?o.focused:!1,className:N(e,"es-autocomplete"),disabled:o.disabled,endAdornment:U,error:o.error,fullWidth:s.fullWidth,id:c,inputComponent:a&&o.focused?"input":"div",inputProps:{children:a&&o.focused?null:Z?r.jsx("div",{className:"es-autocomplete__display-value",children:Z}):(se||!b)&&r.jsx("div",{className:"es-autocomplete__input-placeholder",children:v}),className:"es-autocomplete__input",role:a?"input":"button",tabIndex:o.disabled?-1:0,onBlur:i=>{var u;(u=o.onBlur)==null||u.call(o,i)},onFocus:i=>{var u;(u=o.onFocus)==null||u.call(o,i)},onKeyDown:Ae,"aria-describedby":p,...s.inputProps},inputRef:Ce,label:b,name:m,notched:se,placeholder:a?v:void 0,required:o.required,startAdornment:f,style:l,value:a&&o.focused?d==null?void 0:d.value:null,onChange:a&&o.focused?i=>{var u;(u=d==null?void 0:d.onChange)==null||u.call(d,i),ee(!0)}:void 0,onMouseDown:Me,children:a?null:Z}),r.jsx(Ee,{value:s.value,multiple:s.multiple,disableRestoreFocus:!0,MenuGroupProps:P,SearchProps:d,actions:J,anchorEl:_.current,className:N("es-autocomplete__menu",a&&"es-autocomplete__menu--inline-search"),disableAutoFocus:!!a,disableScrollLock:!!a,footer:w,getOptionDisabled:T,getOptionLabel:q,getOptionValue:S,groupBy:V,header:$,inlineSearch:a,loading:g,open:!!X,options:C,paperRef:K,width:Oe,onChange:Te,onClose:Pe,onLoadMore:F,...A})]})};try{oe.displayName="Autocomplete",oe.__docgenInfo={description:"The autocomplete is used to choose an item from a collection of options.",displayName:"Autocomplete",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},inlineSearch:{defaultValue:null,description:"If true, it is possible to enter a search string in the input itself.",name:"inlineSearch",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If true, the popper is opened.",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"Callback fired when the menu requests to be opened.",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Callback fired when the menu requests to be closed.",name:"onClose",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"Callback fired when the input loses focus.",name:"onBlur",required:!1,type:{name:"((event: { target: { name?: string; }; }) => void)"}},MenuProps:{defaultValue:null,description:"Props applied to the menu component.",name:"MenuProps",required:!1,type:{name:'Partial<Omit<AutocompleteMenuProps<T>, "onChange" | "value" | "multiple" | "options" | "getOptionLabel" | "getOptionValue" | "getOptionDisabled" | "groupBy" | "getDisplayValue" | "actions">>'}},SearchProps:{defaultValue:null,description:"Props applied to the search field component. If present, shows the component.",name:"SearchProps",required:!1,type:{name:"Partial<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps>"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T | T[] | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T | null) => void) | ((value: T[]) => void)"}},getDisplayValue:{defaultValue:null,description:"",name:"getDisplayValue",required:!1,type:{name:"((value: T | null) => ReactNode) | ((value: T[]) => ReactNode)"}},footer:{defaultValue:null,description:"Children content for the menu footer.",name:"footer",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Children content for the menu header.",name:"header",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"If true, the component is in a loading state. This shows the labelLoading in place of options (only if options are empty).",name:"loading",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of the options.",name:"options",required:!0,type:{name:"T[]"}},getOptionLabel:{defaultValue:null,description:"Used to determine the display value for a given option. It's used to fill the input and the list box options.",name:"getOptionLabel",required:!0,type:{name:"(option: T) => ReactNode"}},getOptionValue:{defaultValue:null,description:"Used to determine the value for a given option. It's used for options comparison.",name:"getOptionValue",required:!0,type:{name:"(option: T) => string | number"}},getOptionDisabled:{defaultValue:null,description:"Used to determine the disabled state for a given option.",name:"getOptionDisabled",required:!1,type:{name:"((option: T) => boolean)"}},groupBy:{defaultValue:null,description:"If provided, the options will be grouped under the returned value.",name:"groupBy",required:!1,type:{name:"((option: T) => string | number)"}},MenuGroupProps:{defaultValue:null,description:"Props applied to the MenuGroup components.",name:"MenuGroupProps",required:!1,type:{name:"Partial<MenuGroupProps>"}},onLoadMore:{defaultValue:null,description:"Callback fired when the menu list is scrolled to the end.",name:"onLoadMore",required:!1,type:{name:"(() => void)"}}}}}catch{}const x=t=>{const{className:e,style:l,autoFocus:c,disabled:h,error:b,fullWidth:m,id:v,label:p,required:f,open:U,closeAfterSelect:C,helperText:S,size:q,InputProps:T,InputLabelProps:V,FormHelperTextProps:P,MenuGroupProps:g,onChange:a,...$}=H({props:t,name:"ESAutocompleteField"}),[w,A]=Ue(!1,U),d=Fe(v),E=S&&d?`${d}-helper-text`:void 0,M=p&&d?`${d}-label`:void 0,{onClose:y,onOpen:F,...D}=T||{},s=o=>{a&&a(o),C&&(y==null||y(),A(!1))};return r.jsxs(_e,{className:N("es-autocomplete-field",Ie.root,e),disabled:h,error:b,focused:w||void 0,fullWidth:m,required:f,size:q,style:l,children:[p!==null&&p!==""&&r.jsx(Le,{htmlFor:d,id:M,required:f,...V,children:p}),r.jsx(oe,{MenuGroupProps:g,"aria-describedby":E,autoFocus:c,disabled:h,fullWidth:m,id:d,label:p,open:w,required:f,onChange:s,onClose:()=>{y==null||y(),A(!1)},onOpen:()=>{F==null||F(),A(!0)},...$,...D}),!!S&&r.jsx(De,{id:E,...P,children:S})]})};try{x.displayName="AutocompleteField",x.__docgenInfo={description:"The autocomplete is used to choose an item from a collection of options.",displayName:"AutocompleteField",props:{className:{defaultValue:null,description:"Class applied to the root element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Style applied to the root element.",name:"style",required:!1,type:{name:"CSSProperties"}},closeAfterSelect:{defaultValue:null,description:"If true, the popover will close after menu item is selected.",name:"closeAfterSelect",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},InputProps:{defaultValue:null,description:"Props applied to the `Autocomplete` element.",name:"InputProps",required:!1,type:{name:'Partial<Omit<AutocompleteProps<T>, "onChange" | "value" | "multiple" | "options" | "getOptionLabel" | "getOptionValue" | "getOptionDisabled" | "groupBy" | "getDisplayValue">>'}},InputLabelProps:{defaultValue:null,description:"Props applied to the `InputLabel` element.",name:"InputLabelProps",required:!1,type:{name:'InputLabelProps<"label", {}>'}},FormHelperTextProps:{defaultValue:null,description:"Props applied to the `FormHelperText` element.",name:"FormHelperTextProps",required:!1,type:{name:'FormHelperTextProps<"p", {}>'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T | T[] | null"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T | null) => void) | ((value: T[]) => void)"}},getDisplayValue:{defaultValue:null,description:"",name:"getDisplayValue",required:!1,type:{name:"((value: T | null) => ReactNode) | ((value: T[]) => ReactNode)"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If true, the popper is opened.",name:"open",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"Children content for the menu footer.",name:"footer",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Children content for the menu header.",name:"header",required:!1,type:{name:"ReactNode"}},onBlur:{defaultValue:null,description:"Callback fired when the input loses focus.",name:"onBlur",required:!1,type:{name:"((event: { target: { name?: string; }; }) => void)"}},loading:{defaultValue:null,description:"If true, the component is in a loading state. This shows the labelLoading in place of options (only if options are empty).",name:"loading",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Array of the options.",name:"options",required:!0,type:{name:"T[]"}},getOptionLabel:{defaultValue:null,description:"Used to determine the display value for a given option. It's used to fill the input and the list box options.",name:"getOptionLabel",required:!0,type:{name:"(option: T) => ReactNode"}},getOptionValue:{defaultValue:null,description:"Used to determine the value for a given option. It's used for options comparison.",name:"getOptionValue",required:!0,type:{name:"(option: T) => string | number"}},getOptionDisabled:{defaultValue:null,description:"Used to determine the disabled state for a given option.",name:"getOptionDisabled",required:!1,type:{name:"((option: T) => boolean)"}},groupBy:{defaultValue:null,description:"If provided, the options will be grouped under the returned value.",name:"groupBy",required:!1,type:{name:"((option: T) => string | number)"}},MenuGroupProps:{defaultValue:null,description:"Props applied to the MenuGroup components.",name:"MenuGroupProps",required:!1,type:{name:"Partial<MenuGroupProps>"}},inlineSearch:{defaultValue:null,description:"If true, it is possible to enter a search string in the input itself.",name:"inlineSearch",required:!1,type:{name:"boolean"}}}}}catch{}const O={en:[],ru:[]};for(let t=0;t<25;t++)O.en.push({id:t+1,name:`John Doe ${t+1}`}),O.ru.push({id:t+1,name:`Иванов Иван ${t+1}`});const z=t=>t.id,re=t=>t.name,ke=t=>r.jsx("i",{children:t.name}),Ge=t=>r.jsx("span",{children:t.map((e,l)=>r.jsxs(r.Fragment,{children:[r.jsx("i",{children:e.name},e.id),l<t.length-1&&", "]}))}),on={tags:["autodocs"],component:x,parameters:{references:["Autocomplete","AutocompleteField","MenuGroup"]},argTypes:{MenuGroupPaddingBottom:{name:"paddingBottom",description:"The bottom padding of the `MenuGroup` component.",table:{category:"MenuGroup",defaultValue:{summary:"l"}},options:["s","m","l"],control:{type:"select"}},MenuGroupSticky:{name:"sticky",description:"The sticky of the `MenuGroup` component.",table:{category:"MenuGroup"},control:{type:"boolean"}},multiple:{control:{type:"boolean"}},inlineSearch:{control:{type:"boolean"}},closeAfterSelect:{control:{type:"boolean"}},header:{control:{type:"text"}},footer:{control:{type:"text"}},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},error:{control:{type:"boolean"}},size:{options:["56","48","40","32"],control:{type:"select"}},helperText:{control:{type:"text"}},placeholder:{control:{type:"text"}},InputProps:{table:{disable:!0}},InputLabelProps:{table:{disable:!0}},FormHelperTextProps:{table:{disable:!0}},value:{table:{disable:!0}},getDisplayValue:{table:{disable:!0}},getOptionDisabled:{table:{disable:!0}},getOptionLabel:{table:{disable:!0}},getOptionValue:{table:{disable:!0}},loading:{table:{disable:!0}},options:{table:{disable:!0}}}},k={render:function(e,{globals:{locale:l}}){const[c,h]=n.useState([]),[b,m]=n.useState(!1),[v,p]=n.useState(null),[f,U]=n.useState([]),[C,S]=n.useState(""),q=g=>{p(g),e.inlineSearch&&g&&S(g.name)},T=g=>{U(g)};n.useEffect(()=>{h(O[l]),S(""),m(!1)},[l]);const V=n.useRef(null);n.useEffect(()=>(m(!0),V.current=setTimeout(()=>{h(O[l].filter(g=>g.name.toLowerCase().includes(C.toLowerCase()))),m(!1)},1e3),()=>{V.current&&(clearTimeout(V.current),V.current=null)}),[C]);const P={closeAfterSelect:e.closeAfterSelect,disabled:e.disabled,error:e.error,header:e.header&&r.jsx(ne,{children:e.header}),footer:e.footer&&r.jsx(te,{children:e.footer}),fullWidth:!0,inlineSearch:e.inlineSearch,getOptionLabel:re,getOptionValue:z,helperText:e.helperText,loading:b,options:c,placeholder:e.placeholder,required:e.required,size:e.size,InputProps:{SearchProps:{value:C,onChange:g=>S(g.target.value)}},onBlur:e.onBlur};return r.jsx("div",{style:{maxWidth:"500px"},children:e.multiple?r.jsx(x,{multiple:!0,label:l==="en"?"Users":"Пользователи",value:f,onChange:T,...P}):r.jsx(x,{label:l==="en"?"Users":"Пользователи",value:v,onChange:q,...P})})}},I={render:function(e,{globals:{locale:l}}){const[c,h]=n.useState([]),[b,m]=n.useState([]),v=p=>{m(p)};return n.useEffect(()=>{h(O[l])},[l]),r.jsx("div",{style:{maxWidth:"500px"},children:r.jsx(x,{fullWidth:!0,multiple:!0,MenuGroupProps:{paddingBottom:e.MenuGroupPaddingBottom,sticky:e.MenuGroupSticky},getOptionLabel:re,getOptionValue:z,groupBy:p=>{const f=Math.floor(p.id/10);return`${f*10} - ${(f+1)*10-1}`},label:l==="en"?"Users":"Пользователи",options:c,value:b,onChange:v})})}},G={render:function(e,{globals:{locale:l}}){const[c,h]=n.useState([]),[b,m]=n.useState([]),v=p=>{m(p)};return n.useEffect(()=>{h(O[l])},[l]),r.jsx("div",{style:{maxWidth:"500px"},children:r.jsx(x,{fullWidth:!0,multiple:!0,getDisplayValue:Ge,getOptionLabel:ke,getOptionValue:z,label:l==="en"?"Users":"Пользователи",options:c,value:b,onChange:v})})}},W={render:function(e,{globals:{locale:l}}){const[c,h]=n.useState(!1),[b,m]=n.useState([]),[v,p]=n.useState([]),f=U=>{p(U)};return n.useEffect(()=>{m(O[l])},[l]),r.jsx("div",{style:{maxWidth:"500px"},children:r.jsx(x,{fullWidth:!0,multiple:!0,InputProps:{onOpen:()=>h(!0),onClose:()=>h(!1)},getOptionLabel:re,getOptionValue:z,label:l==="en"?"Users":"Пользователи",open:c,options:b,value:v,onChange:f})})}};var ue,pe,de;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: function Render(args: Args, {
    globals: {
      locale
    }
  }: StoryContext<unknown>) {
    const [options, setOptions] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const onChange = (user: User | null) => {
      setUser(user);
      if (args.inlineSearch && user) {
        setSearch(user.name);
      }
    };
    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };
    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
      setSearch('');
      setLoading(false);
    }, [locale]);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
      setLoading(true);
      timeout.current = setTimeout(() => {
        setOptions(USERS[locale as 'en' | 'ru'].filter(e => e.name.toLowerCase().includes(search.toLowerCase())));
        setLoading(false);
      }, 1000);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
      };
    }, [search]);
    const props: Pick<AutocompleteFieldProps<any>, 'closeAfterSelect' | 'disabled' | 'error' | 'inlineSearch' | 'header' | 'footer' | 'fullWidth' | 'getOptionLabel' | 'getOptionValue' | 'helperText' | 'loading' | 'options' | 'placeholder' | 'required' | 'size' | 'InputProps' | 'onBlur'> = {
      closeAfterSelect: args.closeAfterSelect,
      disabled: args.disabled,
      error: args.error,
      header: args.header && <AutocompleteMenuHeader>{args.header}</AutocompleteMenuHeader>,
      footer: args.footer && <AutocompleteMenuFooter>{args.footer}</AutocompleteMenuFooter>,
      fullWidth: true,
      inlineSearch: args.inlineSearch,
      getOptionLabel: getUserLabel,
      getOptionValue: getUserValue,
      helperText: args.helperText,
      loading,
      options,
      placeholder: args.placeholder,
      required: args.required,
      size: args.size,
      InputProps: {
        SearchProps: {
          value: search,
          onChange: e => setSearch(e.target.value)
        }
      },
      onBlur: args.onBlur
    };
    return <div style={{
      maxWidth: '500px'
    }}>
        {args.multiple ? <AutocompleteField<User> multiple label={locale === 'en' ? 'Users' : 'Пользователи'} value={users} onChange={onChangeUsers} {...props} /> : <AutocompleteField label={locale === 'en' ? 'Users' : 'Пользователи'} value={user} onChange={onChange} {...props} />}
      </div>;
  }
}`,...(de=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,me,fe,he,ge;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: function Render(args: Args, {
    globals: {
      locale
    }
  }: StoryContext<unknown>) {
    const [options, setOptions] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };
    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
    }, [locale]);
    return <div style={{
      maxWidth: '500px'
    }}>
        <AutocompleteField<User> fullWidth multiple MenuGroupProps={{
        paddingBottom: args.MenuGroupPaddingBottom,
        sticky: args.MenuGroupSticky
      }} getOptionLabel={getUserLabel} getOptionValue={getUserValue} groupBy={user => {
        const base = Math.floor(user.id / 10);
        return \`\${base * 10} - \${(base + 1) * 10 - 1}\`;
      }} label={locale === 'en' ? 'Users' : 'Пользователи'} options={options} value={users} onChange={onChangeUsers} />
      </div>;
  }
}`,...(fe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:fe.source},description:{story:"We can group the options with the `groupBy` prop. Make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.",...(ge=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var ye,be,ve;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: function Render(_args: Args, {
    globals: {
      locale
    }
  }: StoryContext<unknown>) {
    const [options, setOptions] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };
    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
    }, [locale]);
    return <div style={{
      maxWidth: '500px'
    }}>
        <AutocompleteField<User> fullWidth multiple getDisplayValue={getUsersDisplayValue} getOptionLabel={getUserLabelReactNode} getOptionValue={getUserValue} label={locale === 'en' ? 'Users' : 'Пользователи'} options={options} value={users} onChange={onChangeUsers} />
      </div>;
  }
}`,...(ve=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Se,Ve,xe;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: function Render(_args: Args, {
    globals: {
      locale
    }
  }: StoryContext<unknown>) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const onChangeUsers = (users: User[]) => {
      setUsers(users);
    };
    useEffect(() => {
      setOptions(USERS[locale as 'en' | 'ru']);
    }, [locale]);
    return <div style={{
      maxWidth: '500px'
    }}>
        <AutocompleteField<User> fullWidth multiple InputProps={{
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false)
      }} getOptionLabel={getUserLabel} getOptionValue={getUserValue} label={locale === 'en' ? 'Users' : 'Пользователи'} open={open} options={options} value={users} onChange={onChangeUsers} />
      </div>;
  }
}`,...(xe=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:xe.source}}};const rn=["Demo","Groups","Customization","Controlled"];export{W as Controlled,G as Customization,k as Demo,I as Groups,rn as __namedExportsOrder,on as default};
