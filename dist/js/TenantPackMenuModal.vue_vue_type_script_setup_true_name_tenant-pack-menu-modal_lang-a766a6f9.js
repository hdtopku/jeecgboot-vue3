var M=Object.defineProperty,P=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(t,s,e)=>s in t?M(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,d=(t,s)=>{for(var e in s||(s={}))R.call(s,e)&&_(t,e,s[e]);if(g)for(var e of g(s))x.call(s,e)&&_(t,e,s[e]);return t},k=(t,s)=>P(t,I(s));var f=(t,s,e)=>new Promise((l,m)=>{var p=o=>{try{i(e.next(o))}catch(n){m(n)}},u=o=>{try{i(e.throw(o))}catch(n){m(n)}},i=o=>o.done?l(o.value):Promise.resolve(o.value).then(p,u);i((e=e.apply(t,s)).next())});import{B as y}from"./index-9d0047d3.js";import{B as C}from"./BasicForm-cb329d14.js";import"./componentMap-b7e1d2b2.js";import{u as L}from"./useForm-fd714c19.js";import"./JAddInput-63b4f847.js";import"./JSelectUser-43dfc55e.js";import"./JSelectDept-3f191bfb.js";import"./JPopup-99598936.js";import{B as O}from"./index-4b015b65.js";import"./cron-parser-vendor-658b8fec.js";import{p as S}from"./tenant.data-316a80cd.js";import{a as U,e as V}from"./tenant.api-a8627522.js";import{d as B,k as w,u as r,e as b,a5 as A,a9 as G,a7 as N,f as $,ag as j}from"./vue-bcbaddf9.js";const q=B({name:"tenant-pack-menu-modal"}),te=B(k(d({},q),{emits:["register","success"],setup(t,{emit:s}){const e=w(!1),[l,{resetFields:m,setFieldsValue:p,validate:u}]=L({schemas:S,showActionButtonGroup:!1}),i=w(),[o,{setModalProps:n,closeModal:h}]=O(a=>f(this,null,function*(){yield m(),e.value=!!(a!=null&&a.isUpdate),i.value=a.tenantId,r(e)&&(yield p(d({},a.record)))})),v=b(()=>r(e)?"新增租户产品包":"编辑租户产品包");function F(a){return f(this,null,function*(){const c=yield u();n({confirmLoading:!0}),c.tenantId=r(i),r(e)?yield V(c):yield U(c),s("success"),n({confirmLoading:!1}),h()})}return(a,c)=>(A(),G(r(y),j(a.$attrs,{onRegister:r(o),title:v.value,onOk:F,width:"800px",destroyOnClose:""}),{default:N(()=>[$(r(C),{onRegister:r(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}}));export{te as _};