var B=Object.defineProperty;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?B(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,g=(t,r)=>{for(var o in r||(r={}))v.call(r,o)&&f(t,o,r[o]);if(d)for(var o of d(r))F.call(r,o)&&f(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((a,n)=>{var c=e=>{try{p(o.next(e))}catch(m){n(m)}},l=e=>{try{p(o.throw(e))}catch(m){n(m)}},p=e=>e.done?a(e.value):Promise.resolve(e.value).then(c,l);p((o=o.apply(t,r)).next())});import{d as M,c as y,l as C,e as I,u as s,a7 as R,ac as k,aa as L,f as O,af as U}from"./vue-ebecda47.js";import{B as b}from"./index-e91e8b28.js";import"./index-a2e0ccba.js";import{e as x,s as P}from"./erplist.api-5cbf505c.js";import{u as S,B as V}from"./useForm-21b78d9f.js";import{E as j}from"./index-85cfc899.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./renderUtils-e0ecd00e.js";const Oo=M({__name:"JeecgOrderCustomerModal",emits:["success","register"],setup(t,{emit:r}){const o=y("orderId")||"",a=C(!0),[n,{resetFields:c,setFieldsValue:l,validate:p}]=S({labelWidth:150,schemas:x,showActionButtonGroup:!1}),[e,{setModalProps:m,closeModal:h}]=j(i=>u(this,null,function*(){yield c(),m({confirmLoading:!1}),a.value=!!(i!=null&&i.isUpdate),s(a)&&(yield l(g({},i.record)))})),_=I(()=>s(a)?"编辑":"新增");function w(){return u(this,null,function*(){try{const i=yield p();m({confirmLoading:!0}),s(o)&&(i.orderId=s(o)),yield P(i,a.value),h(),r("success")}finally{m({confirmLoading:!1})}})}return(i,A)=>(R(),k(s(b),U(i.$attrs,{onRegister:s(e),title:_.value,onOk:w,width:700}),{default:L(()=>[O(s(V),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Oo as default};