import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./BasicAutocomplete-BctrIfDV.js";import{r as x}from"./index-2yJIXLcc.js";import"./TextField-IrykftAk.js";import"./createSimplePaletteValueFilter-f1xQdFQc.js";import"./Portal-C2p8qrFj.js";import"./CircularProgress-CFczv_IR.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./index-Z5uDqKEX.js";import"./useTheme-Mv2hLNO7.js";import"./Modal-D-cmPCQ6.js";import"./IconButton-Evw3Oddc.js";import"./Grow-BMpHSk4c.js";import"./Paper-D5YxxyYJ.js";const A=[{id:0,name:"Option 1"},{id:1,name:"Option 2"},{id:2,name:"Option 3"}],h=[{id:0,name:"Option 1",extra:"An extra parameter"},{id:1,name:"Option 2",extra:"Another extra parameter"},{id:2,name:"Option 3",extra:null}],w={title:"Interactable/BasicAutocomplete",component:l,parameters:{layout:"centered"},tags:["autodocs"]},c=e=>{const[u,d]=x.useState(null);return r.jsx("div",{style:{width:"200px"},children:r.jsx(l,{...e,value:u,onChange:g=>{d(g)}})})},t={render:e=>r.jsx(c,{...e}),args:{label:"Autocomplete",value:null,onChange:()=>{},options:A}},o={render:e=>r.jsx(c,{...e}),args:{label:"Autocomplete",value:null,onChange:()=>{},options:h}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    label: "Autocomplete",
    value: null,
    onChange: () => {},
    options: options
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    label: "Autocomplete",
    value: null,
    onChange: () => {},
    options: optionsUsingGenerics
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const I=["Autocomplete","AutocompleteWithAnotherParameter"];export{t as Autocomplete,o as AutocompleteWithAnotherParameter,I as __namedExportsOrder,w as default};
