import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as g}from"./BasicDrawer-BL6xbxvi.js";import{r as y}from"./index-2yJIXLcc.js";import{B as j}from"./DeleteButton-C8k5CQjF.js";import"./BasicAutocomplete-BctrIfDV.js";import{T as a}from"./Typography-BoIFPlTD.js";import"./createSimplePaletteValueFilter-f1xQdFQc.js";import"./Grow-BMpHSk4c.js";import"./Portal-C2p8qrFj.js";import"./CircularProgress-CFczv_IR.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./IconButton-Evw3Oddc.js";import"./useTheme-Mv2hLNO7.js";import"./Modal-D-cmPCQ6.js";import"./TextField-IrykftAk.js";import"./index-Z5uDqKEX.js";import"./Paper-D5YxxyYJ.js";const q={title:"Containers/BasicDrawer",component:g,parameters:{layout:"centered"},tags:["autodocs"]},m=({title:r,children:h,...u})=>{const[v,o]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"Open Drawer",onClick:()=>{o(x=>!x)}}),e.jsx(g,{title:r,...u,isOpen:v,toggleDrawer:o,children:h})]})},t={render:r=>e.jsx(m,{...r}),args:{isOpen:!1,toggleDrawer:()=>{},title:"Basic Drawer Title",children:e.jsxs("div",{children:[e.jsx(a,{children:"You can have a title, cancel button, and reset button on the top."}),e.jsx("div",{style:{height:"400px"}}),e.jsx(a,{children:"An the center is scrollable!"}),e.jsx("div",{style:{height:"400px"}}),e.jsx(a,{children:"You can have a save button on the bottom!"})]}),onSave:()=>{}}},n={render:r=>e.jsx(m,{...r}),args:{isOpen:!1,toggleDrawer:()=>{},title:"Loading States",children:e.jsx("div",{}),childrenLoading:!0,onSave:()=>{},saveLoading:!0,onReset:()=>{},resetLoading:!0}};var s,i,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const z=["Drawer","LoadingDrawer"];export{t as Drawer,n as LoadingDrawer,z as __namedExportsOrder,q as default};
