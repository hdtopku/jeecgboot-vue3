var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(r,o,t)=>o in r?I(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,v=(r,o)=>{for(var t in o||(o={}))B.call(o,t)&&h(r,t,o[t]);if(f)for(var t of f(o))x.call(o,t)&&h(r,t,o[t]);return r};var d=(r,o,t)=>new Promise((n,a)=>{var l=i=>{try{m(t.next(i))}catch(p){a(p)}},c=i=>{try{m(t.throw(i))}catch(p){a(p)}},m=i=>i.done?n(i.value):Promise.resolve(i.value).then(l,c);m((t=t.apply(r,o)).next())});import{d as F,l as _,e as k,u as s,a7 as y,ac as b,aa as M,f as R,af as U}from"./vue-50733b77.js";import{B as A}from"./index-f7d688aa.js";import"./index-7e7a94e9.js";import{s as C}from"./Am.api-715d6cb5.js";import{u as L,B as O}from"./useForm-14ceb529.js";import{E as S}from"./index-b34ff7bc.js";import"./jeecg-online-vendor-d3e1865b.js";import"./antd-vue-vendor-c5335947.js";import"./tinymce-vendor-7c917b36.js";import"./lodash-es-vendor-058e2396.js";import"./vxe-table-vendor-838914b0.js";import"./BasicModal-064024e0.js";import"./useWindowSizeFn-34cbae37.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./componentMap-5c02cfaf.js";import"./useFormItem-915d7f1b.js";import"./index-fa22fec6.js";import"./download-49b89a1a.js";import"./base64Conver-fa2fe1af.js";import"./index-54db12ae.js";import"./index-f3acc26c.js";import"./useCountdown-9338ec9a.js";import"./useFormItemSingle-37938520.js";import"./JAddInput-9c2385b5.js";import"./areaDataUtil-5dfcdadb.js";import"./JSelectUser-99e618da.js";import"./props-2079d80b.js";import"./JSelectBiz-f98b6288.js";import"./index-95220aa0.js";import"./index-7963a080.js";import"./bem-e62027cc.js";import"./props-12d3a914.js";import"./useContextMenu-e6153f12.js";import"./depart.api-1967d2cb.js";import"./JSelectDept-0fd43050.js";import"./JPopup-8bd4163b.js";import"./cron-parser-vendor-19ac00ef.js";import"./JEllipsis-66e02300.js";import"./JUpload-c8630cc9.js";import"./index-665aeeac.js";import"./index-1ac4dcff.js";const T=[{label:"",field:"id",component:"Input",show:!1},{label:"备注",field:"remark",component:"InputTextArea"}],yt=F({__name:"AmModal",emits:["register","success"],setup(r,{emit:o}){const t=_(!0),[n,{resetFields:a,setFieldsValue:l,validate:c}]=L({labelWidth:150,schemas:T,showActionButtonGroup:!1}),[m,{setModalProps:i,closeModal:p}]=S(e=>d(this,null,function*(){yield a(),i({confirmLoading:!1,showCancelBtn:e==null?void 0:e.showFooter,showOkBtn:e==null?void 0:e.showFooter}),t.value=!!(e!=null&&e.isUpdate),s(t)&&(yield l(v({},e.record)))})),w=k(()=>s(t)?"编辑":"新增");function g(e){return d(this,null,function*(){try{let u=yield c();i({confirmLoading:!0}),yield C(u,t.value),p(),o("success",{isUpdate:t.value,values:u})}finally{i({confirmLoading:!1})}})}return(e,u)=>(y(),b(s(A),U(e.$attrs,{onRegister:s(m),title:w.value,onOk:g,width:"96%"}),{default:M(()=>[R(s(O),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{yt as default};