var C=Object.defineProperty,M=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(o,s,e)=>s in o?C(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,d=(o,s)=>{for(var e in s||(s={}))x.call(s,e)&&_(o,e,s[e]);if(g)for(var e of g(s))I.call(s,e)&&_(o,e,s[e]);return o},F=(o,s)=>M(o,P(s));var f=(o,s,e)=>new Promise((m,u)=>{var l=t=>{try{n(e.next(t))}catch(i){u(i)}},p=t=>{try{n(e.throw(t))}catch(i){u(i)}},n=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,p);n((e=e.apply(o,s)).next())});import{B as R}from"./index.df1721d5.js";import{B as y}from"./BasicForm.be7f03c1.js";import"./componentMap.6d6ce384.js";import{u as A}from"./useForm.b4df01c5.js";import"./JAddInput.d2fd0723.js";import{j as B,C as w,bH as E,H as r,m as b,s as D,Q as H,w as L,v as O,x as S}from"./index.0be4b5b8.js";import{p as U}from"./tenant.data.7740e1c7.js";import{a as V,e as j}from"./tenant.api.c971b801.js";const G=B({name:"tenant-pack-menu-modal"}),X=B(F(d({},G),{emits:["register","success"],setup(o,{emit:s}){const e=w(!1),[m,{resetFields:u,setFieldsValue:l,validate:p}]=A({schemas:U,showActionButtonGroup:!1}),n=w(),[t,{setModalProps:i,closeModal:h}]=E(a=>f(this,null,function*(){yield u(),e.value=!!(a!=null&&a.isUpdate),n.value=a.tenantId,r(e)&&(console.log(a.record),yield l(d({},a.record)))})),k=b(()=>r(e)?"\u65B0\u589E\u79DF\u6237\u4EA7\u54C1\u5305":"\u7F16\u8F91\u79DF\u6237\u4EA7\u54C1\u5305");function v(a){return f(this,null,function*(){const c=yield p();i({confirmLoading:!0}),c.tenantId=r(n),r(e)?yield j(c):yield V(c),s("success"),i({confirmLoading:!1}),h()})}return(a,c)=>(D(),H(r(R),S(a.$attrs,{onRegister:r(t),title:k.value,onOk:v,width:"800px",destroyOnClose:""}),{default:L(()=>[O(r(y),{onRegister:r(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}}));export{X as _};