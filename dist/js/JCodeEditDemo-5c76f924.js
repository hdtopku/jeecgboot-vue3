import{d,l as a,e as f,u as h,V as n,a7 as C,ac as _,aa as B,f as S}from"./vue-ebecda47.js";import"./index-a2e0ccba.js";import{C as b,_ as v}from"./jeecg-online-vendor-cfb58502.js";import{o as E}from"./select-66528a8f.js";import{d as J}from"./index-85cfc899.js";import{B as g}from"./useForm-21b78d9f.js";import{Q as k}from"./JAddInput-64f6e84f.js";import"./componentMap-c36c4b8d.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./useFormItem-ba20c4de.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./JSelectDept-394df716.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./areaDataUtil-4a5c6609.js";import"./index-1c3e0ea1.js";import"./depart.api-1888bf18.js";const w=[{field:"field1",component:"JCodeEditor",label:"代码编辑器",required:!0,slot:"jCodeEdit",colProps:{span:15},defaultValue:"Hello JeecgBoot"}],R=d({components:{BasicForm:g,JCodeEditor:k},setup(){const o=a(null),{createMessage:r}=b(),t=a(""),i=f(()=>({keyword:h(t)}));function s(e){t.value=e}return{schemas:w,optionsListApi:E,onSearch:J(s,300),searchParams:i,handleReset:()=>{t.value=""},handleSubmit:e=>{r.success("click search,values:"+JSON.stringify(e))},check:o}}});function y(o,r,t,i,s,e){const c=n("JCodeEditor"),l=n("BasicForm");return C(),_(l,{labelWidth:200,schemas:o.schemas,showResetButton:!1,showSubmitButton:!1,actionColOptions:{span:24},onSubmit:o.handleSubmit,onReset:o.handleReset,style:{height:"800px"}},{jCodeEdit:B(({model:m,field:p})=>[S(c,{value:m[p],"onUpdate:value":u=>m[p]=u,mode:"js",height:"300px",fullScreen:!0},null,8,["value","onUpdate:value"])]),_:1},8,["schemas","onSubmit","onReset"])}const Bo=v(R,[["render",y]]);export{Bo as default};