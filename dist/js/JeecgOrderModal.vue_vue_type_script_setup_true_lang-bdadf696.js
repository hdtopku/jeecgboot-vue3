var B=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var d=(r,s,e)=>s in r?B(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,g=(r,s)=>{for(var e in s||(s={}))w.call(s,e)&&d(r,e,s[e]);if(p)for(var e of p(s))F.call(s,e)&&d(r,e,s[e]);return r};var f=(r,s,e)=>new Promise((l,c)=>{var m=o=>{try{i(e.next(o))}catch(n){c(n)}},u=o=>{try{i(e.throw(o))}catch(n){c(n)}},i=o=>o.done?l(o.value):Promise.resolve(o.value).then(m,u);i((e=e.apply(r,s)).next())});import{B as v}from"./index-8cf3aabb.js";import{B as M}from"./BasicForm-83ba9c88.js";import"./componentMap-a6d21ad6.js";import{u as k}from"./useForm-fa63344e.js";import"./JAddInput-2cbbbde9.js";import{A as y}from"./index-fde9c72f.js";import{k as R,l as b}from"./erplist.api-2ed0a772.js";import{d as L,k as O,u as a,e as U,aV as V,ar as x,bi as A,f as C,aQ as P}from"./vue-c7e3516e.js";const j=L({__name:"JeecgOrderModal",emits:["success","register"],setup(r,{emit:s}){const e=O(!0),[l,{resetFields:c,setFieldsValue:m,validate:u}]=k({labelWidth:150,schemas:R,showActionButtonGroup:!1}),[i,{setModalProps:o,closeModal:n}]=y(t=>f(this,null,function*(){yield c(),o({confirmLoading:!1}),e.value=!!(t!=null&&t.isUpdate),a(e)&&(yield m(g({},t.record)))})),_=U(()=>a(e)?"\u7F16\u8F91":"\u65B0\u589E");function h(){return f(this,null,function*(){try{const t=yield u();o({confirmLoading:!0}),yield b(t,e.value),n(),s("success")}finally{o({confirmLoading:!1})}})}return(t,S)=>(V(),x(a(v),P(t.$attrs,{onRegister:a(i),title:_.value,onOk:h,width:700}),{default:A(()=>[C(a(M),{onRegister:a(l)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{j as _};