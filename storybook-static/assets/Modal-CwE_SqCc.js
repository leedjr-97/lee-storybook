import{r as u}from"./index-2yJIXLcc.js";import{a as ie,g as ae,u as ce,c as V,s as X,e as le,m as Ee}from"./createSimplePaletteValueFilter-FxfzK0sK.js";import{o as D,T as xe,g as de,a as ee,r as ye,P as Re}from"./Portal-FTL_fcYu.js";import{c as q,b as te}from"./CircularProgress-B6eBX4kq.js";import{u as H,e as Te}from"./useSlot-DdvZqwQY.js";import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{u as ve}from"./useTheme-B2KAgDW3.js";function ne(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Y(e){return D(e).defaultView||window}function ke(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}const Pe={entering:{opacity:1},entered:{opacity:1}},Ce=u.forwardRef(function(t,o){const n=ve(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:f,in:E,onEnter:k,onEntered:g,onEntering:T,onExit:h,onExited:p,onExiting:I,style:x,timeout:v=s,TransitionComponent:P=xe,...c}=t,m=u.useRef(null),C=q(m,de(a),o),y=b=>l=>{if(b){const d=m.current;l===void 0?b(d):b(d,l)}},R=y(T),S=y((b,l)=>{ye(b);const d=ee({style:x,timeout:v,easing:f},{mode:"enter"});b.style.webkitTransition=n.transitions.create("opacity",d),b.style.transition=n.transitions.create("opacity",d),k&&k(b,l)}),w=y(g),F=y(I),O=y(b=>{const l=ee({style:x,timeout:v,easing:f},{mode:"exit"});b.style.webkitTransition=n.transitions.create("opacity",l),b.style.transition=n.transitions.create("opacity",l),h&&h(b)}),B=y(p),j=b=>{r&&r(m.current,b)};return N.jsx(P,{appear:i,in:E,nodeRef:m,onEnter:S,onEntered:w,onEntering:R,onExit:O,onExited:B,onExiting:F,addEndListener:j,timeout:v,...c,children:(b,{ownerState:l,...d})=>u.cloneElement(a,{style:{opacity:0,visibility:b==="exited"&&!E?"hidden":void 0,...Pe[b],...x,...a.props.style},ref:C,...d})})});function Se(e){return ie("MuiBackdrop",e)}ae("MuiBackdrop",["root","invisible"]);const we=e=>{const{classes:t,invisible:o}=e;return le({root:["root",o&&"invisible"]},Se,t)},Ie=X("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Me=u.forwardRef(function(t,o){const n=ce({props:t,name:"MuiBackdrop"}),{children:s,className:r,component:i="div",invisible:a=!1,open:f,components:E={},componentsProps:k={},slotProps:g={},slots:T={},TransitionComponent:h,transitionDuration:p,...I}=n,x={...n,component:i,invisible:a},v=we(x),P={transition:h,root:E.Root,...T},c={...k,...g},m={slots:P,slotProps:c},[C,y]=H("root",{elementType:Ie,externalForwardedProps:m,className:V(v.root,r),ownerState:x}),[R,S]=H("transition",{elementType:Ce,externalForwardedProps:m,ownerState:x});return N.jsx(R,{in:f,timeout:p,...I,...S,children:N.jsx(C,{"aria-hidden":!0,...y,classes:v,ref:o,children:s})})});function Ne(e){const t=D(e);return t.body===e?Y(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function oe(e){return parseInt(Y(e).getComputedStyle(e).paddingRight,10)||0}function Fe(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function re(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const a=!r.includes(i),f=!Fe(i);a&&f&&K(i,s)})}function G(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ae(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(Ne(n)){const i=ke(Y(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${oe(n)+i}px`;const a=D(n).querySelectorAll(".mui-fixed");[].forEach.call(a,f=>{o.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${oe(f)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=D(n).body;else{const i=n.parentElement,a=Y(n);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function Oe(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Be{constructor(){this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=Oe(o);re(o,t.mount,t.modalRef,s,!0);const r=G(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=G(this.containers,r=>r.modals.includes(t)),s=this.containers[n];s.restore||(s.restore=Ae(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=G(this.containers,i=>i.modals.includes(t)),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,o),re(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Le=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function De(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function je(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Ue(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||je(e))}function Ke(e){const t=[],o=[];return Array.from(e.querySelectorAll(Le)).forEach((n,s)=>{const r=De(n);r===-1||!Ue(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function We(){return!0}function ze(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Ke,isEnabled:i=We,open:a}=e,f=u.useRef(!1),E=u.useRef(null),k=u.useRef(null),g=u.useRef(null),T=u.useRef(null),h=u.useRef(!1),p=u.useRef(null),I=q(de(t),p),x=u.useRef(null);u.useEffect(()=>{!a||!p.current||(h.current=!o)},[o,a]),u.useEffect(()=>{if(!a||!p.current)return;const c=D(p.current);return p.current.contains(c.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),h.current&&p.current.focus()),()=>{s||(g.current&&g.current.focus&&(f.current=!0,g.current.focus()),g.current=null)}},[a]),u.useEffect(()=>{if(!a||!p.current)return;const c=D(p.current),m=R=>{x.current=R,!(n||!i()||R.key!=="Tab")&&c.activeElement===p.current&&R.shiftKey&&(f.current=!0,k.current&&k.current.focus())},C=()=>{var w,F;const R=p.current;if(R===null)return;if(!c.hasFocus()||!i()||f.current){f.current=!1;return}if(R.contains(c.activeElement)||n&&c.activeElement!==E.current&&c.activeElement!==k.current)return;if(c.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!h.current)return;let S=[];if((c.activeElement===E.current||c.activeElement===k.current)&&(S=r(p.current)),S.length>0){const O=!!((w=x.current)!=null&&w.shiftKey&&((F=x.current)==null?void 0:F.key)==="Tab"),B=S[0],j=S[S.length-1];typeof B!="string"&&typeof j!="string"&&(O?j.focus():B.focus())}else R.focus()};c.addEventListener("focusin",C),c.addEventListener("keydown",m,!0);const y=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&C()},50);return()=>{clearInterval(y),c.removeEventListener("focusin",C),c.removeEventListener("keydown",m,!0)}},[o,n,s,i,a,r]);const v=c=>{g.current===null&&(g.current=c.relatedTarget),h.current=!0,T.current=c.target;const m=t.props.onFocus;m&&m(c)},P=c=>{g.current===null&&(g.current=c.relatedTarget),h.current=!0};return N.jsxs(u.Fragment,{children:[N.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:E,"data-testid":"sentinelStart"}),u.cloneElement(t,{ref:I,onFocus:v}),N.jsx("div",{tabIndex:a?0:-1,onFocus:P,ref:k,"data-testid":"sentinelEnd"})]})}function $e(e){return typeof e=="function"?e():e}function He(e){return e?e.props.hasOwnProperty("in"):!1}const se=()=>{},$=new Be;function Ye(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,closeAfterTransition:s=!1,onTransitionEnter:r,onTransitionExited:i,children:a,onClose:f,open:E,rootRef:k}=e,g=u.useRef({}),T=u.useRef(null),h=u.useRef(null),p=q(h,k),[I,x]=u.useState(!E),v=He(a);let P=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(P=!1);const c=()=>D(T.current),m=()=>(g.current.modalRef=h.current,g.current.mount=T.current,g.current),C=()=>{$.mount(m(),{disableScrollLock:n}),h.current&&(h.current.scrollTop=0)},y=te(()=>{const l=$e(t)||c().body;$.add(m(),l),h.current&&C()}),R=()=>$.isTopModal(m()),S=te(l=>{T.current=l,l&&(E&&R()?C():h.current&&K(h.current,P))}),w=u.useCallback(()=>{$.remove(m(),P)},[P]);u.useEffect(()=>()=>{w()},[w]),u.useEffect(()=>{E?y():(!v||!s)&&w()},[E,w,v,s,y]);const F=l=>d=>{var M;(M=l.onKeyDown)==null||M.call(l,d),!(d.key!=="Escape"||d.which===229||!R())&&(o||(d.stopPropagation(),f&&f(d,"escapeKeyDown")))},O=l=>d=>{var M;(M=l.onClick)==null||M.call(l,d),d.target===d.currentTarget&&f&&f(d,"backdropClick")};return{getRootProps:(l={})=>{const d=Te(e);delete d.onTransitionEnter,delete d.onTransitionExited;const M={...d,...l};return{role:"presentation",...M,onKeyDown:F(M),ref:p}},getBackdropProps:(l={})=>{const d=l;return{"aria-hidden":!0,...d,onClick:O(d),open:E}},getTransitionProps:()=>{const l=()=>{x(!1),r&&r()},d=()=>{x(!0),i&&i(),s&&w()};return{onEnter:ne(l,(a==null?void 0:a.props.onEnter)??se),onExited:ne(d,(a==null?void 0:a.props.onExited)??se)}},rootRef:p,portalRef:S,isTopModal:R,exited:I,hasTransition:v}}function qe(e){return ie("MuiModal",e)}ae("MuiModal",["root","hidden","backdrop"]);const Ge=e=>{const{open:t,exited:o,classes:n}=e;return le({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},qe,n)},Ve=X("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(Ee(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),Xe=X(Me,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ot=u.forwardRef(function(t,o){const n=ce({name:"MuiModal",props:t}),{BackdropComponent:s=Xe,BackdropProps:r,classes:i,className:a,closeAfterTransition:f=!1,children:E,container:k,component:g,components:T={},componentsProps:h={},disableAutoFocus:p=!1,disableEnforceFocus:I=!1,disableEscapeKeyDown:x=!1,disablePortal:v=!1,disableRestoreFocus:P=!1,disableScrollLock:c=!1,hideBackdrop:m=!1,keepMounted:C=!1,onBackdropClick:y,onClose:R,onTransitionEnter:S,onTransitionExited:w,open:F,slotProps:O={},slots:B={},theme:j,...b}=n,l={...n,closeAfterTransition:f,disableAutoFocus:p,disableEnforceFocus:I,disableEscapeKeyDown:x,disablePortal:v,disableRestoreFocus:P,disableScrollLock:c,hideBackdrop:m,keepMounted:C},{getRootProps:d,getBackdropProps:M,getTransitionProps:ue,portalRef:fe,isTopModal:pe,exited:J,hasTransition:Q}=Ye({...l,rootRef:o}),U={...l,exited:J},A=Ge(U),W={};if(E.props.tabIndex===void 0&&(W.tabIndex="-1"),Q){const{onEnter:L,onExited:z}=ue();W.onEnter=L,W.onExited=z}const Z={...b,slots:{root:T.Root,backdrop:T.Backdrop,...B},slotProps:{...h,...O}},[me,he]=H("root",{elementType:Ve,externalForwardedProps:Z,getSlotProps:d,additionalProps:{ref:o,as:g},ownerState:U,className:V(a,A==null?void 0:A.root,!U.open&&U.exited&&(A==null?void 0:A.hidden))}),[be,_]=H("backdrop",{elementType:s,externalForwardedProps:Z,additionalProps:r,getSlotProps:L=>M({...L,onClick:z=>{y&&y(z),L!=null&&L.onClick&&L.onClick(z)}}),className:V(r==null?void 0:r.className,A==null?void 0:A.backdrop),ownerState:U}),ge=q(r==null?void 0:r.ref,_.ref);return!C&&!F&&(!Q||J)?null:N.jsx(Re,{ref:fe,container:k,disablePortal:v,children:N.jsxs(me,{...he,children:[!m&&s?N.jsx(be,{..._,ref:ge}):null,N.jsx(ze,{disableEnforceFocus:I,disableAutoFocus:p,disableRestoreFocus:P,isEnabled:pe,open:F,children:u.cloneElement(E,W)})]})})});export{Me as B,Ce as F,ot as M,ke as g,Y as o};
