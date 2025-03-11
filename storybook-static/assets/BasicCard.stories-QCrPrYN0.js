import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as d}from"./BasicCard-Crf9CsUf.js";import{D as h,C}from"./DeleteButton-C8k5CQjF.js";import"./BasicAutocomplete-C_qj9Am4.js";import{T as m}from"./Typography-BoIFPlTD.js";import"./Card-C3SJ9luZ.js";import"./index-2yJIXLcc.js";import"./createSimplePaletteValueFilter-f1xQdFQc.js";import"./Paper-D5YxxyYJ.js";import"./IconButton-Evw3Oddc.js";import"./useTheme-Mv2hLNO7.js";import"./CircularProgress-CFczv_IR.js";import"./Portal-C2p8qrFj.js";import"./index-BIKhx-Qu.js";import"./index-Bn05qqr6.js";import"./TextField-IrykftAk.js";import"./index-Z5uDqKEX.js";import"./Modal-D-cmPCQ6.js";import"./Grow-BMpHSk4c.js";const F={title:"Containers/BasicCard",component:d,parameters:{layout:"centered"},tags:["autodocs"]},l=({...t})=>r.jsx("div",{style:{width:"400px"},children:r.jsx(d,{...t})}),o={render:t=>r.jsx(l,{...t}),args:{title:"Card Title",content:r.jsx("div",{children:r.jsx(m,{children:"This is a basic, informational card"})})}},i={render:t=>r.jsx(l,{...t}),args:{title:"Card Title",content:r.jsx("div",{children:r.jsx(m,{children:"This is a card with a few actions on the bottom"})}),actions:r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>{}}),r.jsx(C,{onClick:()=>{}})]})}};var a,s,e;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    title: "Card Title",
    content: <div>
        <Typography>{"This is a basic, informational card"}</Typography>
      </div>
  }
}`,...(e=(s=o.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};var n,c,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <BasicUsage {...props} />,
  args: {
    title: "Card Title",
    content: <div>
        <Typography>
          {"This is a card with a few actions on the bottom"}
        </Typography>
      </div>,
    actions: <>
        <DeleteButton onClick={() => {}} />
        <ConfirmButton onClick={() => {}} />
      </>
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["Card","CardWithActions"];export{o as Card,i as CardWithActions,O as __namedExportsOrder,F as default};
