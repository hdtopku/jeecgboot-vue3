var _=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var f=(a,s,e)=>s in a?_(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,g=(a,s)=>{for(var e in s||(s={}))w.call(s,e)&&f(a,e,s[e]);if(p)for(var e of p(s))h.call(s,e)&&f(a,e,s[e]);return a};var u=(a,s,e)=>new Promise((c,m)=>{var l=t=>{try{o(e.next(t))}catch(r){m(r)}},d=t=>{try{o(e.throw(t))}catch(r){m(r)}},o=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,d);o((e=e.apply(a,s)).next())});import{B as M}from"./BasicForm.0e850cba.js";import"./componentMap.c8679e96.js";import{u as F}from"./useForm.8e9d7e3a.js";import"./JAddInput.09222b6f.js";import{j as y,bH as R,K as n,s as T,Q as b,w as k,v,x}from"./index.25572ab7.js";import{B as D}from"./index.117f635e.js";import{a as S,b as C}from"./template.api.c373d21a.js";const N=y({__name:"TemplateTestModal",emits:["register"],setup(a,{emit:s}){const[e,{resetFields:c,setFieldsValue:m,validate:l,updateSchema:d}]=F({schemas:S,showActionButtonGroup:!1}),[o,{setModalProps:t,closeModal:r}]=R(i=>u(this,null,function*(){yield c(),yield m(g({},n(i.record)))}));function B(){return u(this,null,function*(){try{const i=yield l();t({confirmLoading:!0}),yield C(i),r()}finally{t({confirmLoading:!1})}})}return(i,L)=>(T(),b(n(D),x({onRegister:n(o),title:"\u53D1\u9001\u6D4B\u8BD5",width:800},i.$attrs,{onOk:B}),{default:k(()=>[v(n(M),{onRegister:n(e)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{N as _};