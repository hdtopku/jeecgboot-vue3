var w=Object.defineProperty;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(i,t,o)=>t in i?w(i,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[t]=o,g=(i,t)=>{for(var o in t||(t={}))B.call(t,o)&&d(i,o,t[o]);if(f)for(var o of f(t))v.call(t,o)&&d(i,o,t[o]);return i};var u=(i,t,o)=>new Promise((n,p)=>{var l=r=>{try{s(o.next(r))}catch(a){p(a)}},c=r=>{try{s(o.throw(r))}catch(a){p(a)}},s=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,c);s((o=o.apply(i,t)).next())});import{d as M,l as F,e as k,u as m,a7 as y,ac as R,aa as L,f as O,af as U}from"./vue-ebecda47.js";import{B as b}from"./index-e91e8b28.js";import"./index-a2e0ccba.js";import{k as x,l as C}from"./erplist.api-5cbf505c.js";import{u as P,B as S}from"./useForm-21b78d9f.js";import{E as V}from"./index-85cfc899.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./renderUtils-e0ecd00e.js";const Oo=M({__name:"JeecgOrderModal",emits:["success","register"],setup(i,{emit:t}){const o=F(!0),[n,{resetFields:p,setFieldsValue:l,validate:c}]=P({labelWidth:150,schemas:x,showActionButtonGroup:!1}),[s,{setModalProps:r,closeModal:a}]=V(e=>u(this,null,function*(){yield p(),r({confirmLoading:!1}),o.value=!!(e!=null&&e.isUpdate),m(o)&&(yield l(g({},e.record)))})),h=k(()=>m(o)?"编辑":"新增");function _(){return u(this,null,function*(){try{const e=yield c();r({confirmLoading:!0}),yield C(e,o.value),a(),t("success")}finally{r({confirmLoading:!1})}})}return(e,A)=>(y(),R(m(b),U(e.$attrs,{onRegister:m(s),title:h.value,onOk:_,width:700}),{default:L(()=>[O(m(S),{onRegister:m(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Oo as default};