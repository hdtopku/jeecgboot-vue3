var y=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(o,t,r)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,B=(o,t)=>{for(var r in t||(t={}))I.call(t,r)&&v(o,r,t[r]);if(g)for(var r of g(t))L.call(t,r)&&v(o,r,t[r]);return o},_=(o,t)=>S(o,T(t));var w=(o,t,r)=>new Promise((i,a)=>{var c=s=>{try{p(r.next(s))}catch(n){a(n)}},m=s=>{try{p(r.throw(s))}catch(n){a(n)}},p=s=>s.done?i(s.value):Promise.resolve(s.value).then(c,m);p((r=r.apply(o,t)).next())});import{d as P,l,e as A,u as G,V as U,a7 as N,ac as j,aa as q,f as x}from"./vue-ebecda47.js";import{B as z,u as E}from"./index-5c1c038a.js";import"./index-a2e0ccba.js";import{a as H}from"./user.api-729c8827.js";import{t as J}from"./tenant.data-d59cff77.js";import{s as K}from"./tenant.api-82c12bef.js";import{B as M,u as Q}from"./useForm-21b78d9f.js";import{_ as W}from"./jeecg-online-vendor-cfb58502.js";import"./antd-vue-vendor-b75e8c06.js";import"./tinymce-vendor-7c917b36.js";import"./index-85cfc899.js";import"./lodash-es-vendor-cd7703c8.js";import"./codemirror-vendor-9b2dceac.js";import"./echarts-vendor-ba343549.js";import"./vxe-table-vendor-4aae63bf.js";import"./componentMap-c36c4b8d.js";import"./useFormItem-ba20c4de.js";import"./index-e91e8b28.js";import"./BasicModal-7e6e7ae9.js";import"./useWindowSizeFn-50bd5ea0.js";import"./index-be9b0972.js";import"./download-c9e5f3f7.js";import"./base64Conver-fa2fe1af.js";import"./index-96e99de8.js";import"./index-118a05d7.js";import"./useCountdown-00a25cd7.js";import"./useFormItemSingle-36e25e6f.js";import"./JAddInput-64f6e84f.js";import"./areaDataUtil-4a5c6609.js";import"./JSelectUser-94adcf4d.js";import"./props-c57324f9.js";import"./JSelectBiz-4fc2f082.js";import"./index-1c3e0ea1.js";import"./index-097af6f9.js";import"./bem-311698ef.js";import"./props-13a58630.js";import"./useContextMenu-eb481e60.js";import"./depart.api-1888bf18.js";import"./JSelectDept-394df716.js";import"./JPopup-f9a8bda3.js";import"./cron-parser-vendor-afad4b1e.js";import"./JEllipsis-410bb5e8.js";import"./JUpload-ffe34816.js";import"./index-ae3841ab.js";import"./index-ab54dd3c.js";import"./renderUtils-e0ecd00e.js";import"./validator-fb5fa821.js";const X=P({name:"TenantUserDrawer",components:{BasicDrawer:z,BasicForm:M},emits:["success","register"],setup(o,{emit:t}){const r=l(""),i=l(!1),a=A(()=>i.value?"编辑人员":"添加人员"),[c,{setFieldsValue:m,resetFields:p,validate:s,setProps:n,clearValidate:C}]=Q({schemas:J,showActionButtonGroup:!1,labelCol:{span:24},wrapperCol:{span:24}}),d=l(!0),[b,{closeDrawer:k,setDrawerProps:O}]=E(e=>w(this,null,function*(){var D;if(i.value=e.isUpdate,yield p(),d.value=(D=e==null?void 0:e.showFooter)!=null?D:!0,O({showFooter:d.value}),G(i)){const f=yield H({userId:e.record.id});let F="";f&&f.length>0&&(F=f.map($=>$.value));let V=_(B({},e.record),{selecteddeparts:F,selectedroles:e.record.selectedroles});r.value=e.status,yield m(V)}n({disabled:!(e!=null&&e.showFooter)}),e!=null&&e.showFooter||(yield C())})),u=l(!1);function R(){return w(this,null,function*(){const e=yield s();e.username||(e.username=e.phone),e.password="123456",u.value=!0,yield K(e,i.value),u.value=!1,t("success"),h()})}function h(){k()}return{isUpdate:i,title:a,registerForm:c,registerDrawer:b,handleSubmit:R,handleClose:h,status:r,confirmLoading:u}}});function Y(o,t,r,i,a,c){const m=U("BasicForm"),p=U("BasicDrawer");return N(),j(p,{onRegister:o.registerDrawer,title:o.title,width:580,destroyOnClose:"",onOk:o.handleSubmit},{default:q(()=>[x(m,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},8,["onRegister","title","onOk"])}const Ke=W(X,[["render",Y]]);export{Ke as default};