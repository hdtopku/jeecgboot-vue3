var B=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?B(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,g=(a,t)=>{for(var e in t||(t={}))h.call(t,e)&&f(a,e,t[e]);if(u)for(var e of u(t))w.call(t,e)&&f(a,e,t[e]);return a};var p=(a,t,e)=>new Promise((c,n)=>{var l=o=>{try{s(e.next(o))}catch(r){n(r)}},d=o=>{try{s(e.throw(o))}catch(r){n(r)}},s=o=>o.done?c(o.value):Promise.resolve(o.value).then(l,d);s((e=e.apply(a,t)).next())});import{B as M}from"./BasicForm-2f1a8584.js";import"./componentMap-da21b34e.js";import{u as F}from"./useForm-d3b54d9c.js";import"./JAddInput-5dab1a67.js";import"./JSelectUser-5289e428.js";import"./JSelectDept-085a989c.js";import"./JPopup-347128c1.js";import{B as y}from"./index-7711d1b4.js";import"./cron-parser-vendor-15f47fa7.js";import{B as R}from"./index-465fff25.js";import{a as T,b as k}from"./template.api-d061cd9e.js";import{d as S,u as m,a5 as b,a9 as v,a7 as x,f as C,ag as L}from"./vue-bcbaddf9.js";const J=S({__name:"TemplateTestModal",emits:["register"],setup(a,{emit:t}){const[e,{resetFields:c,setFieldsValue:n,validate:l,updateSchema:d}]=F({schemas:T,showActionButtonGroup:!1}),[s,{setModalProps:o,closeModal:r}]=y(i=>p(this,null,function*(){yield c(),yield n(g({},m(i.record)))}));function _(){return p(this,null,function*(){try{const i=yield l();o({confirmLoading:!0}),yield k(i),r()}finally{o({confirmLoading:!1})}})}return(i,P)=>(b(),v(m(R),L({onRegister:m(s),title:"发送测试",width:800},i.$attrs,{onOk:_}),{default:x(()=>[C(m(M),{onRegister:m(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{J as _};