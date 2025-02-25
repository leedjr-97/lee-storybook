import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{B as g}from"./BasicDialog-NCWZSuMh.js";import{r as u}from"./index-2yJIXLcc.js";import{B as d}from"./BasicButton-TMCtVSSe.js";import"./DeleteButton-BfCEXekI.js";import"./Button-Sn30byPN.js";import"./createSimplePaletteValueFilter-FxfzK0sK.js";import"./CircularProgress-B6eBX4kq.js";import"./ConfirmButton-brko93FV.js";import"./IconButton-C_oJ-C_I.js";import"./useTheme-B2KAgDW3.js";import"./useTheme-DsuocGr7.js";import"./useSlot-DdvZqwQY.js";import"./Paper-CxgEBIwN.js";import"./Modal-CwE_SqCc.js";import"./Portal-FTL_fcYu.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./Typography-B9_CJtyB.js";import"./index-BMdf9mC3.js";const p=({isOpen:r,toggleDialog:s,title:e="Are You Sure",message:a,onCancel:l,onConfirm:c})=>o.jsx(g,{isOpen:r,dialogTitle:e,toggleDialog:s,children:a,handleCancel:l,handleConfirm:c,confirmText:"Confirm"}),R={title:"Prebuilt/Dialogs/AreYouSureDialog",component:p,parameters:{layout:"centered"},tags:["autodocs"]},f=r=>{const[s,e]=u.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(d,{title:"Open Dialog",onClick:()=>{e(a=>!a)}}),o.jsx(p,{...r,isOpen:s,toggleDialog:e})]})},t={render:r=>o.jsx(f,{...r}),args:{isOpen:!1,toggleDialog:()=>{},message:"Are you sure you want to perform some action?",onConfirm:()=>{},onCancel:()=>{}}};var i,n,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDialog: () => {},
    message: "Are you sure you want to perform some action?",
    onConfirm: () => {},
    onCancel: () => {}
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const q=["AreYouSureDialogStory"];export{t as AreYouSureDialogStory,q as __namedExportsOrder,R as default};
