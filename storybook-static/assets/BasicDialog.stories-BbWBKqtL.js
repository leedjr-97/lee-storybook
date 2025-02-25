import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./BasicDialog-NCWZSuMh.js";import{r as c}from"./index-2yJIXLcc.js";import{B as g}from"./BasicButton-TMCtVSSe.js";import"./DeleteButton-BfCEXekI.js";import"./Button-Sn30byPN.js";import"./createSimplePaletteValueFilter-FxfzK0sK.js";import"./CircularProgress-B6eBX4kq.js";import"./ConfirmButton-brko93FV.js";import"./IconButton-C_oJ-C_I.js";import"./useTheme-B2KAgDW3.js";import"./useTheme-DsuocGr7.js";import"./useSlot-DdvZqwQY.js";import"./Paper-CxgEBIwN.js";import"./Modal-CwE_SqCc.js";import"./Portal-FTL_fcYu.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./Typography-B9_CJtyB.js";import"./index-BMdf9mC3.js";const b={title:"Containers/BasicDialog",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d=({dialogTitle:t,children:e})=>{const[m,r]=c.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(g,{title:"Open Dialog",onClick:()=>{r(p=>!p)}}),i.jsx(l,{isOpen:m,toggleDialog:r,dialogTitle:t,children:e})]})},o={render:({dialogTitle:t,children:e})=>i.jsx(d,{dialogTitle:t,children:e}),args:{isOpen:!1,toggleDialog:()=>{},dialogTitle:"Basic Dialog",children:"With some content inside the dialog"}};var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: ({
    dialogTitle,
    children
  }) => <BasicUsage dialogTitle={dialogTitle} children={children} />,
  args: {
    isOpen: false,
    toggleDialog: () => {},
    dialogTitle: "Basic Dialog",
    children: "With some content inside the dialog"
  }
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const q=["BasicDialog"];export{o as BasicDialog,q as __namedExportsOrder,b as default};
