var h=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var d=(r,s,e)=>s in r?h(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,_=(r,s)=>{for(var e in s||(s={}))w.call(s,e)&&d(r,e,s[e]);if(g)for(var e of g(s))B.call(s,e)&&d(r,e,s[e]);return r};var f=(r,s,e)=>new Promise((c,n)=>{var l=o=>{try{a(e.next(o))}catch(i){n(i)}},p=o=>{try{a(e.throw(o))}catch(i){n(i)}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(l,p);a((e=e.apply(r,s)).next())});import{B as M}from"./index-abefda79.js";import{B as A}from"./BasicForm-21b7ac92.js";import"./componentMap-8ca03aee.js";import{u as F}from"./useForm-69b31c99.js";import"./JAddInput-b8d2ab38.js";import"./JSelectUser-d2cfe039.js";import"./JSelectDept-f59102d9.js";import"./JPopup-78bf3f5d.js";import{B as y}from"./index-0d179770.js";import"./cron-parser-vendor-7c1c3251.js";import{c as R}from"./user.data-5cd7e8b1.js";import{h as k,i as v}from"./user.api-32d45f59.js";import{d as L,a5 as N,a9 as U,a7 as x,f as C,u as m,ag as O}from"./vue-bcbaddf9.js";const K=L({__name:"UserAgentModal",emits:["success","register"],setup(r,{emit:s}){const[e,{resetFields:c,setFieldsValue:n,validate:l}]=F({schemas:R,showActionButtonGroup:!1}),[p,{setModalProps:a,closeModal:o}]=y(t=>f(this,null,function*(){yield c(),a({confirmLoading:!1});const u=yield k({userName:t.userName});t=u.result?u.result:t,yield n(_({},t))}));function i(){return f(this,null,function*(){try{const t=yield l();a({confirmLoading:!0}),yield v(t),o(),s("success")}finally{a({confirmLoading:!1})}})}return(t,u)=>(N(),U(m(M),O(t.$attrs,{onRegister:m(p),width:800,title:"用户代理",onOk:i}),{default:x(()=>[C(m(A),{onRegister:m(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{K as _};