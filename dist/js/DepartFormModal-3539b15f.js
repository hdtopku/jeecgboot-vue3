var D=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var C=(t,r,o)=>r in t?D(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,v=(t,r)=>{for(var o in r||(r={}))k.call(r,o)&&C(t,o,r[o]);if(y)for(var o of y(r))x.call(r,o)&&C(t,o,r[o]);return t};var u=(t,r,o)=>new Promise((d,p)=>{var c=i=>{try{a(o.next(i))}catch(l){p(l)}},f=i=>{try{a(o.throw(i))}catch(l){p(l)}},a=i=>i.done?d(i.value):Promise.resolve(i.value).then(c,f);a((o=o.apply(t,r)).next())});import{d as P,c as R,l as w,e as j,a7 as S,ac as U,aa as A,f as I,u as s,af as L}from"./vue-ebecda47.js";import"./index-a2e0ccba.js";import{B as T}from"./index-e91e8b28.js";import{b as V}from"./depart.api-1888bf18.js";import{u as E,o as B}from"./depart.data-400b56fa.js";import{u as G,B as N}from"./useForm-21b78d9f.js";import{E as $}from"./index-85cfc899.js";import"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-cd7703c8.js";import"./vxe-table-vendor-4aae63bf.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./index-be9b0972.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";const Uo=P({__name:"DepartFormModal",props:{rootTreeData:{type:Array,default:()=>[]}},emits:["success","register"],setup(t,{emit:r}){const o=t,d=R("prefixCls"),p=w(!1),c=w({}),f=j(()=>p.value?"编辑":"新增"),[a,{resetFields:i,setFieldsValue:l,validate:F,updateSchema:O}]=G({schemas:E().basicFormSchema,showActionButtonGroup:!1}),[M,{setModalProps:g,closeModal:_}]=$(e=>u(this,null,function*(){yield i(),p.value=s(e==null?void 0:e.isUpdate);let n=s(e==null?void 0:e.isChild),h=n?B.child:B.root;O([{field:"parentId",show:n,componentProps:{disabled:n,treeData:o.rootTreeData}},{field:"orgCode",show:!1},{field:"orgCategory",componentProps:{options:h}}]);let m=s(e==null?void 0:e.record);typeof m!="object"&&(m={}),m=Object.assign({departOrder:0,orgCategory:h[0].value},m),c.value=m,yield l(v({},m))}));function b(){return u(this,null,function*(){try{g({confirmLoading:!0});let e=yield F();yield V(e,p.value),_(),r("success")}finally{g({confirmLoading:!1})}})}return(e,n)=>(S(),U(s(T),L({title:f.value,width:800},e.$attrs,{onOk:b,onRegister:s(M)}),{default:A(()=>[I(s(N),{onRegister:s(a)},null,8,["onRegister"])]),_:1},16,["title","onRegister"]))}});export{Uo as default};