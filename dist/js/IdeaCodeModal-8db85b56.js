var v=Object.defineProperty;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(i,e,o)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o,w=(i,e)=>{for(var o in e||(e={}))B.call(e,o)&&h(i,o,e[o]);if(d)for(var o of d(e))I.call(e,o)&&h(i,o,e[o]);return i};var f=(i,e,o)=>new Promise((l,n)=>{var a=r=>{try{s(o.next(r))}catch(p){n(p)}},c=r=>{try{s(o.throw(r))}catch(p){n(p)}},s=r=>r.done?l(r.value):Promise.resolve(r.value).then(a,c);s((o=o.apply(i,e)).next())});import{B as F}from"./index-9d0047d3.js";import{B as M}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as _}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as k}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{s as C}from"./IdeaCode.api-b021f756.js";import{d as y,k as P,u as m,e as R,a5 as U,a9 as Y,a7 as D,f as L,ag as O}from"./vue-bcbaddf9.js";import"./jeecg-online-vendor-885afdd4.js";import"./antd-vue-vendor-a78909e6.js";import"./tinymce-vendor-676f8393.js";import"./vxe-table-vendor-9edfd3ae.js";import"./lodash-es-vendor-9b741fb8.js";import"./BasicModal-5ab8e0d9.js";import"./useWindowSizeFn-e9ba77b6.js";import"./echarts-vendor-6c8e2159.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7b6f7701.js";import"./useFormItem-4c9e708e.js";import"./JUpload.vue_vue_type_style_index_0_lang-4988a4ba.js";import"./download-19743191.js";import"./base64Conver-fa2fe1af.js";import"./index-9331928c.js";import"./index-8e8b432a.js";import"./useCountdown-4ab5c024.js";import"./index-ae3db9b9.js";import"./areaDataUtil-661e31ab.js";import"./props-53502c55.js";import"./JSelectBiz-fda4a398.js";import"./index-d096c39b.js";import"./codemirror-vendor-611c4582.js";import"./index-b8c8f01c.js";import"./bem-2f6fe1be.js";import"./props-c7c3390f.js";import"./useContextMenu-790e41ea.js";import"./depart.api-6f5abe31.js";const x=[{label:"",field:"id",component:"Input",show:!1},{label:"激活码",field:"code",component:"Input"},{label:"jet激活码id",field:"activeCodeId",component:"Input"},{label:"获取总次数",field:"count",component:"InputNumber"},{label:"备注",field:"remark",component:"Input"},{label:"激活码状态(0:正常,-1:失效)",field:"valid",component:"Input"},{label:"验证状态(0：未使用,1:使用中,-1:已过期)",field:"status",component:"Input"},{label:"打开时间",field:"openTime",component:"DatePicker",componentProps:{showTime:!0,valueFormat:"YYYY-MM-DD hh:mm:ss"}}],Mo=y({__name:"IdeaCodeModal",emits:["register","success"],setup(i,{emit:e}){const o=P(!0),[l,{resetFields:n,setFieldsValue:a,validate:c}]=_({labelWidth:150,schemas:x,showActionButtonGroup:!1}),[s,{setModalProps:r,closeModal:p}]=k(t=>f(this,null,function*(){yield n(),r({confirmLoading:!1,showCancelBtn:t==null?void 0:t.showFooter,showOkBtn:t==null?void 0:t.showFooter}),o.value=!!(t!=null&&t.isUpdate),m(o)&&(yield a(w({},t.record)))})),g=R(()=>m(o)?"编辑":"新增");function b(t){return f(this,null,function*(){try{let u=yield c();r({confirmLoading:!0}),yield C(u,o.value),p(),e("success",{isUpdate:o.value,values:u})}finally{r({confirmLoading:!1})}})}return(t,u)=>(U(),Y(m(F),O(t.$attrs,{onRegister:m(s),title:g.value,onOk:b,width:"40%"}),{default:D(()=>[L(m(M),{onRegister:m(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Mo as default};