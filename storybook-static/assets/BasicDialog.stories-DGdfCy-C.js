import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./BasicDialog-DGxBY0rl.js";import{r as m}from"./index-2yJIXLcc.js";import{B as p}from"./DeleteButton-C8k5CQjF.js";import"./IconButton-Evw3Oddc.js";import"./createSimplePaletteValueFilter-f1xQdFQc.js";import"./useTheme-Mv2hLNO7.js";import"./CircularProgress-CFczv_IR.js";import"./Portal-C2p8qrFj.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./Paper-D5YxxyYJ.js";import"./Modal-D-cmPCQ6.js";import"./Typography-BoIFPlTD.js";import"./index-Z5uDqKEX.js";const k={title:"Containers/BasicDialog",component:l,parameters:{layout:"centered"},tags:["autodocs"]},d=({dialogTitle:o,children:t})=>{const[c,a]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Open Dialog",onClick:()=>{a(g=>!g)}}),e.jsx(l,{isOpen:c,toggleDialog:a,dialogTitle:o,children:t})]})},i={render:({dialogTitle:o,children:t})=>e.jsx(d,{dialogTitle:o,children:t}),args:{isOpen:!1,toggleDialog:()=>{},dialogTitle:"Basic Dialog",children:"With some content inside the dialog"}};var r,s,n;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["BasicDialog"];export{i as BasicDialog,y as __namedExportsOrder,k as default};
