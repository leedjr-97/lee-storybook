import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{B as et}from"./BasicButton-TMCtVSSe.js";import{C as xt}from"./ConfirmButton-brko93FV.js";import{r as g}from"./index-2yJIXLcc.js";import{a as rt,g as nt,u as ot,s as X,c as $,b as B,e as at,m as V,l as vt,h as yt,p as st,q as it}from"./createSimplePaletteValueFilter-FxfzK0sK.js";import{u as wt}from"./index-Cf6Om8nS.js";import{u as lt}from"./useTheme-B2KAgDW3.js";import{T as kt,g as bt,a as q,r as Dt}from"./Portal-FTL_fcYu.js";import{c as Ct}from"./CircularProgress-B6eBX4kq.js";import{o as pt,M as jt}from"./Modal-CwE_SqCc.js";import{d as Rt,F as Tt}from"./FormHelperText-qZQZwe1M.js";import{P as St}from"./Paper-CxgEBIwN.js";import{B as Et}from"./Button-Sn30byPN.js";import{T as z}from"./Typography-B9_CJtyB.js";import"./useTheme-DsuocGr7.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./useSlot-DdvZqwQY.js";import"./index-BMdf9mC3.js";function $t(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Bt(t){return parseFloat(t)}function Pt(t,e,n){const r=e.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),p=pt(e);let i;if(e.fakeTransform)i=e.fakeTransform;else{const l=p.getComputedStyle(e);i=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let h=0,c=0;if(i&&i!=="none"&&typeof i=="string"){const l=i.split("(")[1].split(")")[0].split(",");h=parseInt(l[4],10),c=parseInt(l[5],10)}return t==="left"?a?`translateX(${a.right+h-r.left}px)`:`translateX(${p.innerWidth+h-r.left}px)`:t==="right"?a?`translateX(-${r.right-a.left-h}px)`:`translateX(-${r.left+r.width-h}px)`:t==="up"?a?`translateY(${a.bottom+c-r.top}px)`:`translateY(${p.innerHeight+c-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-c}px)`:`translateY(-${r.top+r.height-c}px)`}function At(t){return typeof t=="function"?t():t}function M(t,e,n){const r=At(n),a=Pt(t,e,r);a&&(e.style.webkitTransform=a,e.style.transform=a)}const Lt=g.forwardRef(function(e,n){const r=lt(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},p={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:h=!0,children:c,container:l,direction:d="down",easing:x=a,in:u,onEnter:y,onEntered:T,onEntering:w,onExit:D,onExited:S,onExiting:I,style:E,timeout:C=p,TransitionComponent:j=kt,...R}=e,f=g.useRef(null),N=Ct(bt(c),f,n),k=s=>m=>{s&&(m===void 0?s(f.current):s(f.current,m))},b=k((s,m)=>{M(d,s,l),Dt(s),y&&y(s,m)}),v=k((s,m)=>{const L=q({timeout:C,style:E,easing:x},{mode:"enter"});s.style.webkitTransition=r.transitions.create("-webkit-transform",{...L}),s.style.transition=r.transitions.create("transform",{...L}),s.style.webkitTransform="none",s.style.transform="none",w&&w(s,m)}),P=k(T),A=k(I),ft=k(s=>{const m=q({timeout:C,style:E,easing:x},{mode:"exit"});s.style.webkitTransition=r.transitions.create("-webkit-transform",m),s.style.transition=r.transitions.create("transform",m),M(d,s,l),D&&D(s)}),mt=k(s=>{s.style.webkitTransition="",s.style.transition="",S&&S(s)}),gt=s=>{i&&i(f.current,s)},H=g.useCallback(()=>{f.current&&M(d,f.current,l)},[d,l]);return g.useEffect(()=>{if(u||d==="down"||d==="right")return;const s=Rt(()=>{f.current&&M(d,f.current,l)}),m=pt(f.current);return m.addEventListener("resize",s),()=>{s.clear(),m.removeEventListener("resize",s)}},[d,u,l]),g.useEffect(()=>{u||H()},[u,H]),o.jsx(j,{nodeRef:f,onEnter:b,onEntered:P,onEntering:v,onExit:ft,onExited:mt,onExiting:A,addEndListener:gt,appear:h,in:u,timeout:C,...R,children:(s,{ownerState:m,...L})=>g.cloneElement(c,{ref:N,style:{visibility:s==="exited"&&!u?"hidden":void 0,...E,...c.props.style},...L})})});function Mt(t){return rt("MuiDrawer",t)}nt("MuiDrawer",["root","docked","paper","anchorLeft","anchorRight","anchorTop","anchorBottom","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const ct=(t,e)=>{const{ownerState:n}=t;return[e.root,(n.variant==="permanent"||n.variant==="persistent")&&e.docked,e.modal]},Ut=t=>{const{classes:e,anchor:n,variant:r}=t,a={root:["root",`anchor${B(n)}`],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${B(n)}`,r!=="temporary"&&`paperAnchorDocked${B(n)}`]};return at(a,Mt,e)},Ot=X(jt,{name:"MuiDrawer",slot:"Root",overridesResolver:ct})(V(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer}))),K=X("div",{shouldForwardProp:vt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ct})({flex:"0 0 auto"}),Yt=X(St,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.paper,e[`paperAnchor${B(n.anchor)}`],n.variant!=="temporary"&&e[`paperAnchorDocked${B(n.anchor)}`]]}})(V(({theme:t})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:e})=>e.anchor==="left"&&e.variant!=="temporary",style:{borderRight:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="top"&&e.variant!=="temporary",style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="right"&&e.variant!=="temporary",style:{borderLeft:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="bottom"&&e.variant!=="temporary",style:{borderTop:`1px solid ${(t.vars||t).palette.divider}`}}]}))),dt={left:"right",right:"left",top:"down",bottom:"up"};function zt(t){return["left","right"].includes(t)}function Xt({direction:t},e){return t==="rtl"&&zt(e)?dt[e]:e}const It=g.forwardRef(function(e,n){const r=ot({props:e,name:"MuiDrawer"}),a=lt(),p=wt(),i={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:h="left",BackdropProps:c,children:l,className:d,elevation:x=16,hideBackdrop:u=!1,ModalProps:{BackdropProps:y,...T}={},onClose:w,open:D=!1,PaperProps:S={},SlideProps:I,TransitionComponent:E=Lt,transitionDuration:C=i,variant:j="temporary",...R}=r,f=g.useRef(!1);g.useEffect(()=>{f.current=!0},[]);const N=Xt({direction:p?"rtl":"ltr"},h),b={...r,anchor:h,elevation:x,open:D,variant:j,...R},v=Ut(b),P=o.jsx(Yt,{elevation:j==="temporary"?x:0,square:!0,...S,className:$(v.paper,S.className),ownerState:b,children:l});if(j==="permanent")return o.jsx(K,{className:$(v.root,v.docked,d),ownerState:b,ref:n,...R,children:P});const A=o.jsx(E,{in:D,direction:dt[N],timeout:C,appear:f.current,...I,children:P});return j==="persistent"?o.jsx(K,{className:$(v.root,v.docked,d),ownerState:b,ref:n,...R,children:A}):o.jsx(Ot,{BackdropProps:{...c,...y,transitionDuration:C},className:$(v.root,v.modal,d),open:D,ownerState:b,onClose:w,hideBackdrop:u,ref:n,...R,...T,children:A})});function Nt(t){return rt("MuiSkeleton",t)}nt("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Wt=t=>{const{classes:e,variant:n,animation:r,hasChildren:a,width:p,height:i}=t;return at({root:["root",n,r,a&&"withChildren",a&&!p&&"fitContent",a&&!i&&"heightAuto"]},Nt,e)},W=it`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,F=it`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,Ft=typeof W!="string"?st`
        animation: ${W} 2s ease-in-out 0.5s infinite;
      `:null,Vt=typeof F!="string"?st`
        &::after {
          animation: ${F} 2s linear 0.5s infinite;
        }
      `:null,Ht=X("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(V(({theme:t})=>{const e=$t(t.shape.borderRadius)||"px",n=Bt(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:yt(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:r})=>r.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:r})=>r.hasChildren&&!r.width,style:{maxWidth:"fit-content"}},{props:({ownerState:r})=>r.hasChildren&&!r.height,style:{height:"auto"}},{props:{animation:"pulse"},style:Ft||{animation:`${W} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:Vt||{"&::after":{animation:`${F} 2s linear 0.5s infinite`}}}]}})),U=g.forwardRef(function(e,n){const r=ot({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:p,component:i="span",height:h,style:c,variant:l="text",width:d,...x}=r,u={...r,animation:a,component:i,variant:l,hasChildren:!!x.children},y=Wt(u);return o.jsx(Ht,{as:i,ref:n,className:$(y.root,p),ownerState:u,...x,style:{width:d,height:h,...c}})}),ht=({isOpen:t,toggleDrawer:e,title:n,children:r,childrenLoading:a,onReset:p,resetText:i="Reset",resetLoading:h,onSave:c,saveText:l="Save",saveLoading:d,saveErrorText:x,placement:u="right",backgroundColor:y,drawerWidth:T=500})=>{const w=()=>{e(!1)};return o.jsx(It,{open:t,onClose:w,anchor:u,PaperProps:{style:{background:y}},children:o.jsxs("div",{style:{width:`${T}px`,marginTop:"16px",display:"flex",flexDirection:"column",flex:1,height:"100%",overflow:"hidden"},children:[o.jsxs("div",{style:{margin:"0 8px 0 8px"},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[o.jsx(Et,{variant:"outlined",style:{justifySelf:"flex-start"},onClick:w,children:"Close"}),p&&o.jsx(et,{title:i,onClick:p,loading:h,variant:"outlined",color:"error"})]}),n&&o.jsx(z,{variant:"h4",style:{alignSelf:"center",margin:"8px 0 0 8px"},children:n})]}),o.jsx("div",{style:{display:"flex",padding:"16px",flex:1,overflowY:"scroll"},children:a?o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[o.jsx(U,{width:"100%",height:"100px"}),o.jsx(U,{width:"100%",height:"100px"}),o.jsx(U,{width:"100%",height:"100px"}),o.jsx(U,{width:"100%",height:"100px"})]}):r}),c&&o.jsxs("div",{style:{margin:"16px",justifySelf:"flex-end"},children:[o.jsx(xt,{title:l,onClick:c,loading:d,fullWidth:!0}),o.jsx(Tt,{error:!0,children:x})]})]})})},he={title:"Containers/BasicDrawer",component:ht,parameters:{layout:"centered"},tags:["autodocs"]},ut=({title:t,children:e,...n})=>{const[r,a]=g.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(et,{title:"Open Drawer",onClick:()=>{a(p=>!p)}}),o.jsx(ht,{title:t,...n,isOpen:r,toggleDrawer:a,children:e})]})},O={render:t=>o.jsx(ut,{...t}),args:{isOpen:!1,toggleDrawer:()=>{},title:"Basic Drawer Title",children:o.jsxs("div",{children:[o.jsx(z,{children:"You can have a title, cancel button, and reset button on the top."}),o.jsx("div",{style:{height:"400px"}}),o.jsx(z,{children:"An the center is scrollable!"}),o.jsx("div",{style:{height:"400px"}}),o.jsx(z,{children:"You can have a save button on the bottom!"})]}),onSave:()=>{}}},Y={render:t=>o.jsx(ut,{...t}),args:{isOpen:!1,toggleDrawer:()=>{},title:"Loading States",children:o.jsx("div",{}),childrenLoading:!0,onSave:()=>{},saveLoading:!0,onReset:()=>{},resetLoading:!0}};var _,G,J;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDrawer: () => {},
    title: "Basic Drawer Title",
    children: <div>
        <Typography>
          {"You can have a title, cancel button, and reset button on the top."}
        </Typography>

        <div style={{
        height: "400px"
      }} />

        <Typography>{"An the center is scrollable!"}</Typography>

        <div style={{
        height: "400px"
      }} />

        <Typography>{"You can have a save button on the bottom!"}</Typography>
      </div>,
    onSave: () => {}
  }
}`,...(J=(G=O.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,tt;Y.parameters={...Y.parameters,docs:{...(Q=Y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDrawer: () => {},
    title: "Loading States",
    children: <div />,
    childrenLoading: true,
    onSave: () => {},
    saveLoading: true,
    onReset: () => {},
    resetLoading: true
  }
}`,...(tt=(Z=Y.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};const ue=["Drawer","LoadingDrawer"];export{O as Drawer,Y as LoadingDrawer,ue as __namedExportsOrder,he as default};
