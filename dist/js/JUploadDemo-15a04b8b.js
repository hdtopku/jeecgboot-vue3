import{d as y,l as C,V as u,a7 as x,a8 as U,f as t,aa as e,E as m,u as a,F}from"./vue-ebecda47.js";import"./index-a2e0ccba.js";import{_ as h}from"./index-38e4d5c0.js";import"./index-e91e8b28.js";import{F as B}from"./index-85cfc899.js";import{u as k,B as w}from"./useForm-21b78d9f.js";import{U as l}from"./JUpload-ffe34816.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-be9b0972.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";const Co=y({__name:"JUploadDemo",setup(J){const n=C(""),d=[{field:"uploadFile",component:"JUpload",helpMessage:"无限制上传",label:"上传文件"},{field:"uploadFileMax",component:"JUpload",helpMessage:"最多上传3个文件",label:"上传文件（3）",componentProps:{maxCount:3}},{field:"uploadImage",component:"JUpload",label:"上传图片",helpMessage:"无限制上传",componentProps:{fileType:l.image}},{field:"uploadImageMax",component:"JUpload",label:"上传图片（1）",helpMessage:"最多上传1张图片",componentProps:{fileType:l.image,maxCount:1}}],[f,{openModal:c}]=B(),[g,{setProps:b,validate:R,setFieldsValue:T}]=k({labelWidth:120,schemas:d,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function _(p){}function s(p){b({disabled:!!p})}function v(){c(!0,{maxCount:9,fileType:l.image})}return(p,o)=>{const r=u("a-button"),M=u("a-button-group");return x(),U(F,null,[t(M,{class:"j-table-operator"},{default:e(()=>[t(r,{type:"primary",onClick:o[0]||(o[0]=i=>s(0))},{default:e(()=>[m("启用")]),_:1}),t(r,{type:"primary",onClick:o[1]||(o[1]=i=>s(1))},{default:e(()=>[m("禁用")]),_:1}),t(r,{type:"primary",onClick:v},{default:e(()=>[m("文件弹窗")]),_:1})]),_:1}),t(a(w),{onRegister:a(g),onSubmit:_},null,8,["onRegister"]),t(a(h),{value:n.value,"onUpdate:value":o[2]||(o[2]=i=>n.value=i),onRegister:a(f)},null,8,["value","onRegister"])],64)}}});export{Co as default};