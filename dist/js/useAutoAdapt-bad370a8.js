import{l as u}from"./vue-ebecda47.js";import{S as a}from"./index-85cfc899.js";import{useWindowSizeFn as n}from"./useWindowSizeFn-50bd5ea0.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";function w(e){const t=u((e==null?void 0:e.def)||"600px");n(m,100,{immediate:!0});function m(){let i=document.documentElement.clientWidth;switch(!0){case i>a.XL:t.value=(e==null?void 0:e.xl)||"600px";break;case i>a.LG:t.value=(e==null?void 0:e.lg)||"600px";break;case i>a.MD:t.value=(e==null?void 0:e.md)||"600px";break;case i>a.SM:t.value=(e==null?void 0:e.sm)||"500px";break;case i>a.XS:t.value=(e==null?void 0:e.xs)||"400px";break;default:t.value=(e==null?void 0:e.mindef)||"300px";break}}return{width:t,calcWidth:m}}export{w as useAdapt};