var v=Object.defineProperty;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var w=(a,o,e)=>o in a?v(a,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[o]=e,_=(a,o)=>{for(var e in o||(o={}))B.call(o,e)&&w(a,e,o[e]);if(g)for(var e of g(o))C.call(o,e)&&w(a,e,o[e]);return a};var f=(a,o,e)=>new Promise((u,d)=>{var m=s=>{try{t(e.next(s))}catch(i){d(i)}},c=s=>{try{t(e.throw(s))}catch(i){d(i)}},t=s=>s.done?u(s.value):Promise.resolve(s.value).then(m,c);t((e=e.apply(a,o)).next())});import{B as x}from"./index.fa33ec21.js";import{B as F}from"./BasicForm.10d2bac8.js";import"./componentMap.bd60345c.js";import{u as y}from"./useForm.92846014.js";import"./JAddInput.2d4443c3.js";import{j as M,C as R,bH as I,K as n,s as k,Q as b,w as L,v as U,x as j}from"./index.9d4ffdff.js";import{r as O}from"./role.data.3cd8e824.js";import{j as P,k as S}from"./role.api.ddf56708.js";const Q=M({__name:"RoleIndexModal",emits:["register","success"],setup(a,{emit:o}){const e=R(!0),[u,{resetFields:d,setFieldsValue:m,validate:c}]=y({labelWidth:150,schemas:O,showActionButtonGroup:!1}),[t,{setModalProps:s,closeModal:i}]=I(l=>f(this,null,function*(){var p;yield d(),s({confirmLoading:!1}),m({roleCode:l.roleCode});let r=yield P({roleCode:l.roleCode});e.value=!!((p=r.result)!=null&&p.id),n(e)&&(yield m(_({},r.result)))}));function h(l){return f(this,null,function*(){try{let r=yield c();s({confirmLoading:!0}),yield S(r,e.value),i(),o("success",{isUpdate:e.value,values:r})}finally{s({confirmLoading:!1})}})}return(l,r)=>(k(),b(n(x),j(l.$attrs,{onRegister:n(t),title:"\u9996\u9875\u914D\u7F6E",onOk:h,width:"40%"}),{default:L(()=>[U(n(F),{onRegister:n(u)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{Q as _};