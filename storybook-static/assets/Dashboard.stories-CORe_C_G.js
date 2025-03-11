import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as u,I as h}from"./IconButton-Evw3Oddc.js";import{C as g}from"./Card-C3SJ9luZ.js";import"./index-2yJIXLcc.js";import"./createSimplePaletteValueFilter-f1xQdFQc.js";import"./useTheme-Mv2hLNO7.js";import"./CircularProgress-CFczv_IR.js";import"./Paper-D5YxxyYJ.js";const C=u(e.jsx("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutlineRounded"),n=({onCreate:r,containerStyle:m})=>e.jsx(g,{style:m,children:e.jsx(h,{onClick:r,size:"large",style:{borderRadius:5,width:"100%",height:"100%"},children:e.jsx(C,{fontSize:"large"})})});try{n.displayName="CreateWidget",n.__docgenInfo={description:"",displayName:"CreateWidget",props:{onCreate:{defaultValue:null,description:"",name:"onCreate",required:!0,type:{name:"() => void"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}const l=()=>e.jsx("div",{}),D={title:"Prebuilt/Dashboard/Dashboard",component:l,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(l,{}),args:{}},a={render:({onCreate:r})=>e.jsx("div",{style:{width:"500px",height:"200px"},children:e.jsx(n,{onCreate:r,containerStyle:{height:"100%"}})}),args:{onCreate:()=>{}}};var o,s,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <RenderDashboard />,
  args: {}
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    onCreate
  }) => <div style={{
    width: "500px",
    height: "200px"
  }}>
      <CreateWidget onCreate={onCreate} containerStyle={{
      height: "100%"
    }} />
    </div>,
  args: {
    onCreate: () => {}
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const R=["Dashboard","CreateWidgetStory"];export{a as CreateWidgetStory,t as Dashboard,R as __namedExportsOrder,D as default};
