import{a as A,_ as ee,b as me}from"./useThemeProps-DJft-tfL.js";import{r as a,e as W}from"./index-DIDRz_s2.js";import{c as E}from"./clsx-B-dksMZM.js";import{s as te,k as ne,g as je,a as Ie,c as Ue}from"./generateUtilityClasses-D4qQEpRV.js";import{j as N}from"./jsx-runtime-BoZ7yaty.js";import{t as m}from"./touchRippleClasses-Cax1NGQM.js";import{u as _e}from"./useTimeout-CS-EPZZq.js";import{_ as ze,T as ue}from"./TransitionGroupContext-DaV7NuBA.js";import{u as ce}from"./useForkRef-B4JCUkpP.js";import{u as Oe}from"./useIsFocusVisible-moa6TI2l.js";import{u as H}from"./useEventCallback-B5h_k30D.js";function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ae(e,r){e=e||{},r=r||{};function s(d){return d in r?r[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function F(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Xe(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:F(s,"appear",e),enter:F(s,"enter",e),exit:F(s,"exit",e)})})}function Ye(e,r,s){var l=oe(e.children),n=Ae(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},He={component:"div",childFactory:function(r){return r}},ie=function(e){ze(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ke(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=He;function Ge(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),T={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,d&&s.childLeaving,l&&s.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:T,children:N.jsx("span",{className:h})})}const qe=["center","classes","className"];let G=e=>e,pe,fe,de,he;const Z=550,Je=80,Qe=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ze=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),et=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=te(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Qe,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,et,({theme:e})=>e.transitions.easing.easeInOut),ot=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,qe),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),T=_e(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(f=>{const{pulsate:M,rippleX:x,rippleY:S,rippleSize:I,cb:z}=f;p(y=>[...y,N.jsx(nt,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:S,rippleSize:I},d.current)]),d.current+=1,g.current=z},[t]),$=a.useCallback((f={},M={},x=()=>{})=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,w;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),D=Math.round(P.height/2);else{const{clientX:k,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(k-P.left),D=Math.round(V-P.top)}if(I)w=Math.sqrt((2*P.width**2+P.height**2)/3),w%2===0&&(w+=1);else{const k=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-D),D)*2+2;w=Math.sqrt(k**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:v,rippleY:D,rippleSize:w,cb:x})},T.start(Je,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:S,rippleX:v,rippleY:D,rippleSize:w,cb:x})},[n,U,T]),_=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((f,M)=>{if(T.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,T.start(0,()=>{j(f,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[T]);return a.useImperativeHandle(s,()=>({pulsate:_,start:$,stop:j}),[_,$,j]),N.jsx(tt,A({className:E(m.root,t.root,o),ref:R},c,{children:N.jsx(ie,{component:null,exit:!0,children:u})}))});function it(e){return Ie("MuiButtonBase",e)}const rt=je("MuiButtonBase",["root","disabled","focusVisible"]),st=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],at=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",r&&"disabled",s&&"focusVisible"]},it,n);return s&&l&&(o.root+=` ${l}`),o},lt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),yt=a.forwardRef(function(r,s){const l=me({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:_,onFocusVisible:j,onKeyDown:f,onKeyUp:M,onMouseDown:x,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:y,onTouchStart:P,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:w,type:k}=l,V=ee(l,st),O=a.useRef(null),C=a.useRef(null),be=ce(C,w),{isFocusVisibleRef:re,onFocus:ge,onBlur:Re,ref:Me}=Oe(),[L,X]=a.useState(!1);p&&L&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const ye=q&&!d&&!p;a.useEffect(()=>{L&&b&&!d&&q&&C.current.pulsate()},[d,b,L,q]);function B(i,ae,$e=g){return H(le=>(ae&&ae(le),!$e&&C.current&&C.current[i](le),!0))}const Ce=B("start",x),Ee=B("stop",U),Te=B("stop",$),ve=B("stop",I),Ve=B("stop",i=>{L&&i.preventDefault(),S&&S(i)}),Be=B("start",P),Pe=B("stop",z),De=B("stop",y),we=B("stop",i=>{Re(i),re.current===!1&&X(!1),h&&h(i)},!1),Se=H(i=>{O.current||(O.current=i.currentTarget),ge(i),re.current===!0&&(X(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),ke=H(i=>{b&&!Q.current&&L&&C.current&&i.key===" "&&(Q.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),f&&f(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Le=H(i=>{b&&i.key===" "&&C.current&&L&&!i.defaultPrevented&&(Q.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(V.href||V.to)&&(Y=T);const K={};Y==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,Me,O),se=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:L}),Ne=at(se);return N.jsxs(lt,A({as:Y,className:E(Ne.root,c),ownerState:se,onBlur:we,onClick:R,onContextMenu:Ee,onFocus:Se,onKeyDown:ke,onKeyUp:Le,onMouseDown:Ce,onMouseLeave:Ve,onMouseUp:ve,onDragLeave:Te,onTouchEnd:Pe,onTouchMove:De,onTouchStart:Be,ref:Fe,tabIndex:p?-1:v,type:k},K,V,{children:[o,ye?N.jsx(ot,A({ref:be,center:t},D)):null]}))});export{yt as B};
