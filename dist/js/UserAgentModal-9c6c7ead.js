var w=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(r,o,t)=>o in r?w(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,h=(r,o)=>{for(var t in o||(o={}))_.call(o,t)&&g(r,t,o[t]);if(d)for(var t of d(o))B.call(o,t)&&g(r,t,o[t]);return r};var f=(r,o,t)=>new Promise((n,a)=>{var c=i=>{try{m(t.next(i))}catch(s){a(s)}},l=i=>{try{m(t.throw(i))}catch(s){a(s)}},m=i=>i.done?n(i.value):Promise.resolve(i.value).then(c,l);m((t=t.apply(r,o)).next())});import{d as M,a7 as y,ac as A,aa as F,f as R,u as p,af as k}from"./vue-ebecda47.js";import{B as v}from"./index-e91e8b28.js";import"./index-a2e0ccba.js";import{d as C}from"./user.data-f8f5590c.js";import{h as L,m as N}from"./user.api-729c8827.js";import{u as O,B as U}from"./useForm-21b78d9f.js";import{E as x}from"./index-85cfc899.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./validator-fb5fa821.js";import"./renderUtils-e0ecd00e.js";const kt=M({__name:"UserAgentModal",emits:["success","register"],setup(r,{emit:o}){const[t,{resetFields:n,setFieldsValue:a,validate:c}]=O({schemas:C,showActionButtonGroup:!1}),[l,{setModalProps:m,closeModal:i}]=x(e=>f(this,null,function*(){yield n(),m({confirmLoading:!1});const u=yield L({userName:e.userName});e=u.result?u.result:e,yield a(h({},e))}));function s(){return f(this,null,function*(){try{const e=yield c();m({confirmLoading:!0}),yield N(e),i(),o("success")}finally{m({confirmLoading:!1})}})}return(e,u)=>(y(),A(p(v),k(e.$attrs,{onRegister:p(l),width:800,title:"用户代理",onOk:s,destroyOnClose:""}),{default:F(()=>[R(p(U),{onRegister:p(t)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{kt as default};