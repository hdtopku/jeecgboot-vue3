var w=Object.defineProperty;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(r,o,t)=>o in r?w(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,h=(r,o)=>{for(var t in o||(o={}))_.call(o,t)&&g(r,t,o[t]);if(d)for(var t of d(o))B.call(o,t)&&g(r,t,o[t]);return r};var f=(r,o,t)=>new Promise((n,a)=>{var c=i=>{try{m(t.next(i))}catch(s){a(s)}},l=i=>{try{m(t.throw(i))}catch(s){a(s)}},m=i=>i.done?n(i.value):Promise.resolve(i.value).then(c,l);m((t=t.apply(r,o)).next())});import{d as M,a7 as y,ac as A,aa as F,f as R,u as p,af as k}from"./vue-50733b77.js";import{B as v}from"./index-f7d688aa.js";import"./index-7e7a94e9.js";import{d as C}from"./user.data-b2f5a286.js";import{h as L,m as N}from"./user.api-c252cb60.js";import{u as O,B as U}from"./useForm-14ceb529.js";import{E as x}from"./index-b34ff7bc.js";import"./jeecg-online-vendor-d3e1865b.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";import"./validator-0e75b328.js";import"./renderUtils-74a3a0ef.js";const kt=M({__name:"UserAgentModal",emits:["success","register"],setup(r,{emit:o}){const[t,{resetFields:n,setFieldsValue:a,validate:c}]=O({schemas:C,showActionButtonGroup:!1}),[l,{setModalProps:m,closeModal:i}]=x(e=>f(this,null,function*(){yield n(),m({confirmLoading:!1});const u=yield L({userName:e.userName});e=u.result?u.result:e,yield a(h({},e))}));function s(){return f(this,null,function*(){try{const e=yield c();m({confirmLoading:!0}),yield N(e),i(),o("success")}finally{m({confirmLoading:!1})}})}return(e,u)=>(y(),A(p(v),k(e.$attrs,{onRegister:p(l),width:800,title:"用户代理",onOk:s,destroyOnClose:""}),{default:F(()=>[R(p(U),{onRegister:p(t)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{kt as default};